<!-- LanguageSelector.vue -->
<template>
    <details ref="dropdown">
        <summary>
            <span class="flex items-center gap-2">
                <span>{{ currentLanguage.flag }}</span>
                <span>{{ currentLanguage.name }}</span>
            </span>
        </summary>
        <ul class="rounded-t-none p-2">
            <li v-for="lang in languages" :key="lang.code" @click="selectLanguage(lang)"
                :class="{ 'text-primary font-bold': activeCode === lang.code }" class="cursor-pointer">
                <span class="flex items-center gap-2">
                    <span>{{ lang.flag }}</span>
                    <span>{{ lang.name }}</span>
                </span>
            </li>
        </ul>
    </details>
</template>

<script setup>
import { ref } from 'vue'

const dropdown = ref(null)
const activeCode = ref('es')

const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' }
]

const currentLanguage = ref(languages[0])

const selectLanguage = (lang) => {
    activeCode.value = lang.code
    currentLanguage.value = lang

    if (lang.code === 'es') {
        // Desactivar traducción y volver al original
        restaurarIdiomaOriginal()
    } else if (window.cambiarIdiomaGlobal) {
        window.cambiarIdiomaGlobal(lang.code)
    }

    // Cerrar la etiqueta <details> retirando el foco
    if (document.activeElement) {
        document.activeElement.blur()
    }
    if (dropdown.value) {
        dropdown.value.removeAttribute('open')
    }
}

const restaurarIdiomaOriginal = () => {
    // 1. Borrar cookies de Google Translate en todos los ámbitos
    const domain = location.hostname
    const mainDomain = domain.startsWith('www.') ? domain.substring(4) : domain

    document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${domain}; path=/;`
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=.${mainDomain}; path=/;`

    // 2. Si existe la API de Google Translate cargada, forzarla a 'es' o resetear
    const iframe = document.querySelector('iframe.goog-te-banner-frame')
    if (iframe) {
        iframe.style.display = 'none'
    }

    // 3. Ejecutar callback global si existe, o recargar si no hay otra forma limpia de deshacer cambios en el DOM
    if (window.restaurarTextoOriginal) {
        window.restaurarTextoOriginal()
    } else {
        // Si no hay restaurador manual, recargar la página es la única forma 100% efectiva 
        // de deshacer las mutaciones DOM inyectadas por Google Translate
        location.reload()
    }
}
</script>
<script setup>
import KofiButton from '@/components/common/KofiButton.vue'
</script>
<template>
    <section
        class="panagaming-section bg-black bg-opacity-80 text-gray-200 py-16 px-6 sm:px-12 md:px-20 lg:px-32 font-sans relative overflow-hidden">
        <div class="relative max-w-5xl mx-auto text-center">
            <!-- Título -->
            <h1
                class="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-[#00ff88] drop-shadow-[0_0_15px_#00ff88]">
                <span class="animate-pulse">Donaciones</span>
            </h1>

            <!-- Imagen -->
            <img src="../../assets/images/donations.png" alt="Pana Gaming Wallpaper"
                class="w-full max-h-[400px] sm:max-h-[500px] md:max-h-[600px] rounded-lg shadow-lg shadow-green-500 object-cover" />

            <div class="mt-8">
                <!-- Botón Ko-fi -->
                <a href="https://ko-fi.com/ikerjavierhernandez" target="_blank"
                    class="inline-flex items-center gap-3 sm:gap-4 bg-[#00e5ff] text-black px-4 sm:px-6 py-3 rounded-xl font-semibold text-base sm:text-lg shadow-lg shadow-[#00e5ff]/40 transition-colors hover:bg-[#5ff6ff]">

                    <!-- SVG Ko-fi -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 48 48"
                        class="flex-shrink-0">
                        <path fill="#29b6f6"
                            d="M24,44C12.972,44,4,35.028,4,24S12.972,4,24,4s20,8.972,20,20S35.028,44,24,44z"></path>
                        <path fill="#fff"
                            d="M32.227,15L13,15c-1.105,0-2,0.895-2,2v13c0,1.657,1.343,3,3,3h14c1.657,0,3-1.343,3-3v-2h1.5c3.656,0,6.607-3.019,6.497-6.7C38.89,17.743,35.787,15,32.227,15z M32.5,24.5H31v-6h1.5c1.657,0,3,1.343,3,3v0C35.5,23.157,34.157,24.5,32.5,24.5z">
                        </path>
                        <path fill="#ef5350"
                            d="M23.538,19c-1.084,0-2.022,0.605-2.538,1.498C20.484,19.605,19.546,19,18.462,19c-1.636,0-2.962,1.363-2.962,3.043C15.5,25.522,21,29,21,29s5.5-3.478,5.5-6.957C26.5,20.363,25.174,19,23.538,19z">
                        </path>
                    </svg>

                    Apóyanos en Ko-fi
                </a>
            </div>

            <!-- Texto -->
            <p class="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mt-8 leading-relaxed">
                Tu donación no solo nos ayuda a financiar esta comunidad ni a impulsar nuevos proyectos; también da
                esperanza a muchas personas.
                Pana Gaming nació sin ánimo de lucro, con la intención de mejorar la sociedad y asegurar que nadie
                vuelva a sentirse solo.

                <br><br>

                Con tu apoyo podemos seguir adelante con nuestro propósito: daros un hogar, comprensión y un
                acompañamiento real.

                <br><br>

                En el Staff y en el equipo Ejecutivo de Pana Gaming tenemos un acuerdo muy claro: todas las
                donaciones se usan única y exclusivamente para enriquecer esta comunidad, para que crezca,
                evolucione y siga fiel a nuestra misión.
            </p>
        </div>
    </section>
</template>
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
                <KofiButton/>
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
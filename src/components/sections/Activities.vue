<template>
    <section class="panagaming-section bg-black bg-opacity-80 text-gray-200 py-20 px-6 lg:px-32 font-sans relative overflow-hidden">
        <!-- Fondo digital -->
        <div class="absolute inset-0 bg-[url('/static/images/backgrounds/hexgrid.png')] opacity-10 animate-pulse">
        </div>

        <!-- Contenido principal -->
        <div class="relative max-w-5xl mx-auto text-center">
            <h1 class="text-5xl font-extrabold mb-6 text-[#00ff88] drop-shadow-[0_0_15px_#00ff88]">
                <span class="animate-pulse">Nuestras Actividades</span>
            </h1>
            <p class="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
                En Pana Gaming fomentamos la participación, el aprendizaje y la diversión, creando experiencias
                únicas para todos nuestros miembros.
            </p>
        </div>

        <!-- Tarjetas de actividades -->
        <div class="relative max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Servidores de Minecraft -->
            <div
                class="card bg-[#0a0f0a]/70 backdrop-blur-md border border-[#00ff88]/40 hover:border-[#00ff88] hover:shadow-[0_0_25px_#00ff88] transition-all duration-300">
                <div class="card-body">
                    <h2 class="card-title text-[#00ff88]">Servidores de Minecraft</h2>
                    <p class="text-gray-300 leading-relaxed">
                        Espacios interactivos y creativos donde los miembros pueden construir, explorar y vivir
                        aventuras juntos, fomentando la colaboración, la creatividad y la diversión en un
                        entorno seguro.
                    </p>
                    <img src="../../assets/images/activities/server1.PNG" class="rounded-lg w-full h-auto">

                </div>
            </div>

            <!-- Quedadas para partidas -->
            <div
                class="card bg-[#0a0f0a]/70 backdrop-blur-md border border-[#00ff88]/40 hover:border-[#00ff88] hover:shadow-[0_0_25px_#00ff88] transition-all duration-300">
                <div class="card-body">
                    <h2 class="card-title text-[#00ff88]">Quedadas para partidas</h2>
                    <p class="text-gray-300 leading-relaxed">
                        Organizamos sesiones de juego para títulos como <strong>Repo</strong> y otros juegos
                        populares, ofreciendo un punto de encuentro para la diversión y el compañerismo entre
                        todos los miembros.
                    </p>
                    <img src="../../assets/images/activities/repo.png" class="rounded-lg w-full h-auto">
                </div>
            </div>

            <!-- Formaciones y talleres -->
            <div
                class="card bg-[#0a0f0a]/70 backdrop-blur-md border border-[#00ff88]/40 hover:border-[#00ff88] hover:shadow-[0_0_25px_#00ff88] transition-all duration-300">
                <div class="card-body">
                    <h2 class="card-title text-[#00ff88]">Formaciones y talleres</h2>
                    <p class="text-gray-300 leading-relaxed">
                        <strong>Ciberseguridad y peligros de internet:</strong> enseñamos a navegar seguro y
                        proteger la información personal.
                        <strong>Concienciación sobre neurodiversidad:</strong> próximamente ofreceremos talleres
                        para comprender mejor a las personas neurodivergentes y fomentar la inclusión.
                    </p>
                    <img src="../../assets/images/activities/formation.png" class="rounded-lg w-full h-auto">
                </div>
            </div>

            <!-- Reuniones de comunidad -->
            <div
                class="card bg-[#0a0f0a]/70 backdrop-blur-md border border-[#00ff88]/40 hover:border-[#00ff88] hover:shadow-[0_0_25px_#00ff88] transition-all duration-300">
                <div class="card-body">
                    <h2 class="card-title text-[#00ff88]">Reuniones de comunidad</h2>
                    <p class="text-gray-300 leading-relaxed">
                        Encuentros virtuales y presenciales para compartir ideas, experiencias y proyectos
                        personales. Un espacio clave para fortalecer los lazos, escuchar todas las voces y
                        crecer juntos como comunidad.
                    </p>
                </div>
            </div>
        </div>

        <!-- Lema -->
        <div class="relative text-center mt-16">
            <p class="text-2xl font-semibold text-[#00ff88] drop-shadow-[0_0_20px_#00ff88]">
                🌐 Participa, aprende y conecta con la hermandad digital de Pana Gaming
            </p>
        </div>
    </section>
</template>
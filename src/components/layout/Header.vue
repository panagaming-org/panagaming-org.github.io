<template>
    <div class="header navbar text-white font-bold bg-base-100 shadow-sm sticky top-0 z-50">
        <div class="flex-1">
            <router-link to="/">
                <img src="../../assets/images/logo.png" class="w-15 rounded-full" alt="Logo de Pana Gaming">
            </router-link>
        </div>

        <!-- Menú de escritorio -->
        <div class="hidden lg:flex flex-none items-center space-x-4">
            <ul class="menu menu-horizontal font-bold px-1">
                <li><router-link to="/">Quiénes Somos</router-link></li>
                <li><router-link to="/actividades">Actividades</router-link></li>
                <li><router-link to="/the-backtrack-knights">Los Caballeros Backtrack</router-link></li>
                <li><router-link to="/donaciones">Donaciones</router-link></li>
            </ul>
        </div>

        <!-- Botón hamburguesa para tablet/móvil -->
        <div class="flex-none lg:hidden">
            <div class="dropdown dropdown-end">
                <label tabindex="0" class="text-white btn btn-ghost btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </label>
                <ul tabindex="0"
                    class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-zinc-900 rounded-box w-52">
                    <li><router-link to="/">Quiénes Somos</router-link></li>
                    <li><router-link to="/actividades">Actividades</router-link></li>
                    <li><router-link to="/the-backtrack-knights">Los Caballeros Backtrack</router-link></li>
                    <li><router-link to="/donaciones">Donaciones</router-link></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style>
    .header {
        background-image: url(../../assets/images/backgrounds/header.jpg);
        background-repeat: repeat;
        background-size: 400px 300px;
    }
</style>
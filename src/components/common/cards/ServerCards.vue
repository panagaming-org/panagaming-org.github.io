<script setup>
import { ref, onMounted } from "vue";
import ServerStatus from "@/components/status/ServerStatus.vue";

const servers = ref([]);
const loading = ref(true);

// 1. Al cargar tus datos de la API, asegúrate de agregar 'currentSlide'
const getServers = async () => {
  try {
    const response = await fetch("/api/servers/", {
      credentials: "omit",
    });
    const data = await response.json();

    // Agregamos la propiedad currentSlide a cada servidor para controlar su carrusel
    servers.value = data.map((server) => ({
      ...server,
      currentSlide: 0,
    }));
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
};

// 2. Funciones de navegación
const nextSlide = (server) => {
  if (server.currentSlide < server.images.length - 1) {
    server.currentSlide++;
  } else {
    server.currentSlide = 0; // Vuelve al inicio
  }
};

const prevSlide = (server) => {
  if (server.currentSlide > 0) {
    server.currentSlide--;
  } else {
    server.currentSlide = server.images.length - 1; // Va al final
  }
};

const openModal = (serverId) => {
  const modal = document.getElementById("connect_modal_" + serverId);
  if (modal) {
    modal.showModal();
  }
}

getServers();
</script>

<template>
  <div>
    <div
      class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-8 max-w-7xl mx-auto"
    >
      <div
        v-for="server in servers"
        :key="server.id"
        class="card bg-base-100 shadow-sm border border-base-200 hover:shadow-md transition-shadow duration-300 h-full"
      >
        <figure class="relative group">
          <div class="flex -space-x-2 z-11">
            <ServerStatus :server="server" />
          </div>
          <div class="carousel w-full h-56 bg-neutral">
            <div
              v-for="(image, index) in server.images"
              :key="index"
              class="absolute inset-0 transition-opacity duration-500 ease-in-out"
              :class="
                server.currentSlide === index
                  ? 'opacity-100 z-10'
                  : 'opacity-0 z-0'
              "
            >
              <img :src="image.url" class="w-full h-full object-cover" />
            </div>

            <div
              v-if="server.images.length > 1"
              class="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 z-20 justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <button
                @click="prevSlide(server)"
                class="btn btn-circle btn-xs md:btn-sm bg-black/40 border-none text-white hover:bg-black/70"
              >
                ❮
              </button>

              <button
                @click="nextSlide(server)"
                class="btn btn-circle btn-xs md:btn-sm bg-black/40 border-none text-white hover:bg-black/70"
              >
                ❯
              </button>
            </div>
          </div>
        </figure>

        <div class="card-body p-5">
          <h2
            class="card-title text-xl font-bold flex justify-between items-center"
          >
            {{ server.name || "Servidor Premium" }}
          </h2>

          <p class="text-sm h-23 text-base-content/80 overflow-auto min-h-[4.5rem]">
            {{ server.description }}
          </p>

          <div
            class="card-actions justify-between items-center mt-4 pt-4 border-t border-base-200"
          >
            <button
              v-if="server.status == 'Online'"
              @click="openModal(server.id)"
              class="btn btn-success btn-md gap-2 shadow-sm hover:scale-105"
            >
              Conectarse
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>

            <dialog :id="'connect_modal_' + server.id" class="modal">
              <div class="modal-box">
                <form method="dialog">
                  <button
                    class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  >
                    ✕
                  </button>
                </form>
                <h3 class="text-lg font-bold">
                  Conectarse a: {{ server.name }}
                </h3>
                <p class="py-4">
                  Aquí puedes poner la IP del servidor o las instrucciones de
                  conexión.
                </p>

                <div
                  class="bg-base-200 p-3 rounded-lg font-mono text-sm flex justify-between items-center"
                >
                  <span>{{server.host}}:{{server.port}}</span>
                </div>
              </div>

              <form method="dialog" class="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="loading" class="flex justify-center items-center py-10 h-full">
    <span
      style="width: 100px"
      class="loading loading-spinner text-success h-50"
    ></span>
  </div>

  <div class="h-23"></div>
</template>

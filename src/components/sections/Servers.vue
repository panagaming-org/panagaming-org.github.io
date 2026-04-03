<script setup>
import { ref, onMounted } from "vue";

const servers = ref([]);
const loading = ref(true);

const getServers = async () => {
  try {
    const response = await fetch("/api/servers/");

    if (!response.ok) {
      throw new Error(
        `Error de servidor: ${response.status} ${response.statusText}`,
      );
    }

    const data = await response.json();
    servers.value = data;
  } catch (error) {
    console.error("Detalle técnico del error:", error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  getServers();
});
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
          <div class="absolute top-3 right-3">
            <div
              v-if="server.status == 'Online'"
              class="badge badge-success gap-2 py-3 px-4 font-semibold text-white shadow-sm"
            >
              <span class="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              Online
            </div>
            <div
              v-if="server.status == 'Offline'"
              class="badge gap-2 py-3 px-4 font-semibold text-white shadow-sm"
            >
              <span class="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              Offline
            </div>
            <div
              v-if="server.status == 'Comingsoon'"
              class="badge badge-accent gap-2 py-3 px-4 font-semibold text-white shadow-sm"
            >
              <span class="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              Próximamente
            </div>
            <div
              v-if="server.status == 'Maintaining'"
              class="badge badge-warning gap-2 py-3 px-4 font-semibold text-white shadow-sm"
            >
              <span class="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              En Mantenimiento
            </div>
          </div>
        </figure>

        <div class="card-body p-5">
          <h2
            class="card-title text-xl font-bold flex justify-between items-center"
          >
            {{ server.name || "Servidor Premium" }}
          </h2>

          <p class="text-sm text-base-content/80 line-clamp-3 min-h-[4.5rem]">
            {{ server.description }}
          </p>

          <div
            class="card-actions justify-between items-center mt-4 pt-4 border-t border-base-200"
          >
            <div class="flex -space-x-2">
              <div class="avatar placeholder">
                <div
                  class="bg-neutral text-neutral-content w-8 rounded-full ring ring-base-100"
                >
                  <span class="text-xs">+12</span>
                </div>
              </div>
            </div>

            <button
              class="btn btn-primary btn-md gap-2 shadow-sm hover:scale-105"
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
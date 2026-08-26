<script setup>
import { ref, onMounted } from "vue";
import ServerCards from "@/components/cards/ServerCard.vue";
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";

const servers = ref([]);
const onlineServers = ref([]);
const maintenanceSercers = ref([]);
const comingServers = ref([]);
const offlineServers = ref([]);

const loading = ref(true);

const endpoint = "https://pg-backend-navy.vercel.app/api/servers/";

const getServers = async () => {
  try {
    const response = await fetch(endpoint, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();

    servers.value = data.map((server) => ({
      ...server,
      currentSlide: 0,
    }));
  } finally {
    loading.value = false;
  }
};
getServers();

</script>
<template>
  <Header />
  <div
    class="panagaming-section bg-black bg-opacity-80 text-gray-200 py-20 px-6 lg:px-32 font-sans relative overflow-hidden">
    <h1 class="text-5xl text-center font-extrabold mb-6 text-[#00ff88] drop-shadow-[0_0_15px_#00ff88]">
      <span class="animate-pulse">Servidores</span>
    </h1>
    <div>
      <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-8 max-w-7xl mx-auto">
        <ServerCards 
          :server="server" 
          v-for="server in servers" 
          :key="server.id" />
      </div>
    </div>
    <div v-if="loading" class="flex justify-center items-center py-10 h-full">
      <span style="width: 100px" class="loading loading-spinner text-success h-50"></span>
    </div>
    <div class="h-32"></div>
  </div>
  <Footer />
</template>

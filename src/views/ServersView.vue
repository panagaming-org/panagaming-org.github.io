<script setup>
import ServerCards from "@/components/common/cards/ServerCards.vue";
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
</script>
<template>
  <Header />
  <div
    class="panagaming-section bg-black bg-opacity-80 text-gray-200 py-20 px-6 lg:px-32 font-sans relative overflow-hidden"
  >
    <h1
      class="text-5xl text-center font-extrabold mb-6 text-[#00ff88] drop-shadow-[0_0_15px_#00ff88]"
    >
      <span class="animate-pulse">Servidores</span>
    </h1>
    <ServerCards />
    <div class="h-32"></div>
  </div>
  <Footer />
</template>

<script setup></script>

<template>
  <div>
  <router-view />
  </div>
</template>

<style>
  .panagaming-section {
    background-image: 
      linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
      url(../src/assets/images/backgrounds/exagons-green-neon.png);
    background-repeat: repeat;
    background-attachment: fixed;
    background-size: 1600px;
  }

  .backtrack-section {
    background-image: url(../src/assets/images/backgrounds/kali-blue-sticker.png);
    background-repeat: repeat;
    background-attachment: fixed;
    background-size: 1600px;
  }
</style>
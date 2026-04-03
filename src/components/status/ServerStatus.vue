<script setup>
const props = defineProps({
  server: {
    type: Object,
    required: true
  }
});

const statusConfig = {
  'Online': { label: 'Online', color: 'badge-success' },
  'Offline': { label: 'Offline', color: 'bg-gray-500 border-none' },
  'Comingsoon': { label: 'Próximamente', color: 'badge-info' },
  'Maintaining': { label: 'En Mantenimiento', color: 'badge-warning' }
};
</script>
<template>
  <div class="absolute top-3 right-3">
    <div 
      v-if="statusConfig[server.status]"
      :class="['badge gap-2 py-3 px-4 font-semibold text-white shadow-sm', statusConfig[server.status].color]"
    >
      <span class="w-2 h-2 rounded-full bg-white animate-pulse"></span>
      {{ statusConfig[server.status].label }}
    </div>
    
    <div v-else class="badge badge-ghost opacity-50 text-[10px]">
      Desconocido ({{ server.status }})
    </div>
  </div>
</template>
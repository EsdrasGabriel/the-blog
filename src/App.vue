<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from '@/components/navbar/Navbar.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <Navbar />
  <RouterView />
  <TheFooter></TheFooter>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { AlignJustify, X } from 'lucide-vue-next'
import { navbarLinksMock } from '@/mocks/navbarLinksMock'

const hamburgerMenuIcon = ref<boolean>(true)
const modalMenu = ref<boolean>(false)

function toggleMenu() {
  hamburgerMenuIcon.value = !hamburgerMenuIcon.value
  modalMenu.value = !modalMenu.value
}
</script>

<template>
  <div>
    <button type="button" v-if="hamburgerMenuIcon">
      <AlignJustify :size="32" @click="toggleMenu" />
    </button>
    <div
      v-if="modalMenu"
      class="absolute top-0 left-0 flex flex-col items-end w-screen h-screen bg-gray-950"
    >
      <div
        class="flex flex-col items-end w-screen h-screen gap-5 p-5"
      >
        <button type="button" @click="toggleMenu">
          <X color="white" :size="32" class="z-20" />
        </button>
        <div class="flex items-center justify-center w-full">
          <ul class="flex flex-col items-center justify-center gap-4 text-2xl font-normal text-zinc-50">
            <li v-for="link in navbarLinksMock" :key="link.id">
              <RouterLink :to="link.to">{{ link.name }}</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

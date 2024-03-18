<script setup lang="ts">
import HamburgerMenu from './HamburgerMenu.vue'
import { navbarLinksMock } from '@/mocks/navbarLinksMock'
</script>

<template>
  <header class="flex items-center justify-center w-screen p-5 dark:bg-slate-900 dark:text-zinc-50">
    <nav class="flex justify-between xl:w-[90rem] w-full">
      <span class="text-2xl font-bold">Hello World</span>

      <section>
        <HamburgerMenu class="sm:hidden">
          <template><span class="text-2xl font-bold">Hello World</span></template>
        </HamburgerMenu>
        <ul class="flex items-center justify-center gap-4 text-2xl font-normal max-sm:hidden">
          <li v-for="link in navbarLinksMock" :key="link.id">
            <RouterLink :to="link.to">{{ link.name }}</RouterLink>
          </li>
        </ul>
      </section>
    </nav>
  </header>
</template>

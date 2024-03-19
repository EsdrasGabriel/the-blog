<script setup lang="ts">
import { ref } from 'vue'

import PostCard from '@/components/PostCard.vue'
import { allPostsMock } from '@/mocks/allPostsMock'
import { ArrowLeft, ArrowRight } from 'lucide-vue-next'
import { cardContentMock } from '@/mocks/cardContentMock'

const maxPage = ref<number>(100)
const currentPage = ref<number>(1)

const nextPage = () => {
  if (currentPage.value >= maxPage.value) return
  currentPage.value++
}
const prevPage = () => {
  if (currentPage.value <= 1) return
  currentPage.value--
}
</script>

<template>
  <main class="flex flex-col items-center dark:bg-slate-900">
    <section class="flex justify-center my-5 xl:w-[90rem] w-full">
      <div
        class="flex items-center justify-center w-full border-y-2 border-opacity-30 border-zinc-900 dark:border-zinc-50"
      >
        <h1
          class="mx-5 my-4 font-bold uppercase text-7xl text-zinc-900 lg:text-[12.5rem] 2xl:text-[18.2rem] text-center max-lg:pb-4 lg:pb-6 dark:text-zinc-50"
        >
          The Blog
        </h1>
      </div>
    </section>
    <section
      class="2xl:w-[90rem] w-full my-7 dark:bg-zinc-50 flex flex-col gap-7 items-start max-2xl:px-8"
    >
      <h2 class="text-2xl font-semibold text-zinc-900">Posts recentes no blog</h2>

      <div class="grid w-full grid-cols-2 gap-5 max-lg:grid-cols-1">
        <PostCard
          :data="cardContentMock[0]"
          :key="cardContentMock[0].id"
          class="row-span-2"
          gridDirection="grid-rows-2"
          titleSize="2xl"
          imgHeight="52"
        />
        <div class="grid grid-rows-2 gap-5">
          <PostCard
            :data="cardContentMock[1]"
            :key="cardContentMock[1].id"
            gridDirection="grid-rows-1 sm:grid-cols-2"
            visible="hidden"
            imgHeight="52"
          />
          <PostCard
            :data="cardContentMock[2]"
            :key="cardContentMock[2].id"
            gridDirection="grid-rows-1 sm:grid-cols-2"
            visible="hidden"
            imgHeight="52"
          />
        </div>
        <PostCard
          :data="cardContentMock[3]"
          :key="cardContentMock[3].id"
          class="lg:col-span-2"
          gridDirection="grid-rows-1 lg:grid-cols-2"
          titleSize="2xl"
          imgHeight="52 lg:h-64 xl:h-52"
        />
      </div>
    </section>
    <section
      class="2xl:w-[90rem] w-full my-7 dark:bg-zinc-50 flex flex-col gap-7 items-start max-2xl:px-8"
    >
      <h3 class="text-2xl font-semibold text-zinc-900">Todas as postagens do blog</h3>
      <div class="grid grid-cols-1 pb-5 border-b-2 gap-7 md:grid-cols-2 lg:grid-cols-3">
        <PostCard
          v-for="cardValue in allPostsMock"
          :key="cardValue.id"
          :data="cardValue"
          flexDirection="col"
          imgWidth="full"
          imgHeight="60"
          titleSize="2xl"
        />
      </div>
      <div class="flex justify-between w-full text-sm sm:text-lg">
        <button
          class="flex items-center justify-center gap-2 px-2 py-1 rounded text-zinc-600 hover:bg-zinc-200"
          @click="prevPage"
        >
          <ArrowLeft :size="20" />Anterior
        </button>
        <span class="flex items-center justify-center gap-2 text-zinc-600">
          Página {{ currentPage }} - {{ maxPage }}
        </span>
        <button
          class="flex items-center justify-center gap-2 px-2 py-1 rounded text-zinc-600 hover:bg-zinc-200"
          @click="nextPage"
        >
          Próximo <ArrowRight :size="20" />
        </button>
      </div>
    </section>
  </main>
</template>

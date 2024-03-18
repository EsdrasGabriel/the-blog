<script setup lang="ts">
import PostCard from '@/components/PostCard.vue'
import { cardContentMock } from '@/mocks/cardContentMock'
</script>

<template>
  <main class="flex flex-col items-center w-screen dark:bg-slate-900">
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

      <div class="grid w-full grid-cols-2 gap-5">
        <PostCard
          :data="cardContentMock[0]"
          :key="cardContentMock[0].id"
          class="row-span-2"
          flexDirection="col"
          titleSize="2xl"
          imgHeight="56"
          imgWidth="full"
        >
        </PostCard>
        <div class="grid grid-rows-2 gap-5">
          <PostCard
            :data="cardContentMock[1]"
            :key="cardContentMock[1].id"
            flexDirection="row"
            titleSize="xl"
            visible="hidden"
          >
          </PostCard>
          <PostCard
            :data="cardContentMock[2]"
            :key="cardContentMock[2].id"
            flexDirection="row"
            titleSize="56"
            visible="hidden"
          >
          </PostCard>
        </div>
        <PostCard
          :data="cardContentMock[3]"
          :key="cardContentMock[3].id"
          class="col-span-2"
          flexDirection="row"
          titleSize="2xl"
          imgWidth="1/2"
          imgHeight="[16rem]"
          contentWidth="1/2"
          
        >
        </PostCard>
      </div>
    </section>
  </main>
</template>

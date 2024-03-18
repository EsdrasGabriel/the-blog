<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'

defineProps({
  data: {
    type: Object,
    required: true
  },
  flexDirection: {
    type: String
  },
  imgHeight: {
    type: String
  },
  imgWidth: {
    type: String
  },
  visible: {
    type: Boolean
  },
  contentWidth: {
    type: String
  },
  titleSize: {
    type: String
  }
})
</script>

<template>
  <div :class="`flex flex-${flexDirection} gap-5 flex-1`">
    <img
      :src="data.img"
      :alt="data.alt"
      :class="`object-cover rounded-md w-${imgWidth} h-${imgHeight}`"
    />
    <div :class="`flex flex-col items-start justify-start w-${contentWidth} gap-3 p-2`">
      <span class="flex items-center justify-center gap-1 text-sm font-semibold text-violet-700"
        >{{ data.createdBy }} <div class="w-1 h-1 rounded bg-violet-700"/> {{ data.createdAt }}</span
      >
      <article class="flex flex-col gap-3">
        <div class="flex items-center justify-between">
          <h3 :class="`text-${titleSize} font-semibold text-zinc-900`">{{ data.title }} <span></span></h3>
          <ArrowUpRight :class="`${visible}`" />
        </div>
        <p class="text-base font-normal text-zinc-600">{{ data.content }}</p>
      </article>
      <div class="flex gap-5">
        <span
          v-for="category in data.categories"
          :key="category.id"
          class="px-1 pt-1 pb-[0.375rem] text-sm font-medium text-green-500 bg-green-50 rounded-xl"
        >
          {{ category.category }}
        </span>
      </div>
    </div>
  </div>
</template>

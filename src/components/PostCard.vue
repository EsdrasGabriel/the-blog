<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'

const { data, gridDirection, imgHeight, titleSize, visible } = defineProps({
  data: {
    type: Object,
    required: true
  },
  gridDirection: {
    type: String
  },
  visible: {
    type: String
  },
  titleSize: {
    type: String,
    default: 'xl'
  },
  imgHeight: {
    type: String,
    default: '52'
  }
})

const colorTags = (category: string) => {
  console.log(category)
  let color
  switch (category) {
    case 'Design':
      color = 'text-violet-500 bg-violet-50'
      break
    case 'Research':
      color = 'text-red-500 bg-red-50'
      break
    case 'Presentation':
      color = 'text-blue-500 bg-blue-50'
      break
    default:
      color = 'text-gray-700 bg-gray-50'
      break
  }
  return color
}
</script>

<template>
  <div :class="`grid ${gridDirection} gap-5 h-full w-full`">
    <img :src="data.img" :alt="data.alt" :class="`object-cover rounded-md w-full h-${imgHeight}`" />
    <div :class="`flex flex-col items-start justify-start gap-3 p-2 h-fit`">
      <span class="flex items-center justify-center gap-1 text-sm font-semibold text-violet-700"
        >{{ data.createdBy }}
        <div class="w-1 h-1 rounded bg-violet-700"></div>
        {{ data.createdAt }}</span
      >
      <article class="flex flex-col gap-3">
        <div class="flex items-center justify-between">
          <h3 :class="`text-${titleSize} font-semibold text-zinc-900`">
            {{ data.title }} <span></span>
          </h3>
          <ArrowUpRight :class="`${visible}`" />
        </div>
        <p class="text-base font-normal text-zinc-600">{{ data.content }}</p>
      </article>
      <div class="flex gap-5">
        <span
          v-for="category in data.categories"
          :key="category.id"
          :class="`px-1 pt-1 pb-[0.375rem] text-sm font-medium ${colorTags(category.category)} rounded-xl`"
        >
          {{ category.category }}
        </span>
      </div>
    </div>
  </div>
</template>

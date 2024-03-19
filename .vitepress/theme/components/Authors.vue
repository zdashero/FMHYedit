<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  authors: string[]
}>()

interface Author {
  name: string
  github: string
}

const data = [
  {
    name: 'nbats',
    github: 'nbats'
  },
  {
    name: 'Kai',
    github: 'official-kaizen'
  },
  {
    name: 'taskylizard',
    github: 'taskylizard'
  },
  {
    name: 'zinklog',
    github: 'zinklog2'
  },
  {
    name: 'Q',
    github: 'qiracy'
  }
] satisfies Author[]

const authors = computed(() =>
  data.filter((author) => props.authors.includes(author.name))
)
</script>

<template>
  <div class="flex flex-wrap gap-4 pt-2">
    <div v-for="(c, index) of authors" class="flex gap-2 items-center">
      <img :src="`/api/gh/${c.github}`" class="w-8 h-8 rounded-full" />
      <a :href="`https://github.com/${c.github}`">{{ c.name }}</a>
      <span v-if="index < authors.length - 1">•</span>
    </div>
  </div>
</template>

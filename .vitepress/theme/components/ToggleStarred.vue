<script setup lang="ts">
const toggleStarred = () => document.documentElement.classList.toggle("starred-only");
</script>

<template>
  <button class="p-[4px 8px] text-xl i-carbon:star" @click="toggleStarred()" />
</template>

<style>
.starred-only li:not(.starred) {
  display: none;
}
</style>

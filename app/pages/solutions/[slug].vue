<template>
  <h1>{{ solution?.title }}</h1>
  <ContentRenderer v-if="solution" :value="solution" />
</template>

<script lang="ts" setup>
import type { Solution } from '~/types/solution';
const route = useRoute();

const { data: solution } = await useAsyncData(route.path, () => queryContent<Solution>(route.path).findOne());
if (!solution.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true });
}
</script>

<style></style>
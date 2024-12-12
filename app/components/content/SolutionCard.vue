<template>
  <div class="card">
    <h3 class="title">{{ title }}</h3>
    <p class="description">{{ description }}</p>
    <button class="learn-more">Learn more</button>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: String,
  description: String,
});
</script>

<style>
.card {
  background-color: #1c1c40;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: left;
  color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

.title {
  margin-top: 0.5rem;
  font-size: 1.2rem;
}

.description {
  margin: 1rem 0;
  font-size: 0.9rem;
  color: #ccc;
}

.learn-more {
  background-color: #6a5af9;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
}

.learn-more:hover {
  background-color: #5346c7;
}
</style>
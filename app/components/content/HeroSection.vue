<template>
  <div class="hero-section">
    <div class="content">
      <slot />
    </div>
    <SolutionCard v-for="(feature, index) in features" :key="index" :title="feature.title"
        :description="feature.description" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const features = ref([
  {
    title: "Data analytics",
    description:
      "Comprehensive analytics and predictive insights to optimize user acquisition, monetization, and in-game performance.",
  },
  {
    title: "LiveOps",
    description:
      "Real-time LiveOps tools to scale engagement, retention, and revenue through dynamic, personalized in-game experiences.",
  },
  {
    title: "A/B Tests",
    description:
      "Test, optimize, and scale profitability by simultaneously experimenting with pricing, offers, and features to maximize LTV and ROI.",
  },
  {
    title: "In-apps & Subscriptions Validator",
    description:
      "Ensure accurate revenue tracking by validating purchases and monitoring transactions to prevent fraud and ensure reliable financial reporting.",
  },
  {
    title: "Segmentation",
    description:
      "Boost engagement & maximize revenue by tailoring your offers to exact segments of users based on behavior, payment activity, and any custom parameter.",
  },
  {
    title: "Remote Configs",
    description:
      "Save Time, Boost Revenue with Instant Changes. Quickly implement changes to monetization strategies, features, and user experience without app updates.",
  },
]);
</script>

<style scoped lang="scss">
.hero-section {
  height: 800px;
  width: 100%;
  background-color: $bg-color;
  background-image: url("/hero-bg.png");
  background-repeat: no-repeat;
  background-position: center;

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: $maxContentWidth;
    margin: 0 auto;
    padding: 55px 0;

  }
}
</style>
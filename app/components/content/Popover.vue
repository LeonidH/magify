<template>
  <div class="popover-container" @click.stop="togglePopover" @mouseover.stop="showPopover" @mouseleave="closePopover">
    <slot name="trigger" />

    <div v-if="isVisible" class="popover">
      <slot name="content" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const isVisible = ref(false);

const togglePopover = () => {
  isVisible.value = !isVisible.value;

  if (isVisible.value) {
    document.addEventListener("click", closeOnClickOutside);
  } else {
    document.removeEventListener("click", closeOnClickOutside);
  }
};

const closePopover = () => {
  isVisible.value = false;
  document.removeEventListener("click", closeOnClickOutside);
};

const showPopover = () => {
  isVisible.value = true;
  document.addEventListener("click", closeOnClickOutside);
};

const closeOnClickOutside = (event: any) => {
  const popover = document.querySelector(".popover");
  const trigger = document.querySelector(".popover-container");

  if (
    popover &&
    !popover.contains(event.target) &&
    trigger &&
    !trigger.contains(event.target)
  ) {
    closePopover();
  }
};

onMounted(() => {
  document.removeEventListener("click", closeOnClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", closeOnClickOutside);
});
</script>

<style scoped>
.popover-container {
  position: relative;
}

.popover {
  min-width: 460px;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ffffff;
  color: #000;
  padding: 8px 15px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  box-shadow: 0px 20px 40px rgba(24, 24, 83, 0.2);
  backdrop-filter: blur(10px);
  z-index: 1000;
  text-align: center;
  box-sizing: border-box;
}
</style>
<template>
  <div class="main">
    <slot />
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
.main {
  min-height: 100vh;
  margin-bottom: -$footer-desktop-minheight;
  margin-top: -$header-desktop-minheight;
  padding-top: $header-desktop-minheight;
  box-sizing: border-box;
}
</style>
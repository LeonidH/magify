<template>
    <div class="hero">
    <div class="text-content">
      <h1>Boost your mobile games success with advanced BI</h1>
      <h6>Comprehensive analytics and LiveOps for next-gen mobile games</h6>
      <button class="demo-button">Book a demo</button>
    </div>
    <div class="wizard-image">
      <img src="/hero.png" alt="Wizard" />
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding-left: 140px;
}

.text-content {
  color: #fff;
  max-width: 680px;
  align-self: flex-start;
  margin-bottom: 30px;

  h1 {
    font-size: 56px;
    font-weight: 800;
    line-height: 67px;
    margin-bottom: 30px;
    margin-top: 60px;
  }

  h6 {
    font-size: 18px;
    font-weight: 300;
    line-height: 27px;
    margin-top: 0;
  }
}

.demo-button {
  color: #fff;
  padding: 0.8rem 1.5rem;
  border-radius: 124998.75px;
  cursor: pointer;
  font-size: 20px;
  background: radial-gradient(81.37% 100% at 53.22% 100%, #B24EF0 0%, #6D4DF0 100%);
  box-shadow: 0px 0px 160px 0px rgba(109, 77, 240, 0.6);
  border: none;
  line-height: 30px;

// box-shadow: 0px 1px 1px 0px rgba(255, 255, 255, 0.2) inset;


}

.wizard-image {
  text-align: right;
  max-width: 500px;

  img {
    max-width: 460px;
  }
}
</style>
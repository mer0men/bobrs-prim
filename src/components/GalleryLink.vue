<template>
  <router-link class="rl" :to="`gallery?type=${type}`">посмотреть все фото</router-link>
</template>

<script>
export default {
  props: {
    type: {
      required: true
    }
  }
}
</script>

<style lang="scss">
@import '../assets/variables.scss';

  .rl {
    color: $j-black;
    transition: 0.4s;
    position: absolute;
    bottom: 20px;
    left: 45%;
    text-decoration: none;

    &:hover {
      color: #F1A635;
    }

    @media (max-width: 780px) {
      display: none;
    }
  }
</style>

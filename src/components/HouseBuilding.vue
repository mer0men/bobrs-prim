<template>
  <div class="house-building">
    <slider-btn :direction="'right'"></slider-btn>
    <slider-btn :direction="'left'"></slider-btn>
  </div>
</template>

<script>
import SliderBtn from '@/components/SliderButton'

export default {
  components: {
    SliderBtn
  }
}
</script>

<style lang="scss">
.house-building {
  height: 1000px;
}
</style>

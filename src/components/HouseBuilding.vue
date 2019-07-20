<template>
  <div class="house-building">
    <h2 class="house-building__header">домостроение</h2>
    <div class="slider">
      <div id="item-1" class="item"></div>
      <div id="item-2" class="item"></div>
      <div id="item-3" hidden class="item"></div>
      <div id="item-4" hidden class="item"></div>
      <slider-btn style="right: -13%; top: 20%" :direction="'right'"></slider-btn>
      <slider-btn style="right: -13%; bottom: 20%" :direction="'left'"></slider-btn>
    </div>

  </div>
</template>

<script>
import SliderBtn from '@/components/SliderButton'

export default {
  components: {
    SliderBtn
  },
  data: {
    sliderItems: [],
    slideCount: 4
  },
  mounted() {
    fo
  }
}
</script>

<style lang="scss">
.house-building {
  height: 1000px;
}

.house-building__header {
  text-align: left;
  padding-left: 10.5vw;
}

.slider {
  position: relative;
  padding: 1rem;
  display: flex;
  width: 85%;
  justify-content: space-around;
  align-items: center;


  .item {
    width: 700px;
    height: 700px;
    background: red;
  }


}
</style>

<template>
  <div class="house-building">
    <h2 @click="next" class="house-building__header">домостроение</h2>
    <slick ref="slick" :options="slickOptions">
        <div class="item">
          <img src="https://res.cloudinary.com/meromen/image/upload/w_700,ar_1:1,c_fill,g_auto,e_art:hokusai/v1563534410/bobrs-prim/P1010031_nxnzjy.jpg">
        </div>

        <div class="item">
          <img src="https://res.cloudinary.com/meromen/image/upload/w_700,ar_1:1,c_fill,g_auto,e_art:hokusai/v1563534407/bobrs-prim/IMG_1031_ekpkyr.jpg">
        </div>

        <div class="item">
          <img src="https://res.cloudinary.com/meromen/image/upload/w_700,ar_1:1,c_fill,g_auto,e_art:hokusai/v1563534409/bobrs-prim/IMG_5526_yyrsbl.jpg">
        </div>

        <div class="item">
          <img src="https://res.cloudinary.com/meromen/image/upload/w_700,ar_1:1,c_fill,g_auto,e_art:hokusai/v1563534407/bobrs-prim/IMG_5524_c0cxjo.jpg">
        </div>
    </slick>
    <div @click="next">
      <slider-btn  style="right: 5%; top: 25%;" :direction="'right'"></slider-btn>
    </div>
    
    <div @click="prev">
      <slider-btn  style="right: 5%; bottom: 25%" :direction="'left'"></slider-btn>
    </div>
  </div>
</template>

<script>
import Slick from 'vue-slick'
import SliderBtn from '@/components/SliderButton'


export default {
  components: {
    SliderBtn,
    Slick
  },
  data() {
    return {
      sliderItems: [],
      slideCount: 4,
      slickOptions: {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false
      }
    }
  },
  methods: {
    next() {
      console.log('asd')
      this.$refs.slick.next();
    },
    prev() {
      this.$refs.slick.prev();
    },
  }
}
</script>

<style lang="scss">
@import 'node_modules/slick-carousel/slick/slick.scss';

.house-building {
  height: 800px;
  position: relative;
}

.house-building__header {
  text-align: left;
  padding-left: 10.5vw;
}

.slick-slider {
  width: 85%;
}

.item {
  display: flex !important;
  justify-content: center;
  align-content: center;
  width: 700px;
  height: 700px;
}
</style>

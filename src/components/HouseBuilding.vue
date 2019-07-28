<template>
  <div ref="hb" v-scroll="handleScroll" id="hb" class="house-building block">
    <h2 class="house-building__header">домостроение</h2>
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
      <slider-btn  style="right: 5%; top: 30%;" :direction="'right'"></slider-btn>
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
  data () {
    return {
      sliderItems: [],
      slideCount: 4,
      slickOptions: {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        draggable: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 700,
        responsive: [
          {
            breakpoint: 780,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              swipeToSlide: true,
              arrows: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              swipeToSlide: true,
              arrows: false
            }
          }
        ]
      }
    }
  },
  methods: {
    next () {
      this.$refs.slick.next()
    },
    prev () {
      this.$refs.slick.prev()
    },
    handleScroll: function (evt, el) {
      if (window.scrollY > this.posY) {
        el.setAttribute(
          'style',
          'opacity: 1; transform: translate3d(0, -10px, 0)'
        )
      }
      return window.scrollY > (this.posY + 50)
    }
  },
  computed: {
    posY () {
      return this.$refs.hb.getBoundingClientRect().top - screen.height / 3
    }
  }
}
</script>

<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
@import 'node_modules/slick-carousel/slick/slick.scss';

.house-building {
  position: relative;
  opacity: 0;
  transition: 0.7s;
  transform: translateY(-30%);

  .slick-current {
    .item {
      transform: scale(1);
    }
  }

  .active {
    transform: translateY(0%) !important;
    opacity: 1 !important;
  }

  .slick-slider {
    width: 85%;
    @media (max-width: 780px) {
      width: 100%;
    }
  }
}

.house-building__header {
  text-align: left;
  padding-left: 10.5vw;
}
</style>

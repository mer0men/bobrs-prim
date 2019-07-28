<template>
  <div id="summer-houses" ref="sh" v-scroll="handleScroll" class="summer-houses block">
    <h2 class="summer-houses__header">беседки</h2>
    <slick ref="slick" :options="slickOptions">
        <div class="item">
          <img src="https://res.cloudinary.com/meromen/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1563534399/bobrs-prim/DSC00121_uh5b9x.jpg">
        </div>
        <div class="item">
          <img src="https://res.cloudinary.com/meromen/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1563534398/bobrs-prim/%D0%A4%D0%BE%D1%82%D0%BE0188_fnafch.jpg">
        </div>
        <div class="item">
          <img src="https://res.cloudinary.com/meromen/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1563534399/bobrs-prim/21072007068_l3bmxk.jpg">
        </div>
        <div class="item">
          <img src="https://res.cloudinary.com/meromen/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1563534410/bobrs-prim/P1010023_egtmvu.jpg">
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
              arrows: false,
              swipeToSlide: true
            }
          }
        ]
      },
      scrollY: this.$parent.scrollY
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
      console.log(window.scrollY)
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
      return this.$refs.sh.getBoundingClientRect().top - screen.height / 4
    }
  }
}
</script>

<style lang="scss">
@import 'node_modules/slick-carousel/slick/slick.scss';

.summer-houses {
  position: relative;
  opacity: 0;
  transition: 0.7s;
  transform: translateY(-30%);

  .item {
    transform: scale(0.9);
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

.summer-houses__header {
  text-align: left;
  padding-left: 10.5vw;
}
</style>

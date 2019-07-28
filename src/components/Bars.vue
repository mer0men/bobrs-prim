<template>
  <div id="bars" ref="ba" v-scroll="handleScroll" class="bars block">
    <h2 class="bars__header">Бары</h2>
    <slick ref="slick" :options="slickOptions">
      <div class="item"><img src="https://res.cloudinary.com/meromen/image/upload/w_550,ar_1:1,c_fill,g_auto,e_art:hokusai/v1563534412/bobrs-prim/P1010106_nagura.jpg" alt=""></div>
      <div class="item"><img src="https://res.cloudinary.com/meromen/image/upload/w_550,ar_1:1,c_fill,g_auto,e_art:hokusai/v1563534400/bobrs-prim/5_mxkxhj.jpg" alt=""></div>
      <div class="item"><img src="https://res.cloudinary.com/meromen/image/upload/w_550,ar_1:1,c_fill,g_auto,e_art:hokusai/v1563534412/bobrs-prim/P1010102_mz3egb.jpg" alt=""></div>
      <div class="item"><img src="https://res.cloudinary.com/meromen/image/upload/w_550,ar_1:1,c_fill,g_auto,e_art:hokusai/v1563534395/bobrs-prim/BVB_5056_riqkvn.jpg" alt=""></div>
    </slick>
    <gallery-link :type="'bars'"></gallery-link>
  </div>
</template>

<script>
import Slick from 'vue-slick'
import GalleryLink from './GalleryLink'

export default {
  components: {
    Slick,
    GalleryLink
  },
  data () {
    return {
      slickOptions: {
        slidesToShow: 3,
        infinite: true,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        focusOnSelect: true,
        autoplaySpeed: 2500,
        speed: 700,
        responsive: [
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
              arrows: false,
              centerMode: false,
              swipeToSlide: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
              arrows: false,
              swipeToSlide: true
            }
          }
        ]
      }
    }
  },
  methods: {
    handleScroll: function (evt, el) {
      this.scrollY = window.scrollY
      if (window.scrollY > (this.posY)) {
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
      return this.$refs.ba.getBoundingClientRect().top - screen.height / 4
    }
  }
}
</script>

<style lang="scss">

.bars {
  transition: 1s;
  opacity: 0;
  transform: translateX(50%);

  .item {
    transform: scale(0.75);
    @media (max-width: 780px) {
      transform: none;
    }
  }
  .slick-current {
    .item {
      transform: scale(0.9);

      @media (max-width: 780px) {
        transform: none;
      }
    }
  }

}

.bars__header {
  text-align: left;
  padding-left: 10.5vw;
}

</style>

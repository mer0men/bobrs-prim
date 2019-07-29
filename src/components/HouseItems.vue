<template>
  <div id="house-items" ref="hi" v-scroll="handleScroll" class="house-items block">
    <h2 class="house-items__header">ПРЕДМЕТЫ ИНТЕРЬЕРА</h2>
    <slick ref="slick" :options="slickOptions">
      <div class="item"><img src="https://res.cloudinary.com/meromen/image/upload/w_550,ar_1:1,c_fill,g_auto,e_art:hokusai/v1563534399/bobrs-prim/%D0%A4%D0%BE%D1%82%D0%BE0188%D0%B0_ohc7q5.jpg" alt=""></div>
      <div class="item"><img src="https://res.cloudinary.com/meromen/image/upload/w_550,ar_1:1,c_fill,g_auto,e_art:hokusai/v1563534401/bobrs-prim/11_tbw2nf.jpg" alt=""></div>
      <div class="item"><img src="https://res.cloudinary.com/meromen/image/upload/w_550,ar_1:1,c_fill,g_auto,e_art:hokusai/v1563534401/bobrs-prim/8_hcjk9m.jpg" alt=""></div>
      <div class="item"><img src="https://res.cloudinary.com/meromen/image/upload/ar_1:1,c_fill,dn_74,e_art:hairspray,g_north,w_550,x_0,y_0/v1563534409/bobrs-prim/IMG-20160414-WA0044_oatvdw.jpg" alt=""></div>     
      <div class="item"><img src="https://res.cloudinary.com/meromen/image/upload/w_550,ar_1:1,c_fill,g_auto,e_art:hokusai/v1563534403/bobrs-prim/23_jj4q4t.jpg" alt=""></div>
      <div class="item"><img src="https://res.cloudinary.com/meromen/image/upload/w_550,ar_1:1,c_fill,g_auto,e_art:hokusai/v1563534412/bobrs-prim/P1010191_l7vm9c.jpg" alt=""></div>
      <div class="item"><img src="https://res.cloudinary.com/meromen/image/upload/w_550,ar_1:1,c_fill,g_auto,e_art:hokusai/v1563534404/bobrs-prim/20180215_092332_vz2tky.jpg" alt=""></div>
      <div class="item"><img src="https://res.cloudinary.com/meromen/image/upload/w_550,ar_1:1,c_fill,g_auto,e_art:hokusai/v1563534411/bobrs-prim/P1010040_pxzoqs.jpg" alt=""></div>
    </slick>
    <gallery-link :type="'house-items'"></gallery-link>
  </div>
</template>

<script>
import Slick from 'vue-slick'
import GalleryLink from '@/components/GalleryLink'

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
        draggable: false,
        centerMode: true,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 1700,
        speed: 700,
        responsive: [
          {
            breakpoint: 780,
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
              centerMode: false,
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
      return this.$refs.hi.getBoundingClientRect().top - screen.height / 4
    }
  }
}
</script>

<style lang="scss">

.house-items {
  transition: 1s;
  opacity: 0;
  transform: translateX(50%);

  min-height: 200px;
}

.house-items__header {
  text-align: left;
  padding-left: 10.5vw;
}
</style>

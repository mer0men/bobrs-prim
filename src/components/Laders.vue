<template>
  <div ref="la" v-scroll="handleScroll" class="laders block">
    <h2 class="laders__header">Лестницы</h2>
    <slick ref="slick" :options="slickOptions">
      <div class="item"><img src="https://res.cloudinary.com/meromen/image/upload/w_550,ar_1:1,c_fill,g_auto,e_art:hokusai/v1563534409/bobrs-prim/IMG-20160129-WA0016_uuzec5.jpg" alt=""></div>
      <div class="item"><img src="https://res.cloudinary.com/meromen/image/upload/w_550,ar_1:1,c_fill,g_auto,e_art:hokusai/v1563534410/bobrs-prim/IMG-20161015-WA0003_gfkbbi.jpg" alt=""></div>
      <div class="item"><img src="https://res.cloudinary.com/meromen/image/upload/w_550,ar_1:1,c_fill,g_auto,e_art:hokusai/v1563534403/bobrs-prim/DSC01848_sigscl.jpg" alt=""></div>
      <div class="item"><img src="https://res.cloudinary.com/meromen/image/upload/w_550,ar_1:1,c_fill,g_auto,e_art:hokusai/v1563534396/bobrs-prim/DSC_0018_hwyvxe.jpg" alt=""></div>
      <div class="item"><img src="https://res.cloudinary.com/meromen/image/upload/w_550,ar_1:1,c_fill,g_auto,e_art:hokusai/v1563534410/bobrs-prim/P1010029_2_ygmonu.jpg" alt=""></div>
      <div class="item"><img src="https://res.cloudinary.com/meromen/image/upload/w_550,ar_1:1,c_fill,g_auto,e_art:hokusai/v1563534403/bobrs-prim/DSC01848_sigscl.jpg" alt=""></div>
      <div class="item"><img src="https://res.cloudinary.com/meromen/image/upload/w_550,ar_1:1,c_fill,g_auto,e_art:hokusai/v1563534396/bobrs-prim/DSC_0018_hwyvxe.jpg" alt=""></div>
      <div class="item"><img src="https://res.cloudinary.com/meromen/image/upload/w_550,ar_1:1,c_fill,g_auto,e_art:hokusai/v1563534410/bobrs-prim/P1010029_2_ygmonu.jpg" alt=""></div>
      <div class="item"><img src="https://res.cloudinary.com/meromen/image/upload/w_550,ar_1:1,c_fill,g_auto,e_art:hokusai/v1563534403/bobrs-prim/DSC01848_sigscl.jpg" alt=""></div>
      <div class="item"><img src="https://res.cloudinary.com/meromen/image/upload/w_550,ar_1:1,c_fill,g_auto,e_art:hokusai/v1563534396/bobrs-prim/DSC_0018_hwyvxe.jpg" alt=""></div>
      <div class="item"><img src="https://res.cloudinary.com/meromen/image/upload/w_550,ar_1:1,c_fill,g_auto,e_art:hokusai/v1563534410/bobrs-prim/P1010029_2_ygmonu.jpg" alt=""></div>
    </slick>
  </div>
</template>

<script>
import Slick from 'vue-slick'

export default {
  components: {
    Slick
  },
  data () {
    return {
      slickOptions: {
        slidesToShow: 3,
        infinite: true,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        autoplay: true,        
        focusOnSelect: true,
        autoplaySpeed: 2500,
        speed: 700,
        responsive: [
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
              arrows: false
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
      return this.$refs.la.getBoundingClientRect().top - (screen.height / 2)
    }
  }
}
</script>

<style lang="scss">

.laders {
  transition: 1s;
  opacity: 0;
  transform: translateX(50%);
  .item {
    transition: 0.7s;
    transform: translateY(-9%) scale(0.8);
    
    @media (max-width: 480px) {
      width: 100%;
      transform: none;
    }  
  }

  .slick-current {
    .item {
      transform: translateY(9%) scale(0.8);
      @media (max-width: 480px) {
        width: 100%;
        transform: none;
      }
    }
  }
}

.laders__header {
  padding-left: 10.5vw;
  @media (max-width: 480px) {
    text-align: left;
    width: 100%;
    transform: none;
  }  
}
</style>

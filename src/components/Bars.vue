<template>
  <div v-scroll="handleScroll" class="bars">
    <h2 class="bars__header">Бары</h2>
    <slick ref="slick" :options="slickOptions">
      <div class="item"><img src="https://res.cloudinary.com/meromen/image/upload/w_550,ar_1:1,c_fill,g_auto,e_art:hokusai/v1563534395/bobrs-prim/BVB_5056_riqkvn.jpg" alt=""></div>
      <div class="item"><img src="https://res.cloudinary.com/meromen/image/upload/w_550,ar_1:1,c_fill,g_auto,e_art:hokusai/v1563534395/bobrs-prim/BVB_5056_riqkvn.jpg" alt=""></div>
      <div class="item"><img src="https://res.cloudinary.com/meromen/image/upload/w_550,ar_1:1,c_fill,g_auto,e_art:hokusai/v1563534395/bobrs-prim/BVB_5056_riqkvn.jpg" alt=""></div>
      <div class="item"><img src="https://res.cloudinary.com/meromen/image/upload/w_550,ar_1:1,c_fill,g_auto,e_art:hokusai/v1563534395/bobrs-prim/BVB_5056_riqkvn.jpg" alt=""></div>
      <div class="item"><img src="https://res.cloudinary.com/meromen/image/upload/w_550,ar_1:1,c_fill,g_auto,e_art:hokusai/v1563534395/bobrs-prim/BVB_5056_riqkvn.jpg" alt=""></div>
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
        speed: 300,
        slidesToScroll: 1,
        centerPadding: '0px',
        arrows: false
      }
    }
  },
  methods: {
    handleScroll: function (evt, el) {
      console.log(this.scrollY)
      this.scrollY = window.scrollY
      if (window.scrollY > 1800) {
        el.setAttribute(
          'style',
          'opacity: 1; transform: translate3d(0, -10px, 0)'
        )
      }
      return window.scrollY > 1850
    }
  }
}
</script>

<style lang="scss">

.bars {
  height: 1000px;
  transition: 1s;
  opacity: 0;
  transform: translateX(50%);
}

.bars__header {
  text-align: left;
  padding-left: 10.5vw;
}

.item {
  display: flex !important;
  justify-content: center;
  align-content: center;
  width: 700px;
  height: 550px;
}
</style>

<template>
  <div class="gallery">
    <h2>Галлерея: {{ name }}</h2>
    <div class="photo-viewer">
      <slick ref="slick" :options="slickOptions">
        <img v-for="(src, index) in gallery" :key="index" :src="src">        
      </slick>
    </div>
  </div>
</template>

<script>
import Slick from 'vue-slick'

export default {
  data() {
    return {
      name: '',
      gallery: [],
      slickOptions: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,        
        draggable: false,
        arrows: true,
        speed: 700,
        fade: true,
        cssEase: 'linear'
      }
    }
  },
  mounted() {
    let type = this.$route.query.type

    switch (type) {
      case 'laders':
        this.name = 'лестницы'
        break;
      case 'house-building':
        this.name = 'домостроение'
        this.gallery = [
          ''
        ]
        break;
      case 'house-items':
        this.name = 'предметы интерьера'
        break;
      case 'summer-houses':
        this.name = 'беседки'
        break;
      case 'bars':
        this.name = 'бары'
        break;    
      default:
        break;
    }
  }
}
</script>


<style lang="scss">
.gallery {
  background: url(../assets/galleryBg.png);
  background-size: 100% auto;
  background-repeat: repeat-y;
  height: 100vh;

  .photo-viewer {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
}
</style>

<template>
  <div class="gallery">
    <h2>Галлерея: {{ name }}</h2>
    <div @click="back" class="back-btn">&#8592; Назад</div>
    <div class="photo-viewer">
      <slick ref="slick" :options="slickOptions">
        <div v-for="(src, index) in gallery" :key="index"  class="block">
          <img :src="src">
        </div>
      </slick>
      <slider-btn :scrollMethod="next" style="right: 2%; top: 40%;" :direction="'right'"></slider-btn>
      <slider-btn :scrollMethod="prev" style="left: 2%; top: 40%" :direction="'left'"></slider-btn>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Slick from 'vue-slick'
import SliderBtn from '@/components/SliderButton'
import AppFooter from '@/components/Footer'

export default {
  components: {
    Slick,
    SliderBtn,
    AppFooter
  },
  data () {
    return {
      name: '',
      gallery: [],
      slickOptions: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        arrows: false,
        speed: 700,
        fade: true,
        cssEase: 'linear'
      }
    }
  },
  beforeMount () {
    let type = this.$route.query.type

    switch (type) {
      case 'laders':
        this.name = 'лестницы'
        this.gallery = [
          'https://res.cloudinary.com/meromen/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1564124275/laders/DYM-38_gz4aqj.jpg',
          'https://res.cloudinary.com/meromen/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563534396/bobrs-prim/DSC_0018_hwyvxe.jpg',
          'https://res.cloudinary.com/meromen/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563534414/bobrs-prim/P7100107_xz3gbb.jpg',
          'https://res.cloudinary.com/meromen/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563534410/bobrs-prim/P1010029_2_ygmonu.jpg',
          'https://res.cloudinary.com/meromen/image/upload/c_scale,h_734/v1563534413/bobrs-prim/P4070120_vlpk9d.jpg',
          'https://res.cloudinary.com/meromen/image/upload/c_thumb,w_550,g_face/v1564124275/laders/DYM-68_bwu9hc.jpg',
          'https://res.cloudinary.com/meromen/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563534410/bobrs-prim/IMG-20161015-WA0003_gfkbbi.jpg',
          'https://res.cloudinary.com/meromen/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563534409/bobrs-prim/IMG-20160129-WA0016_uuzec5.jpg',
          'https://res.cloudinary.com/meromen/image/upload/c_thumb,w_800,g_face/v1563534401/bobrs-prim/DSC00910_mm1u5n.jpg',
          'https://res.cloudinary.com/meromen/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563534398/bobrs-prim/%D0%A4%D0%BE%D1%82%D0%BE_101_h5gbip.jpg'
        ]
        break
      case 'house-building':
        this.name = 'домостроение'
        this.gallery = [
          'https://res.cloudinary.com/meromen/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1564113252/House-building/DYM-55_bitikd.jpg',
          'https://res.cloudinary.com/meromen/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1564113252/House-building/DYM-69_biu3rs.jpg',
          'https://res.cloudinary.com/meromen/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1564113251/House-building/DYM-46_umryac.jpg',
          'https://res.cloudinary.com/meromen/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1564113248/House-building/DYM-28_ogbkem.jpg',
          'https://res.cloudinary.com/meromen/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1564113244/House-building/DYM-78_y4gnyd.jpg',
          'https://res.cloudinary.com/meromen/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1564113247/House-building/DYM-23_c6t1yi.jpg',
          'https://res.cloudinary.com/meromen/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1564113249/House-building/DYM-40_xupchq.jpg',
          'https://res.cloudinary.com/meromen/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1564113248/House-building/DYM-25_zgamgl.jpg',
          'https://res.cloudinary.com/meromen/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1564113251/House-building/DYM-72_slictt.jpg',
          'https://res.cloudinary.com/meromen/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563534410/bobrs-prim/P1010031_nxnzjy.jpg'
        ]
        break
      case 'house-items':
        this.name = 'предметы интерьера'
        this.gallery = [
          'https://res.cloudinary.com/meromen/image/upload/c_scale,w_517/v1564124319/house-items/DYM-63_lrjzrb.jpg',
          'https://res.cloudinary.com/meromen/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1564124319/house-items/DYM-62_xmq7ht.jpg',
          'https://res.cloudinary.com/meromen/image/upload/c_thumb,w_550,g_face/v1564124319/house-items/DYM-59_oivyht.jpg',
          'https://res.cloudinary.com/meromen/image/upload/c_thumb,w_550,g_face/v1564124319/house-items/DYM-39_vji9qg.jpg',
          'https://res.cloudinary.com/meromen/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1564124319/house-items/DYM-34_nol6wj.jpg',
          'https://res.cloudinary.com/meromen/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563534409/bobrs-prim/IMG-20160414-WA0044_oatvdw.jpg',
          'https://res.cloudinary.com/meromen/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563534409/bobrs-prim/IMG-20160129-WA0005_arzpvv.jpg',
          'https://res.cloudinary.com/meromen/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563534401/bobrs-prim/11_tbw2nf.jpg',
          'https://res.cloudinary.com/meromen/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563534401/bobrs-prim/8_hcjk9m.jpg',
          'https://res.cloudinary.com/meromen/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563534399/bobrs-prim/%D0%A4%D0%BE%D1%82%D0%BE0188%D0%B0_ohc7q5.jpg',
          'https://res.cloudinary.com/meromen/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563534398/bobrs-prim/DSC00064_lkwivi.jpg',
          'https://res.cloudinary.com/meromen/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563534411/bobrs-prim/P1010040_pxzoqs.jpg',
          'https://res.cloudinary.com/meromen/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563534414/bobrs-prim/P1110058_imrx9j.jpg'
        ]
        break
      case 'summer-houses':
        this.name = 'беседки'
        this.gallery = [
          'https://res.cloudinary.com/meromen/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563534413/bobrs-prim/P1010397_g6nvrq.jpg',
          'https://res.cloudinary.com/meromen/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563534411/bobrs-prim/P1010034_tbudua.jpg',
          'https://res.cloudinary.com/meromen/image/upload/c_thumb,w_700,g_face/v1563534405/bobrs-prim/19092011041_z4k3l6.jpg',
          'https://res.cloudinary.com/meromen/image/upload/c_thumb,w_600,g_face/v1563534403/bobrs-prim/2012-09-15-091_iyz4yu.jpg',
          'https://res.cloudinary.com/meromen/image/upload/c_thumb,w_900,g_face/v1563534410/bobrs-prim/P1010023_egtmvu.jpg',
          'https://res.cloudinary.com/meromen/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563534400/bobrs-prim/DSC00122_gg5jct.jpg',
          'https://res.cloudinary.com/meromen/image/upload/c_thumb,w_900,g_face/v1563534410/bobrs-prim/P1010033_ryv5wg.jpg',
          'https://res.cloudinary.com/meromen/image/upload/c_thumb,w_900,g_face/v1563534398/bobrs-prim/%D0%A4%D0%BE%D1%82%D0%BE0188_fnafch.jpg',
          'https://res.cloudinary.com/meromen/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563534399/bobrs-prim/21072007068_l3bmxk.jpg',
          'https://res.cloudinary.com/meromen/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563534400/bobrs-prim/DSC00123_xitsdj.jpg'
        ]
        break
      case 'bars':
        this.name = 'бары'
        this.gallery = [
          'https://res.cloudinary.com/meromen/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563534395/bobrs-prim/BVB_5056_riqkvn.jpg',
          'https://res.cloudinary.com/meromen/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563534400/bobrs-prim/5_mxkxhj.jpg',
          'https://res.cloudinary.com/meromen/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563534412/bobrs-prim/P1010102_mz3egb.jpg',
          'https://res.cloudinary.com/meromen/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563534412/bobrs-prim/P1010106_nagura.jpg'
        ]
        break
      default:
        this.$router.push('/')
        break
    }
  },
  methods: {
    next () {
      this.$refs.slick.next()
    },
    prev () {
      this.$refs.slick.prev()
    },
    back () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
.gallery {
  background: url(../assets/galleryBg.png);
  background-size: 100% auto;
  background-repeat: repeat-y;
  transition: 0.7s;
  padding: 3rem;
  padding-top: 0.3rem;
  position: relative;

  svg {
    height: 100px;
  }

  .photo-viewer {
    position: relative;
    padding: 3rem;
    transition: 0.7s;

    .block {
      max-height: 600px;
      display: flex !important;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
  }

  .back-btn {
    position: absolute;
    left: 5%;
    top: 5%;
    font-size: 20px;
    transition: 0.4s;
    cursor: pointer;

    &:hover {
      color: #F1A635;
    }
  }
}
</style>

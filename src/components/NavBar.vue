<template>
  <div v-scroll="handleScroll" class="nav-bar">
    <div class="mobile-menu">
      <div class="menu">
        <svg viewBox="0 0 64 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.94 11.9V13.314H10.328C10.8507 13.314 11.3453 13.4166 11.812 13.622C12.2787 13.8273 12.6847 14.1073 13.03 14.462C13.3847 14.8073 13.6647 15.2133 13.87 15.68C14.0753 16.1373 14.178 16.6273 14.178 17.15C14.178 17.6726 14.0753 18.1673 13.87 18.634C13.6647 19.1006 13.3847 19.5113 13.03 19.866C12.6847 20.2113 12.2787 20.4866 11.812 20.692C11.3453 20.8973 10.8507 21 10.328 21H4.49V20.608H5.022V10.36H4.476V9.96797H11.924L12.68 12.362H12.288L12.134 11.9H6.954H6.94ZM6.94 19.068H10.328C10.5893 19.068 10.8367 19.0166 11.07 18.914C11.3033 18.8113 11.5087 18.676 11.686 18.508C11.8633 18.3306 12.0033 18.1253 12.106 17.892C12.2087 17.6586 12.26 17.4113 12.26 17.15C12.26 16.8886 12.2087 16.6413 12.106 16.408C12.0033 16.1746 11.8633 15.974 11.686 15.806C11.5087 15.6286 11.3033 15.4886 11.07 15.386C10.8367 15.2833 10.5893 15.232 10.328 15.232H6.94V19.068ZM26.0041 15.498C26.0041 17.0286 25.4721 18.3493 24.4081 19.46C23.3534 20.5706 22.0654 21.126 20.5441 21.126C19.0227 21.126 17.7301 20.5706 16.6661 19.46C15.6021 18.3493 15.0701 17.0286 15.0701 15.498C15.0701 13.9673 15.5974 12.6466 16.6521 11.536C17.7161 10.416 19.0087 9.85597 20.5301 9.85597C22.0514 9.85597 23.3441 10.416 24.4081 11.536C25.4721 12.6466 26.0041 13.9673 26.0041 15.498ZM24.0861 15.498H24.1001C24.1001 14.5086 23.7501 13.65 23.0501 12.922C22.3594 12.194 21.5241 11.83 20.5441 11.83C19.5454 11.83 18.7007 12.194 18.0101 12.922C17.3287 13.6406 16.9881 14.4993 16.9881 15.498C16.9881 16.4873 17.3334 17.346 18.0241 18.074C18.7147 18.7926 19.5501 19.152 20.5301 19.152C21.5194 19.152 22.3594 18.7926 23.0501 18.074C23.7407 17.346 24.0861 16.4873 24.0861 15.498ZM29.3482 11.9V13.314H32.7362C33.2589 13.314 33.7535 13.4166 34.2202 13.622C34.6869 13.8273 35.0929 14.1073 35.4382 14.462C35.7929 14.8073 36.0729 15.2133 36.2782 15.68C36.4835 16.1373 36.5862 16.6273 36.5862 17.15C36.5862 17.6726 36.4835 18.1673 36.2782 18.634C36.0729 19.1006 35.7929 19.5113 35.4382 19.866C35.0929 20.2113 34.6869 20.4866 34.2202 20.692C33.7535 20.8973 33.2589 21 32.7362 21H26.8982V20.608H27.4302V10.36H26.8842V9.96797H34.3322L35.0882 12.362H34.6962L34.5422 11.9H29.3622H29.3482ZM29.3482 19.068H32.7362C32.9975 19.068 33.2449 19.0166 33.4782 18.914C33.7115 18.8113 33.9169 18.676 34.0942 18.508C34.2715 18.3306 34.4115 18.1253 34.5142 17.892C34.6169 17.6586 34.6682 17.4113 34.6682 17.15C34.6682 16.8886 34.6169 16.6413 34.5142 16.408C34.4115 16.1746 34.2715 15.974 34.0942 15.806C33.9169 15.6286 33.7115 15.4886 33.4782 15.386C33.2449 15.2833 32.9975 15.232 32.7362 15.232H29.3482V19.068ZM45.8923 10.948C45.8923 12.4506 45.3509 13.7433 44.2683 14.826C43.1856 15.8993 41.9023 16.436 40.4183 16.436C40.2596 16.436 40.1009 16.4313 39.9423 16.422V20.608H40.4603V21H37.4923V20.608H38.0243V10.36H37.4923V9.96797H45.8923V10.948ZM43.8343 11.9H39.9423V14.504C40.0449 14.5226 40.1943 14.532 40.3903 14.532C41.1929 14.532 41.9116 14.2893 42.5463 13.804C43.1903 13.3093 43.6196 12.6746 43.8343 11.9ZM49.3385 19.068H51.8725C52.1338 19.068 52.3811 19.0166 52.6145 18.914C52.8478 18.8113 53.0531 18.676 53.2305 18.508C53.4078 18.3306 53.5478 18.1253 53.6505 17.892C53.7531 17.6586 53.8045 17.4113 53.8045 17.15C53.8045 16.8886 53.7531 16.6413 53.6505 16.408C53.5478 16.1746 53.4078 15.974 53.2305 15.806C53.0531 15.6286 52.8478 15.4933 52.6145 15.4C52.3811 15.2973 52.1338 15.246 51.8725 15.246H49.3385V19.068ZM47.4205 10.374H46.8745V9.98197L49.8985 9.96797V10.36H49.3525L49.3385 13.314H51.8725C52.3951 13.314 52.8898 13.4166 53.3565 13.622C53.8231 13.8273 54.2291 14.1073 54.5745 14.462C54.9291 14.8073 55.2091 15.2133 55.4145 15.68C55.6198 16.1373 55.7225 16.6273 55.7225 17.15C55.7225 17.6726 55.6198 18.1673 55.4145 18.634C55.2091 19.1006 54.9291 19.5113 54.5745 19.866C54.2291 20.2113 53.8231 20.4866 53.3565 20.692C52.8898 20.8973 52.3951 21 51.8725 21H46.8885V20.608H47.4205V10.374ZM59.5025 21H56.5345V20.608H57.0525V10.346H56.5345V9.95397H58.9565H59.5025V10.346H58.9705V20.608H59.5025V21Z" fill="white"/>
          <path d="M1.02637 27.77L32.1157 31.7459L62.9962 28.2406" stroke="white"/>
          <path d="M1.02979 24.3914L32.0095 28.0021L62.9996 25.1095" stroke="white" stroke-width="2"/>
          <path d="M1.24268 6.78583L32.0095 3.52784L62.9994 6.30316" stroke="white"/>
          <path d="M1.2417 4.16583L31.9031 1.26984L62.9981 3.62954" stroke="white" stroke-width="2"/>
        </svg>
        <span class="block-name">{{ blockName }}</span>
        <div class="right-menu">
          <div class="togle-btn">
            X
          </div>
        </div>
      </div>
    </div>
    <div class="title">
      КОМПАНИЯ ПРОЕКТИРОВАНИЯ И СТРОИТЕЛЬСТВА ЗДАНИЙ ИЗ ПРОФИЛЬНОГО БРУСА
    </div>
    <div class="nav-items">
      <a class="nav-item" href="#" v-scroll-to="{
        el: '.about',
        offset: -100,
        duration: 1100
      }">о нас</a>
      <a class="nav-item" href="#" v-scroll-to="{
        el: '.house-building',
        offset: -100,
        duration: 1100
      }">домостроение</a>
      <a class="nav-item" href="#" v-scroll-to="{
        el: '.house-items',
        offset: -100,
        duration: 1100
      }">предметы интерьера</a>
      <a class="nav-item" href="#" v-scroll-to="{
        el: '.laders',
        offset: -100,
        duration: 1100
      }">лестницы</a>
      <a class="nav-item" href="#" v-scroll-to="{
        el: '.summer-houses',
        offset: -100,
        duration: 1100
      }">беседки</a>
      <a class="nav-item" href="#" v-scroll-to="{
        el: '.partners',
        offset: -100,
        duration: 1100
      }">наши партнеры</a>
      <a class="nav-item" href="#" v-scroll-to="{
        el: '.bars',
        offset: -100,
        duration: 1100
      }">бары</a>
      <a class="nav-item" href="#" v-scroll-to="{
        el: '.partners',
        offset: -100,
        duration: 1100
      }">партнеры</a>
      <a class="nav-item" href="#" v-scroll-to="{
        el: '.footer',
        duration: 1100
      }">контакты</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      blockName: 'О нас'
    }
  },
  methods: {
    handleScroll: function (evt, el) {
      let Y = window.scrollY
      if (Y > this.aboutPos && Y < this.houseBuildingPos) { this.blockName = 'О нас' }

      if (Y > this.houseBuildingPos && Y < this.houseItemsPos) { this.blockName = 'Домостроение' }

      if (Y > this.houseItemsPos && Y < this.ladersPos) { this.blockName = 'Предметы интерьера' }

      if (Y > this.ladersPos && Y < this.summerHousesPos) { this.blockName = 'Лестницы' }

      if (Y > this.summerHousesPos && Y < this.barsPos) { this.blockName = 'Беседки' }

      if (Y > this.barsPos && Y < this.contactsPos) { this.blockName = 'Бары' }

      if (Y > this.contactsPos) { this.blockName = 'Контакты' }
    }
  },
  computed: {
    aboutPos () {
      return document.getElementById('about').getBoundingClientRect().top - 100
    },
    barsPos () {
      return document.getElementById('bars').getBoundingClientRect().top - 100
    },
    houseItemsPos () {
      return document.getElementById('house-items').getBoundingClientRect().top - 100
    },
    houseBuildingPos () {
      return document.getElementById('house-building').getBoundingClientRect().top - 100
    },
    ladersPos () {
      return document.getElementById('laders').getBoundingClientRect().top - 100
    },
    summerHousesPos () {
      return document.getElementById('summer-houses').getBoundingClientRect().top - 100
    },
    contactsPos () {
      return document.getElementById('contacts').getBoundingClientRect().top - 100
    }
  }
}
</script>

<style lang="scss">
@import '../assets/variables.scss';

.nav-bar {
  background: url(../assets/headerBg.png);
  background-repeat: no-repeat;
  background-size: 100% auto;
  position: relative;

  .mobile-menu {
    display: none;
    position: fixed;
    top: 0;
    height: 80px;
    width: 100%;
    z-index: 1000;
    background: 0,0,rgba(0, 0, 0, 0.6);
    @media (max-width: 780px) {
      display: flex;
      align-items: center
    }

    .menu {
      position: relative;
      width: 100%;

      .block-name {
        color: $j-white;
        font-size: 20px;

        @media (max-width: 600px) {
          font-size: 16px;
        }

        @media (max-width: 480px) {
          font-size: 14px;
        }

        @media (max-width: 320px) {
          font-size: 12px;
        }
      }

      svg {
        position: absolute;

        @media (max-width: 780px) {
          width: 12%;
          bottom: -10px;
        }

        @media (max-width: 600px) {
          width: 15%;
          bottom: -10px;
        }

        @media (max-width: 480px) {
          width: 20%;
          bottom: -12px;
        }

        @media (max-width: 320px) {
          width: 20%;
          bottom: -8px;
        }

        left: 10px;
      }

      .right-menu {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 1001;
        height: 100vh;
        overflow-y: scroll;
        overflow-x: hidden;
        width: 70%;
        background: url(../assets/rightMenuBg.png);
        background-repeat: no-repeat;
        background-size: cover;
        transition: 0.7s;
        transform: translateX(100%);

        .togle-btn {
          position: absolute;
          left: -20px;
          z-index: 10002;
          color: red;
        }
      }
    }

  }
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  color: $j-white;
  font-size: 24px;
  padding-top: 20px;
  margin-bottom: 25%;

  @media (max-width: 780px) {
    display: none;
  }
}

.nav-items {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  // padding-bottom: 81px;
  background: rgba(0, 0, 0, 0.3);

  @media (max-width: 780px) {
    display: none !important;
  }

  .nav-item {
    color: $j-white;
    text-decoration: none;
    position: relative;
    transition: 0.4s;
    font-size: 22px;
    padding: 0.3rem;

    &::after {
      content:  '';
      position: absolute;
      bottom: -5px;
      left: -10%;
      width: 0;
      background: $j-white;
      height: 2px;
      transition: 0.4s;
    }

    &:hover::after {
      width: 120%;
    }

    @media (max-width: 780px) {
      display: none;
    }
  }
}
</style>

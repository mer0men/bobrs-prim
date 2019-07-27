<template>
  <div class="nav-bar">
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

<style lang="scss">
@import '../assets/variables.scss';

.nav-bar {
  background: url(../assets/headerBg.png);
  background-repeat: repeat-y;
  background-size: 100% auto;
  position: relative;
  @media (max-width: 480px) {
    display: none;
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
}

.nav-items {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 81px;

  .nav-item {
    color: $j-white;
    text-decoration: none;
    position: relative;
    transition: 0.4s;
    font-size: 22px;

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
  }
}
</style>

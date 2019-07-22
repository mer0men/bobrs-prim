<template>
  <div class="nav-bar">
    <div class="title">
      КОМПАНИЯ ПРОЕКТИРОВАНИЯ И СТРОИТЕЛЬСТВА ЗДАНИЙ ИЗ ПРОФИЛЬНОГО БРУСА
    </div>
    <div class="nav-items">
      <a class="nav-item" href="#">о нас</a>
      <a class="nav-item" href="#">домостроение</a>
      <a class="nav-item" href="#">бары</a>
      <a class="nav-item" href="#">предметы интерьера</a>
      <a class="nav-item" href="#">лестницы</a>
      <a class="nav-item" href="#">беседки</a>
      <a class="nav-item" href="#">наши партнеры</a>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/variables.scss';

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

  .nav-item {
    color: $j-white;
    text-decoration: none;
    position: relative;
    transition: 0.4s;
    font-size: 27px;

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

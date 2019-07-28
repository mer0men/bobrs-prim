<template>
  <div class="home">
    <nav-bar></nav-bar>
    <div class="main-blocks">
      <about></about>
      <house-building></house-building>
      <house-items></house-items>
      <laders></laders>
      <summer-houses></summer-houses>
      <bars></bars>
    </div>
    <partners></partners>
    <contacts></contacts>
    <app-footer></app-footer>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import About from '@/components/About'
import HouseBuilding from '@/components/HouseBuilding'
import Bars from '@/components/Bars'
import HouseItems from '@/components/HouseItems'
import Laders from '@/components/Laders'
import SummerHouses from '@/components/SummerHouses'
import Partners from '@/components/Partners'
import Contacts from '@/components/Contacts'
import AppFooter from '@/components/Footer'

export default {
  name: 'home',
  components: {
    NavBar,
    About,
    HouseBuilding,
    Bars,
    HouseItems,
    Laders,
    SummerHouses,
    Partners,
    Contacts,
    AppFooter
  },
  data () {
    return {
      scrollY: 0
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
.home {
  width: 100%;
  overflow-x: hidden;

  @media (max-width: 480px) {
    overflow-y: hidden;
    background: rgba(0, 0, 0, 0);
    background-repeat: no-repeat;
    background-size: 100% auto;

    &:before {
      content: '';
      display: block;
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      background: url(../assets/mobBg.png) no-repeat center center;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
    }
  }

  .block {
    padding: 70px;
    @media (max-width: 480px) {
      padding:  30px 10px;
      background: rgba(0, 0, 0, 0);
    }
  }
}

.main-blocks {
  background: url(../assets/mainBg.png);
  background-repeat: no-repeat;
  background-size: 100% auto;
  margin-top: -115px;
  padding-top: 150px;
  overflow-x: hidden;

  @media (max-width: 480px) {
    overflow-y: scroll;
    background: rgba(0, 0, 0, 0);
    background-repeat: no-repeat;
    background-size: 100% auto;
  }

  img {
    border: 3px solid rgba(64, 64, 64, 0.5);
    box-sizing: border-box;
    box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.4);
  }
}

.item {
  position: relative;
  display: flex !important;
  justify-content: center;
  align-content: center;
  height: auto;
  transition: 0.7s;

  img {
    width: 95%;
    height: 95%;
  }
}
</style>

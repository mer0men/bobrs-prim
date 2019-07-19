<template>
  <div class="home">
    <nav-bar></nav-bar>
    <about></about>
    <house-building></house-building>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import About from '@/components/About'
import HouseBuilding from '@/components/HouseBuilding'

export default {
  name: 'home',
  components: {
    NavBar,
    About,
    HouseBuilding
  }
}
</script>

<style lang="scss">
.home {
  height: 9250px;
  width: 100%;
  background: url(../assets/homeBg.png);
  background-repeat: no-repeat;
  background-size: 100% auto;
}
</style>

<template>
  <div class="partners block">
    <h2 style="padding-top: 5%; padding-left: 10.5vw; text-align: left;">Партнеры</h2>
    <div class="list">
      <div v-for="(partner, index) in partners" :key="index" class="part">
        <span>{{ partner.name }}</span>
        <span>{{ partner.phone }}</span>
        <a :href="partners.site" target="_blank">{{ partner.site }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      partners: [
        {
          name: 'Жанна Гордейчук',
          phone: '+7-902-483-30-92',
          site: 'jonna_85@mail.ru'
        },
        {
          name: 'АСК "Нео-Комфорт"',
          phone: '+7 (423) 202-53-45',
          site: 'www.neocomfort.ru'
        }
      ]
    }
  }
}
</script>

<style lang="scss">

  @import '../assets/variables.scss';

  .partners {
    font-size: 24px;
    line-height: 31px;
    background: url(../assets/partnersBg.png);
    background-repeat: no-repeat;
    background-size: 100% auto;
    margin-top: -1%;
    position:relative;
    z-index: 11;

    @media (max-width: 780px) {
      display: none;
    }
  }

  .list {
    min-height: 825px;
    padding: 10% 20%;
    color: $j-white;

    @media (max-width: 1500px) {
      padding: 10% 10%;
      min-height: 600px;
    }

    @media (max-width: 1200px) {
      padding: 10% 5%;
      min-height: 500px;
    }

    @media (max-width: 1000px) {
      padding: 10% 1%;
      min-width: 400px;
    }

    @media (max-width: 900px) {
      padding: 10% 1%;
      min-width: 300px;
    }
  }

  .part {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 80px;
    justify-items: center;
    align-content: center;
  }
</style>

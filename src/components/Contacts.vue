<template>
  <div class="contacts">
    <h2>КАК НАС НАЙТИ</h2>
    <div class="my-map">
      <GmapMap
        :center="{lat:43.180104, lng:131.909140}"
        :zoom="18"
        style="width: 100%; height: 100%; border-radius: 20px;"
        :options="{
          zoomControl: true,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: false,
          disableDefaultUi: false
        }"
      >
        <GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          @click="center=m.position"
        />
      </GmapMap>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      markers: [
        {
          position: { lat: 43.180104, lng: 131.909140 }
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.contacts {
  height: 825px;
  background: url(../assets/mapBg.png);
  background-repeat: repeat-y;
  background-size: 100% auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -1%;
  flex-direction: column;
  position:relative;
  z-index: 10;

  @media (max-width: 1200px) {
    height: auto;
    padding: 20px;
  }

  .vue-map {
    box-shadow: 7px 7px 10px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
  }

  .my-map {
    width: 70%;
    height: 600px;
    position: relative;
    border-radius: 20px;

    @media (max-width: 720px) {
      height: 400px;
      width: 90%;
    }
  }
}
</style>

<template>
  <div class="slider-btn">
    <div class="f-border">
      <div class="s-border">
        <div class="btn">
          <span class="arrow" v-if="direction == 'right'">&#8594;</span>
          <span class="arrow" v-else>&#8592;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    direction: {
      required: true
    }
  }
}
</script>

<style lang="scss">
@import '../assets/variables.scss';

.slider-btn {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
}

.f-border {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14.5vw;
  height: 14.5vw;
  border: 2px solid rgba(241, 166, 53, 0.7);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: rgba(0,0,0,0);
}

.s-border {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 13vw;
  height: 13vw;
  border: 3px solid rgba(241, 166, 53, 0.7);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: rgba(0,0,0,0);
}

.btn {
  width: 11.5vw;
  height: 11.5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(241, 166, 53, 0.7);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 90px;
  color: $j-white;

  .arrow {
    padding-bottom: 2.3vw;
  }
}
</style>

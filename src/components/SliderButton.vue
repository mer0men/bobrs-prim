<template>
  <div @click="scrollMethod" class="slider-btn">
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
    },
    scrollMethod: {
      required: false,
      default: function () { return true }
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
  z-index: 1001;
  @media (max-width: 780px) {
    display: none;
  }
}

.f-border {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14.5vh;
  height: 14.5vh;
  border: 2px solid rgba(241, 166, 53, 0.7);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: rgba(0,0,0,0);
}

.s-border {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 13vh;
  height: 13vh;
  border: 3px solid rgba(241, 166, 53, 0.7);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: rgba(0,0,0,0);
}

.btn {
  width: 11.5vh;
  height: 11.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(241, 166, 53, 0.7);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 90px;
  color: $j-white;
  transition: 0.3s;

  .arrow {
    // padding-bottom: 1.3vw;
    height: 40px;
    line-height: 0px;

    &::selection {
      background: transparent;
    }
  }

  &:hover {
    background:  rgba(241, 166, 53, 0.8);
    box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
}
</style>

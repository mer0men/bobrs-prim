<template>
  <div class="about block">
    <div class="content">
      <p>Более 20 лет назад начинала свою деятельность, опираясь на изготовление и монтаж деревянных лестниц. Со временем пришло понимание возможности избавить заказчика от необходимости искать многочисленных подрядчиков на остальные работы по строительству и обустройству своей усадьбы.</p>
      <p>Сегодня мы можем предложить Вам широкий спектр работ по проектированию и строительству собственного дома из профилированного бруса и его отдельных элементов, то есть фундамента, электрооборудования и сантехники, деревянной мебели и деталей интерьера, обустройства ландшафта территории усадьбы.</p>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/variables.scss';

.about {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
}

.content {
  text-transform: uppercase;
  color: $j-black;
  text-align: center;
  font-size: 24px;
  line-height: 31px;
  width: 45vw;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: inset 7px 7px 15px rgba(255, 255, 255, 0.5);
  padding: 4.6vh 6.9vw;

  @media (max-width: 1366px) {
    width: 65vw;
  }

  @media (max-width: 480px) {
    width: 90vw;
    padding: 20px 10px;
    font-size: 12px;
  }

}
</style>

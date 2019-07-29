<template>
  <div id="about" class="about block">
    <div class="content">
      <p>Более 20 лет назад наша компания начала свою деятельность по изготовлению и монтажу деревянных лестниц. В процессе работы пришло понимание, что заказчика можно избавить от необходимости искать множество подрядчиков на остальные работы по строительству и обустройству своей усадьбы.</p>
      <p>Сегодня мы можем предложить вам широкий спектр работ по проектированию и строительству собственного дома из профилированного бруса и его отдельных элементов, включая построение фундамента, подключение электрооборудования и сантехники, изготовление деталей мебели и деталей интерьера, а также обустройства ландшафта на территории усадьбы.</p>
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

  @media (max-width: 800px) {
    width: 70vw;
    padding: 20px 10px;
    font-size: 18px;
  }

  @media (max-width: 480px) {
    width: 90vw;
    padding: 20px 10px;
    font-size: 12px;
  }

}
</style>

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
body, html {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  background: url(./assets/mapBg.png);
  background-repeat: repeat-y;
  background-size: 100% auto;
  div:focus {
    outline: none !important;
  }
}

@font-face {
    font-family: 'VarSacrumTitle';
    src: url('./assets/VerSacrumTitle.ttf');
}

@font-face {
    font-family: 'Worksans';
    src: url('./assets/Worksans.ttf');
}

#app {
  font-family: 'VarSacrumTitle', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

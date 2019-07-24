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
}

@font-face {
    font-family: 'VarSacrumTitle';
    src: url('./assets/VerSacrumTitle.ttf');
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

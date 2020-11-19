<template>
  <div id="app">
  <header>
    <div id="nav">
      <router-link  to="/">Home</router-link> |
      <router-link  to="/Library">Library</router-link>
    </div>
  </header>
    <router-view/>
  </div>
</template>

<style>
@import "~bulma/css/bulma.css";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(0, 0, 0);
}
#nav {
  padding: 25px;
}

#nav a {
  color: rgb(255, 255, 255);
  text-decoration: none;
}
#nav a:hover {
  font-weight: bold;
  color: rgb(255, 0, 0);
  text-decoration: none;
  cursor: pointer;
}

header {
  background-image: -webkit-linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(assets/img/pokedex.png);
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(assets/img/pokedex.png);
  background-size: cover;
  background-position: center;
  height: 25vh;
  background-attachment: fixed;
}
</style>
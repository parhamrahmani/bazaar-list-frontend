<template>
<nav-bar></nav-bar>
  <router-view />
</template>
<script>
import NavBar from '@/components/NavBar'
export default {
  name: 'App',
  components: { NavBar }
}</script>
<style>
#app {
  font-family: "Ubuntu",Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
@font-face {
  font-family: "Ubuntu";
  src: local("Ubuntu"),
  url(./fonts/Ubuntu-Medium.ttf) format("truetype");
}
</style>

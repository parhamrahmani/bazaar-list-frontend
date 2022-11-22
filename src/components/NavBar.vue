<template>
  <nav class="navbar navbar-expand-lg" style="background-color: white; ">
    <div class="container-fluid">

      <router-link class="navbar-brand" href="#" style="color: darkgreen" to="/">
        <img src="/src/assets/logotrans-small.png" alt="?" class="d-inline-block align-text-top">
        Bazzar List</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
       <!--   <a class="nav-link active" aria-current="page" href="#" style="color: olivedrab" >Home</a> -->
          <router-link class= "nav-link" to="/home">Home</router-link>
          <!--   <a class="nav-link active" aria-current="page" href="#" style="color: olivedrab" >About</a> -->
          <router-link class= "nav-link" to="/about">About</router-link>
          <!--   <a class="nav-link active" aria-current="page" href="#" style="color: olivedrab" >My Lists</a> -->
          <router-link class= "nav-link" to="/lists">Lists</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  components: {}

}
</script>

<style scoped>

</style>

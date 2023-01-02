<template>
  <nav class="navbar navbar-expand-lg" style="background-color: ghostwhite; ">
    <div class="container-fluid">

      <router-link class="navbar-brand" style="color: green" to="/">
        Bazzar List</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
       <!--   <a class="nav-link active" aria-current="page" href="#" style="color: olivedrab" >Home</a> -->
          <!--   <a class="nav-link active" aria-current="page" href="#" style="color: olivedrab" >My Lists</a> -->
          <router-link class= "nav-link" to="/lists" style="color: black">Load A List</router-link>
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

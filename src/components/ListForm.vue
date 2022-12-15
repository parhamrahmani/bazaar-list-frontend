<template>
 <section>
  <head>
    <meta charset="UTF-8">
    <title>Bootstrap 5 generator example page</title>

    <meta charset="utf-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="favicon.ico">
    <link rel="stylesheet"
          href=" https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css ">
    <link rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">
    <!-- Plugins -->
  </head>
  <body>
  <section class="pt-5 pb-5">
    <div class="container">
      <div class="row">
        <div class="col-md-4 ">
          <img src="https://www.eatwell101.com/wp-content/uploads/2012/02/A-Beginner%E2%80%99s-Shopping-List.jpg" alt=" https://dummyimage.com/660x450/ccc/ffffff"
               class="img-fluid m-shadow-16 rounded shadow">
        </div>
        <div class="col-md-6">
          <h3 class="display-5 mt-2 fw-bold">Make A Shopping List</h3>
          <p>Make a grocery list before shopping</p>
          <form class="form">
            <div class="form-group mb-4">
              <input type="text" class="form-control" id="listname"
                     placeholder="Enter a name for your list"
                     v-model="listName" required>
            </div>
            <div class="form-group mb-4">
                <textarea class="form-control" id="message" name="message"
                          rows="3" placeholder="Type a description"
                v-model="description"></textarea>
            </div>
          </form>
          <div>
            <router-link class="btn btn-primary"  type="button"  to="/addProduct" @click="addList(); getTheLatestList()">
              Create A Shopping List
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
  </body>
 </section>
</template>

<script>

export default {
  /* eslint-disable*/
  name: 'ListForm',
  data(){
    return{
      listName : '',
      description : '',
      lists : [],
      products: [],
      latestList : Object
    }
  },
methods:     {
  addList(){
    const endpoint = 'http://localhost:8080/api/v1/shoppingLists'
    const data = {
      listName: this.listName,
      description: this.description
    }
    const requestOptions = {
      method: 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(data)
    }
    fetch(endpoint,requestOptions).then(response => response.json())
      .then(data =>
      {console.log(data)})
      .catch(error => console.log('error', error) )
this.getTheLatestList()
  },
  getTheLatestList(){
    const request = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch('http://localhost:8080/api/v1/shoppingLists/getTheLatestList',request)
      .then(response => response.json())
      .then(result => this.latestList = result)
      .catch(error => console.log('error', error))
    },
  getListById(){
    const request = {
      method: 'GET',
      redirect: 'follow'
    }
    const id = this.lists.length-1
    fetch('http://localhost:8080/api/v1/shoppingLists/'+id,request)
      .then(response => response.json())
      .then(result => this.latestList = result)
      .catch(error => console.log('error', error))
  }
  }
  }
</script>

<style scoped>

</style>

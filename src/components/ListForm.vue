<template>
 <section>
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
          <form class="form needs-validation" novalidate>
            <div class="form-group mb-4">
              <input type="text" class="form-control" id="listname"
                     placeholder="Enter a name for your list"
                     v-model="listName" required>
            </div>
            <div id="validationListName" class="invalid-feedback">
              Please enter a list name
            </div>
            <div class="form-group mb-4">
                <textarea class="form-control" id="message" name="message"
                          rows="3" placeholder="Type a description"
                v-model="description" required></textarea>

            </div>
            <div>
              <button id = "button" class="btn btn-primary"  v-if="this.listName === ''" @click="addList(); getTheLatestList()">
                Create A Shopping List
              </button>
              <!-- Button trigger modal -->
              <router-link type="button" class="btn btn-primary" to="/addProduct" v-if="this.listName !== ''"   @click="addList(); getTheLatestList()">
                Create A Shopping List
              </router-link>
            </div>
          </form>
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

  /**
   *
   */

  addList(){
    const valid = this.validate();
    if(valid){
    const endpoint = 'http://localhost:8080/api/v1/shoppingLists'
      if(this.listName !== ""){
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
  }}},

  /**
   *
   */

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

  /**
   *
   */

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
  },

  /**
   *
   */

  /**
   * @description validates the input values
   */

  validate(){
    let valid = true
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          valid = false
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
    return valid
  },
}

  }
</script>

<style scoped>

</style>

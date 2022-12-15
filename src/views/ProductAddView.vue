<template>
  <html>
  <div>&nbsp;</div>
  <div>&nbsp;</div>
  <head>
    <meta charset="UTF-8">
    <title>Adding Products to List </title>

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
      <div class="row d-flex  justify-content-between align-items-center">
        <div class="col-md-3 d-md-flex flex-column align-content-center">
          <label for="shoppingList"> <strong>Name: </strong>{{ latestList.listName}} <strong>Id: </strong>{{latestList.listId}}   </label>
          <table class="table table-borderless" id="shoppingList">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-5">
          <img src="https://images.unsplash.com/photo-1612776561584-394d456a751d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80" alt=""
               class="img-fluid mx-auto d-block">
        </div>
        <div class="col-md-4">
          <div class="card shadow-lg text-start h-100">
            <div class="card-body">
              <form>
                <div class="form-group">
                  <label for="productName">Product Name</label>
                  <input type="text" class="form-control mt-2"
                         id="productName" placeholder="Name"
                  v-model="productName">
                </div>
                <div>&nbsp;</div>
                <div class="form-group">
                  <label for="productBrand">Brand Name</label>
                  <input type="text" class="form-control mt-2"
                         id="productBrand" placeholder="Name"
                  v-model="productBrand">
                </div>
                <div>&nbsp;</div>
                <div>
                  <label for="inputCategory" class="form-label">Category</label>
                  <select class="form-select" aria-label="Default select example" id="inputCategory" v-model="productCategory">
                    <option>Vegetables</option>
                    <option>Baking</option>
                    <option>Fruit</option>
                    <option>Beverage</option>
                    <option>Bread</option>
                    <option>Breakfast</option>
                    <option>Dry</option>
                    <option>Sweets</option>
                    <option>Snack</option>
                    <option>Canned</option>
                    <option>Foodstuff</option>
                    <option>Condiment</option>
                    <option>Dairy</option>
                    <option>Health</option>
                    <option>Coffee</option>
                    <option>Tea</option>
                    <option>Frozen</option>
                    <option>Home</option>
                    <option>Pet</option>
                    <option>Baby</option>
                    <option>Other</option>
                  </select>
                  <div>&nbsp;</div>
                </div>
                <div>
                  <label for="inputMenge" class="form-label">Amount</label>
                  <input type="number" class="form-control" id="inputMenge" size="2" min="0" max="1000" value="0">
                  <div>&nbsp;</div>
                  <label for="inputUnit" class="form-label">Unit</label>
                  <select class="form-select" aria-label="Default select example" id="inputUnit">
                    <option selected>Select Unit </option>
                    <option>x</option>
                    <option>Kg</option>
                    <option>Liter</option>
                  </select>
                </div>
                <div>&nbsp;</div>
                <button type="submit"
                        class="btn w-100 btn-lg mt-3 btn-primary" @click="addProduct()">Add Product</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </body>
  </html>
</template>

<script>
// import ResponsiveTable from '@/components/ResponsiveTable'

export default {
  /* eslint-disable */
  name: 'ProductAddView',
  components: { },
  data (){
    return{
      products: [],
      productName: '',
      productBrand: '',
      productCategory: '',
    latestList: this.getTheLatestList() } },
      methods:{
       async addProduct() {
         const myHeaders = new Headers();
         myHeaders.append("Content-Type", "application/json");

         const raw = JSON.stringify({
           "productName": this.productName,
           "brand": this.productBrand,
           "category": this.productBrand,
           "shoppingList": this.latestList
         });

         const requestOptions = {
           method: 'POST',
           headers: myHeaders,
           body: raw,
           redirect: 'follow'
         };

         fetch("http://localhost:8080/api/v1/products", requestOptions)
           .then(response => response.json())
           .then(result => console.log(result))
           .catch(error => console.log('error', error));

        },
        getProducts(){
          const request = {
            method: 'GET',
            redirect: 'follow'
          }
          fetch('http://localhost:8080/api/v1/products', request)
            .then(response => response.json())
            .then(result => result.forEach(product => { this.products.push(product) }))
            .catch(error => console.log('error', error))
          return this.products
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
          return this.latestList
        },
      }
}

</script>
<style scoped>
</style>

<template>
  <div class="table-responsive" >
    <div class="col-md-12 column" >
      <h2 id="testListId"></h2>

      <!--Table-->
    <table class="table table-striped w-auto" style="border:1px solid black;margin-left:auto;margin-right:auto;">
      <!--Table head-->
      <thead>
      <tr>
        <th>Product Id</th>
        <th>Product Name</th>
        <th>Category</th>
        <th>Amount</th>
        <th>Unit</th>
        <th>Shopping List Id</th>
      </tr>
      </thead>
      <!--Table head-->

      <!--Table body-->
      <tbody>
      </tbody>
      <!--Table body-->
    </table>
    <!--Table-->
  </div>
  </div>
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Add a Product
  </button>
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Add a Product</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form class="row g-3">
            <div>

            </div>
            <div class="col-md-6">
              <label for="inputName" class="form-label">Product Name</label>
              <input type="text" class="form-control" id="inputName" v-model="productName" >
            </div>
            <div class="col-md-6">
              <label for="inputBrand" class="form-label">Brand</label>
              <input type="text" class="form-control2" id="inputBrand" v-model="productBrand" >
            </div>
            <div class="col-md-6">
              <label for="inputMenge" class="form-label">Amount</label>
              <input type="number" class="form-control" id="inputMenge" >
            </div>
            <div class="col-md-6">
              <label for="inputUnit" class="form-label">Unit</label>
              <select class="form-select" aria-label="Default select example" id="inputUnit">
                <option selected>Select Unit </option>
                <option value="0"> </option>
                <option value="1">Kg</option>
                <option value="2">Liter</option>
              </select>
            </div>
            <div>
              <label for="inputCategory" class="form-label">Category</label>
              <select class="form-select" aria-label="Default select example" id="inputCategory" v-model="productCategory">
                <option value="2">Vegetables</option>
                <option value="3">Baking</option>
                <option value="1">Fruit</option>
                <option value="4">Beverage</option>
                <option value="5">Bread</option>
                <option value="6">Breakfast</option>
                <option value="7">Dry</option>
                <option value="8">Sweets</option>
                <option value="9">Snack</option>
                <option value="10">Canned</option>
                <option value="11">Foodstuff</option>
                <option value="12">Condiment</option>
                <option value="13">Dairy</option>
                <option value="14">Health</option>
                <option value="15">Coffee</option>
                <option value="16">Tea</option>
                <option value="17">Frozen</option>
                <option value="18">Home</option>
                <option value="19">Pet</option>
                <option value="20">Baby</option>
                <option value="21">Other</option>
              </select>
              <div>&nbsp;</div>

            </div>
          </form>
          <div class="modal-footer" v-on="latestList = getTheLatestList">
            <button type="button" class="btn btn-primary" @click="addProduct();getTheLatestList()" data-bs-dismiss="modal" >Add Product</button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'ResponsiveTable',
  components: { },
  data(){
    return{
      productName: '',
      productBrand: '',
      productCategory: '',
      latestList : Object
    }
  },
  methods:{
    addProduct() {
      const endpoint = 'http://localhost:8080/api/v1/products'
      const data = {
        productName: this.productName,
        productBrand: this.productBrand,
        productCategory: this.productCategory,
      }
      const requestOption = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
    body: JSON.stringify(data)
      }
      fetch(endpoint, requestOption).then(response => response.json())
        .then(data => {
          console.log(data)
        })
        .catch(error => console.log('error', error))


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
    }
  },
}
</script>

<style scoped>

</style>

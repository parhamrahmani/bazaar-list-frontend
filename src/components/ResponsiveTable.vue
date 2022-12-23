<template>
  <div>&nbsp;</div>
  <div>&nbsp;</div>
  <div>&nbsp;</div>
  <div>&nbsp;</div>
  <div>&nbsp;</div>
  <div class="row">
    <div class="col-sm-4">
      <div class="card" style="width: 30rem; margin: 0 auto;text-align: center">
        <h5 class="card-header">Add Products To Your Shopping List</h5>
        <form class="needs-validation" novalidate>
          <div>&nbsp;</div>
          <div class="form-group">
            <label class="input-group-text-col-sm-3" id="addon-wrapping" for="productName">Product Name</label>
          </div>
          <div>
            <input type="text" class="form-control-col-sm-6" placeholder="Enter Product Name" aria-label="Username"
                   aria-describedby="addon-wrapping" id="productName" v-model="productName" style="margin: 5px ; width: 420px"
                   required>
            <div id="productNameFeedback" class="invalid-feedback">
              Please enter a product name
            </div>
          </div>
          <div>&nbsp;</div>
          <div class="form-group">
            <label class="input-group-text-col-sm-3" id="addon-wrapping2" for="ProductBrand">Product Brand</label>
          </div>
          <div>
            <input type="text" class="form-control-col-sm-6" placeholder="Enter Product Brand" aria-label="Username"
                   aria-describedby="addon-wrapping2" id="productBrand" v-model="productBrand" style="margin: 5px ;
                    width: 420px" required>
            <div id="productBrandFeedback" class="invalid-feedback">
              Please enter a brand
            </div>
          </div>
          <div>
            <div>&nbsp;</div>
            <label for="inputCategory" class="form-label-col-sm-6" style="margin: 5px">Category</label>
            <select class="form-select" aria-label="Default select example" id="inputCategory" v-model="productCategory"
                    style="margin-left: 30px;width: 420px" required>
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
            <div id="productCategoryFeedback" class="invalid-feedback">
              Please enter a category
            </div>
          </div>
          <button class="btn w-85  btn-lg mt-4 btn-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"
                  style="margin: 8px">
            Edit A Product in Your List
          </button>
          <button type="submit"
                  class="btn w-85 btn-lg mt-4 btn-primary" style="margin: 8px" @click="addProduct">Add a Product</button>

          <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasExampleLabel">Edit A Product In Your List</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <label for="productName">Select A Product</label>
              <select class="form-select" aria-label="Default select example" v-model="selectedId" style="margin: 5px"
              >
                <option v-for="product in products" :key="product.id" :value="product.id"> Product Id : {{product.id }} --> Product Name:  {{product.productName}}</option>
              </select>
              <div>&nbsp;</div>

              <EditProductModal :selectedId="selectedId"></EditProductModal>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="card" style="width: 65rem; margin: 0 auto">
        <div class="card-header">
          <h5> {{latestList.listName}} </h5>
        </div>
        <table class="table table-borderless">
          <thead>
          <tr>
            <th scope="col">Product Id</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Brand</th>
            <th scope="col">Category</th>
            <th scope="col">Amount</th>
            <th scope="col">Unit</th>
            <th scope="col">Options</th>
          </tr>
          </thead>
          <tbody>
          <tr  v-for="product in products" :key="product.id">
            <th>{{ product.id}}</th>
            <td>{{product.productName}}</td>
            <td>{{product.brand}}</td>
            <td>{{product.category}}</td>
            <td>
              <input type="number" class="form-control" id="inputMenge" size="2" min="0" max="1000" value="0" style="text-align: center">
            </td>
            <td>
              <select class="form-select" aria-label="Default select example" id="inputUnit">
                <option selected>Select Unit </option>
                <option>x</option>
                <option>Kg</option>
                <option>Liter</option>
              </select>
            </td>
              <td>
              <button type="button" class="btn btn-danger" @click="deleteProduct(product.id)">Delete</button>
            </td>
          </tr>

          </tbody>
        </table>
      </div>
      <div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import EditProductModal from '@/components/EditProductModal'

export default {
  /* eslint-disable */
  name: 'ResponsiveTable',
  components:{ EditProductModal},
  data (){
    return{
      products: [],
      productName: '',
      productBrand: '',
      productCategory: '',
      latestList: this.getTheLatestList(),
      latestListId: this.getTheLatestListId(),
      id: Number,
      editedProductName:'',
      editedProductBrand: '',
      editedProductCategory: '',
      selectedId : Number
    } },
  methods: {

    /**
     * @description adds Products to the recentn created Shopping List
     */

    addProduct() {
      const valid = this.validate()
      if(valid){
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        if(this.productName !== "" && this.productBrand !== "" && this.productCategory !== "")
        {
        const raw = JSON.stringify({
          "productName": this.productName,
          "brand": this.productBrand,
          "category": this.productCategory,
          "shoppingList": this.latestList
        });

        const requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch("http://localhost:8080/api/v1/products/", requestOptions)
          .then(response => response.json())
          .then(result => console.log(result))
          .then(result => this.products.push(result))
          .catch(error => console.log('error', error));
      } }
    },

    /**
     * @description gets the recent created shopping list
     *
     * @returns {this.latestList}
     */

    getTheLatestList() {
      const request = {
        method: 'GET',
        redirect: 'follow'
      }
      fetch('http://localhost:8080/api/v1/shoppingLists/getTheLatestList', request)
        .then(response => response.json())
        .then(result => this.latestList = result)
        .catch(error => console.log('error', error))
      return this.latestList
    },

    /**
     * @description gets the id of the latest created shopping list
     * @returns {this.latestListId}
     */

    getTheLatestListId() {
      const request = {
        method: 'GET',
        redirect: 'follow'
      }
      fetch('http://localhost:8080/api/v1/shoppingLists/getTheLatestListId', request)
        .then(response => response.json())
        .then(result => this.latestListId = result)
        .catch(error => console.log('error', error))
      return this.latestListId
    },

    /***
     * @description deletes the product from backend and our shopping list
     * @param id --> id of the product to be deleted
     */

    deleteProduct(id){
      const requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      };
      fetch("http://localhost:8080/api/v1/products/"+id, requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
      window.location.reload()

    },

    /**
     * @description updates/edits the recently added product to our list
     * @param id --> the id of the product to be updated
     */

    editProduct(id){
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        "productName": this.editedProductName,
        "brand": this.editedProductBrand,
        "category": this.editedProductCategory
      });

      const requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("http://localhost:8080/api/v1/products/"+id, requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
      window.location.reload()

    },
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
    }
    },


  /**
   *  @description gets the products that were recently added to the recently created shopping list
   */
  mounted(){
  const request = {
    method: 'GET',
    redirect: 'follow'
  }
  fetch('http://localhost:8080/api/v1/products//findProductsInLatestShoppingListId', request)
    .then(response => response.json())
    .then(result => result.forEach(product => {
      this.products.push(product)
    }))
    .catch(error => console.log('error', error))
}}

</script>


<style scoped>
.card {display:inline-block;}
</style>

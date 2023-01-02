<template>
  <div>&nbsp;</div>
  <div>&nbsp;</div>
  <div>&nbsp;</div>
  <div>&nbsp;</div>
  <div>&nbsp;</div>
  <div class="row">
        <div class="card-header">
          <h5> {{ latestList.listName }} </h5>
        </div>
    <form class="form needs-validation" novalidate>
        <table class="table" style="margin: 32px; width: 97%">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product Id</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Brand</th>
            <th scope="col">Category</th>
            <th scope="col">Options</th>
          </tr>
          </thead>
          <tbody>
          <tr  v-for="(product,index) in products" :key="product.id">
            <th> {{ index + 1 }}</th>
            <th>{{ product.id}}</th>
            <td>{{product.productName}}</td>
            <td>{{product.brand}}</td>
            <td>{{product.category}}</td>
              <td>
                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                  <button type="button" class="btn btn-primary" data-bs-toggle="offcanvas"
                          :data-bs-target="'#offcanvasExample' + index" aria-controls="offcanvasExample">Edit</button>
                  <button type="button" class="btn btn-danger"  @click="deleteProduct(product.id)">Delete</button>
                </div>
                <div class="offcanvas offcanvas-start" tabindex="-1" :id="'offcanvasExample' + index"
                     aria-labelledby="offcanvasExampleLabel">
                  <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasLabel">Edit Product {{ product.id }} In Your List</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div class="offcanvas-body">
                    <div>&nbsp;</div>
                    <EditProductModal :selectedId="product.id"></EditProductModal>
                  </div>
                </div>
            </td>
          </tr>
          <tr class="input-row">
            <th></th>
            <th></th>
            <td>
              <input type="text" class="form-control-col-sm-6" placeholder="Enter Product Name" aria-label="Username"
                     aria-describedby="addon-wrapping" id="productName" v-model="productName" style="margin: 5px ;
                     width: 420px" required>
              <div id="productNameFeedback" class="invalid-feedback">
                Please enter a product name
              </div>
            </td>
            <td>
              <input type="text" class="form-control-col-sm-6" placeholder="Enter Product Brand" aria-label="Username"
                     aria-describedby="addon-wrapping2" id="productBrand" v-model="productBrand" style="margin: 5px ;
                    width: 420px" required>
              <div id="productBrandFeedback" class="invalid-feedback">
                Please enter a brand
              </div>
            </td>
            <td>
              <select class="form-select" aria-label="Default select example" id="inputCategory"
                      v-model="productCategory" style="margin-left: 30px;width: 420px" required>
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
            </td>
            <td>
              <button type="submit"
                      class="btn btn-primary" @click="addProduct" >Add a Product</button>
            </td>
          </tr>
          </tbody>
        </table>
    </form>
  </div>
  <div>&nbsp;</div>
  <div>&nbsp;</div>
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
Show The Final Shopping List  </button>

  <!-- Modal -->
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
       aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Your Final List</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <FinalList v-bind:list="latestList">
          </FinalList>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import EditProductModal from '@/components/EditProductModal'
import FinalList from '@/components/FinalList'

export default {
  /* eslint-disable */
  name: 'ResponsiveTable',
  components:{ EditProductModal, FinalList},
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
      selectedId : Number,
      selectedAmount : Number,
      selectedUnit : String
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
          window.location.reload()

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
.modal.fade {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.modal-dialog {
  width: 1600px;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-content {
  width: 100%;
  height: 100%;
}
.modal-body {
  max-height: none;
  overflow-y: visible;
}
.modal {
  width: 1600px;
}
.input-row {
  border: 1px solid black;
}
</style>

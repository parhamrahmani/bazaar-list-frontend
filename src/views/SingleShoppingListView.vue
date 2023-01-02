<template>
  <form class="form needs-validation" novalidate>
    <div>&nbsp;</div>

  <h3> Shopping List {{ this.$route.params.listId }} </h3>
  <div>&nbsp;</div>
  <table class="table table-borderless">
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
      <th>{{ index + 1 }}</th>
      <th>{{ product.id}}</th>
      <td>{{product.productName}}</td>
      <td>{{product.brand}}</td>
      <td>{{product.category}}</td>
      <td>
        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
          <button type="button" class="btn btn-primary" data-bs-toggle="offcanvas" :data-bs-target="'#offcanvasExample' + index" aria-controls="offcanvasExample">Edit</button>
          <button type="button" class="btn btn-danger"  @click="deleteProduct(product.id)">Delete</button>
        </div>
        <div class="offcanvas offcanvas-start" tabindex="-1" :id="'offcanvasExample' + index" aria-labelledby="offcanvasExampleLabel">
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
          <table v-if="products.length > 0">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Brand</th>
              <th scope="col">Product Category</th>
              <th scope="col">Amount </th>
              <th scope="col">Unit</th>
              <th scope="col">Bought</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(product, index) in products" :key="product.id" :class="{ 'bg-gray-200': product.bought }"
                :style="{ 'text-decoration': product.bought ? 'line-through black double' : 'none', 'font-weight': product.bought ? 'bold' : 'normal' }">
              <th>{{ index +1 }}</th>
              <td>{{product.productName}}</td>
              <td>{{product.brand}}</td>
              <td>{{product.category}}</td>
              <td>
                <input type="number" class="form-control" id="inputMenge" size="2" min="1" max="1000" value="1" style="text-align: center">
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
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" v-model="product.bought" id="flexCheckDefault">
                  <label class="form-check-label" for="flexCheckDefault">
                    Bought
                  </label>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
          <div v-else>No products added yet</div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  </form>
</template>

<script>
/* eslint-disable */
import EditProductModal from '@/components/EditProductModal'
export default {
  name: 'SingleShoppingListView',
 components:{EditProductModal},
  data () {
    return {
      products: [],
      productName: '',
      productCategory: '',
      productBrand: '',
      theList: Object
    }
  },
  methods: {
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
            "shoppingList": this.theList
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
  mounted () {
    const listId = this.$route.params.listId
    const request = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch('http://localhost:8080//api/v1/shoppingLists/getProductsByShoppingListId/'+ listId, request)
      .then(response => response.json())
      .then(result => result.forEach(product => {
        this.products.push(product)
      }))
      .catch(error => console.log('error', error))
    fetch("http://localhost:8080/api/v1/shoppingLists/"+listId, request)
      .then(response => response.json())
      .then(result => this.theList = result)
      .catch(error => console.log('error', error));
  }

}
</script>

<style scoped>

</style>

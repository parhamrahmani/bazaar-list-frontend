<template>
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
      <th>{{ index }}</th>
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
    </tbody>
  </table>
</template>

<script>
/* eslint-disable */
import EditProductModal from '@/components/EditProductModal'
export default {
  name: 'SingleShoppingListView',
 components:{EditProductModal},
  data () {
    return {
      products: []
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
  }

}
</script>

<style scoped>

</style>

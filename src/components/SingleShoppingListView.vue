<template>
  <div>&nbsp;</div>
  <div>&nbsp;</div>
  <div v-for="product in products" :key="product.id">
    <div v-if="product.shoppingList.listId === listId"> {{ product.productName }} -- {{ product.id}} --  {{ product.category }} -- {{ product.shoppingList }}</div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'SingleShoppingListView',
  props: {
    listId: Number
  },
  data () {
    return {
      products : [],
      loadedList: Object
    }
  },
  methods: {
    fetchProductsForListById(id) {
      const request = {
        method: 'GET',
        redirect: 'follow'
      }
      fetch('http://localhost:8080/api/v1/shoppingLists/getProductsByShoppingListId/'+id, request)
        .then(response => response.json())
        .then(result => this.products.push(result))
        .catch(error => console.log('error', error))
    }
  },
  mounted(){
    const request = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch('http://localhost:8080/api/v1/products', request)
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

/* eslint-disable */
<template>
  <div>
  <h4 style="text-align: left">         List id : {{ latestList.listId }}
  </h4>
    <h4 style="text-align: left">List Name:  {{latestList.listName}}</h4>
    <h5 style="text-align: left"> List Description: {{latestList.description}}</h5>
    <div>&nbsp;</div>

    <table class="table" >

      <thead>
      <tr>
        <th scope="col">Product Id</th>
        <th scope="col">Product Name</th>
        <th scope="col">Brand</th>
        <th scope="col">Category</th>
      </tr>
      </thead>
      <tbody>
     <tr  v-for="product in products" :key="product.id">
      </tr>
      </tbody>
    </table>
    <div>&nbsp;</div>
  </div>
</template>

<script>
/* eslint-disable */
import ResponsiveTable from '@/components/ResponsiveTable'
export default {
  name: 'ShoppingLists',
  components:{
    ResponsiveTable
  },
  data () {
    return {
      lists: [
      ],
      products: [
      ],
     latestList: Object }},
  mounted () {
    const request = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch('http://localhost:8080/api/v1/products', request)
      .then(response => response.json())
      .then(result => result.forEach(product => { this.products.push(product) }))
      .catch(error => console.log('error', error))

    fetch('http://localhost:8080/api/v1/shoppingLists', request)
      .then(response => response.json())
      .then(result => result.forEach(list => { this.lists.push(list) }))
      .catch(error => console.log('error', error))

    fetch('http://localhost:8080/api/v1/shoppingLists/getTheLatestList',request)
      .then(response => response.json())
      .then(result => this.latestList = result)
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>

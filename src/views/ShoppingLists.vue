/* eslint-disable */
<template>
  <div>&nbsp;</div>
  <div>&nbsp;</div>
  <h3 class="mb-2 display-5 fw-bold">Load A Shopping List</h3>
          <div class="fixTableHead" style="overflow:auto; max-height:500px; margin: 150px">
            <h5>All Shopping Lists</h5>
            <div class="fixTableHead">
              <table>
                <thead>
                <tr>
                  <th>List Id</th>
                  <th>List Name</th>
                  <th>Description</th>
                  <th>Options</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="list in lists" :key="list.id" >
                  <td>{{ list.listId }}</td>
                  <td> {{ list.listName }} </td>
                  <td> {{ list.description }}</td>
                  <td>     <router-link :to="'/list/' + list.listId">
                    <button type="button" class="btn btn-primary">Load</button>
                  </router-link></td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
</template>

<script>
/* eslint-disable */
import SingleShoppingListView from '@/views/SingleShoppingListView'
export default {
  name: 'ShoppingLists',
  components: {SingleShoppingListView},
  data () {
   return {
     lists : [],
     products : [],
     selectedId : Number
   }
  },
  methods:{
    fetchProductsForListById(id) {

      const request = {
        method: 'GET',
        redirect: 'follow'
      }
      fetch('http://localhost:8080/api/v1/shoppingLists/getProductsByShoppingListId/'+id, request)
        .then(response => response.json())
        .then(result => this.products.push(result))
        .catch(error => console.log('error', error))
    },


  },
  mounted () {
    const request = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch('http://localhost:8080/api/v1/shoppingLists', request)
      .then(response => response.json())
      .then(result => this.lists = result)
      .catch(error => console.log('error', error))
  }

}
</script>

<style scoped>
table,tr,th,td{
  border:1px solid #dddddd;
  border-collapse:collapse;
}
.fixTableHead {
  overflow-y: auto;
  height: 700px;
}
.fixTableHead thead th {
  position: sticky;
  top: 0;
}
table {
  border-collapse: collapse;
  width: 100%;
}
th,
td {
  padding: 8px 15px;
  border: 2px solid #529432;
}
th {
  background: #ABDD93;
}
</style>

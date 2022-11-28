<template>
  <div class="accordion" id="accordionExample">
    <div class="accordion-item">
  <div class="col" v-for="list in lists" :key="list.id">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        List #{{list.listId}}
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
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
             <th scope="row"  v-if="product.shoppingList.listId === list.listId" >{{ product.id }}</th>
            <td  v-if="product.shoppingList.listId === list.listId" >{{product.productName}}</td>
             <td  v-if="product.shoppingList.listId === list.listId" >{{product.brand}}</td>
              <td  v-if="product.shoppingList.listId === list.listId" >{{product.category}}</td>
            </tr>

            </tbody>
          </table>
        </div>

  </div>
    </div>
  </div>
    </div>
</template>

<script>
export default {

  name: 'ShoppingLists',
  data () {
    return {
      lists: [
      ],
      products: [
      ]
    }
  },
  methods: {
  },
  mounted () {
    const requestProducts = {
      method: 'GET',
      redirect: 'follow'
    }

    console.log('in mounted')
    fetch('http://localhost:8080/api/v1/products', requestProducts)
      .then(response => response.json())
      .then(result => result.forEach(product => { this.products.push(product) }))
      .catch(error => console.log('error', error))

    const requestShoppingLists = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch('http://localhost:8080/api/v1/shoppingLists', requestShoppingLists)
      .then(response => response.json())
      .then(result => result.forEach(list => { this.lists.push(list) }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>

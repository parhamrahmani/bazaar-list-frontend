<template>
  <table>
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
        <div class="form-check">
          <input class="form-check-input" type="checkbox" v-model="product.bought" id="flexCheckDefault">
          <label class="form-check-label" for="flexCheckDefault">
            Product Bought
          </label>
        </div>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
/* eslint-disable */
export default {
  name: 'FinalList',
  props: {
    list: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    const request = {
      method: 'GET',
      redirect: 'follow',
    };
    fetch('http://localhost:8080//api/v1/shoppingLists/getProductsByShoppingListId/'+ this.list.listId, request)
      .then(response => response.json())
      .then(result => result.forEach(product => {
        this.products.push(product)
      }))
      .catch(error => console.log('error', error))
  },
};
</script>

<style scoped>
.bg-gray-200 {
  background-color: white;
}
select {
  min-width: 200px;
}

</style>

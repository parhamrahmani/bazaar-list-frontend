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
  /* eslint-disable */
  name: 'Lists',
  data()
  {
    return{
      lists: [
        {
          "listId": 1,
          "listName": "test",
          "description": "testList",
          "productIds": [
            2,
            1
          ]
        },
        {
          "listId": 2,
          "listName": "test2",
          "description": "testList2",
          "productIds": [
            3,
            4
          ]
        }
      ],
      products: [
        {
          "id": 2,
          "productName": "testProduct2",
          "brand": "testBrand2",
          "category": "Other",
          "shoppingList": {
            "listId": 1,
            "listName": "test",
            "description": "testList"
          }
        },
        {
          "id": 1,
          "productName": "testProduct",
          "brand": "testBrand",
          "category": "Beverage",
          "shoppingList": {
            "listId": 1,
            "listName": "test",
            "description": "testList"
          }
        },
        {
          "id": 3,
          "productName": "testProduct3",
          "brand": "testBrand4",
          "category": "Bread",
          "shoppingList": {
            "listId": 2,
            "listName": "test2",
            "description": "testList2"
          }
        },
        {
          "id": 4,
          "productName": "testProduct4",
          "brand": "testBrand3",
          "category": "Other",
          "shoppingList": {
            "listId": 2,
            "listName": "test2",
            "description": "testList2"
          }
        }
      ]

    }

  }
}
</script>

<style scoped>

</style>

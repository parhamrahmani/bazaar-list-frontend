<template>
  <section class="vh-100" style="background-color:white;">
    <div class="container py-lg-0 h-50">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
              <h4 class="text-center my-3 pb-3">Make A Shopping List</h4>

             <table class="table mb-4">
                <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Product</th>
                  <th scope="col">Brand</th>
                  <th scope="col">Description</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td> Tequila </td>
                  <td>Sierra</td>
                  <td>
                    Test
                  </td>
                  <td> <button type="submit" class="btn btn-danger">Delete</button></td>

                </tr>

                </tbody>
              </table>

            </div>
          </div>
        </div>
  </section>
</template>

<script>
import CollapseBars from '@/components/CollapseBars'
export default {
  /* eslint-disable */
  name: 'ShoppingListView',
  components:{ CollapseBars }
}
</script>

<style scoped>

</style>

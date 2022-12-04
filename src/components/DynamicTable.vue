<template>
  <div class="container">
    <div class="row clearfix">
      <div class="col-md-12 column">
        <table class="table table-bordered table-hover" id="tab_logic">
          <thead>
          <tr>
            <th class="text-center">
              #
            </th>
            <th class="text-center">
              Name
            </th>
            <th class="text-center">
              Brand
            </th>
            <th class="text-center">
              Category
            </th>
          </tr>
          </thead>
          <tbody>
          <tr id='addr0'>
            <td>1</td>
            <td>
              <input type="text" name='name[]'  placeholder='Enter Name' class="form-control"/>
            </td>
            <td>
              <input type="text" name='brand[]' placeholder='Enter Brand' class="form-control"/>
            </td>
            <td>
              <select class="form-select" aria-label="Default select example">
                <option selected>Select A Category</option>
                <option value="2">Vegetables</option>
                <option value="3">Baking</option>
                <option value="1">Fruit</option>
                <option value="4">Beverage</option>
                <option value="5">Bread</option>
                <option value="6">Breakfast</option>
                <option value="7">Dry</option>
                <option value="8">Sweets</option>
                <option value="9">Snack</option>
                <option value="10">Canned</option>
                <option value="11">Foodstuff</option>
                <option value="12">Condiment</option>
                <option value="13">Dairy</option>
                <option value="14">Health</option>
                <option value="15">Coffee</option>
                <option value="16">Tea</option>
                <option value="17">Frozen</option>
                <option value="18">Home</option>
                <option value="19">Pet</option>
                <option value="20">Baby</option>
                <option value="21">Other</option>
              </select>
            </td>
          </tr>
          <tr id='addr1'></tr>
          </tbody>
        </table>
      </div>
    </div>
    <button id="add_row" class="btn btn-default pull-left"  @click="addRows" >Add Product</button>
    <button id='delete_row' class="pull-right btn btn-default" @click="deleteRow">Delete Product</button>
  </div>
</template>

<script>

export default {
  /* eslint-disable */
  name: 'DynamicTable',
}
</script>

<style scoped>

</style>

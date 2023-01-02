<template>
  <form class="form needs-validation" novalidate>
    <div class="form-group">
      <label for="productName">Product Name</label>
      <input type="text" class="form-control mt-2"
             id="productName" placeholder="Name"
             v-model="editedProductName" required>
    </div>
    <div id="productNameFeedback" class="invalid-feedback">
      Please enter a product name
    </div>
    <div>&nbsp;</div>
    <div class="form-group">
      <label for="productBrand">Brand Name</label>
      <input type="text" class="form-control mt-2"
             id="productBrand" placeholder="Name"
             v-model="editedProductBrand"
      required>
      <div id="productBrandFeedback" class="invalid-feedback">
        Please enter a product Brand
      </div>
    </div>

    <div>&nbsp;</div>

    <label for="inputCategory" class="form-label">Category</label>
    <select class="form-select" aria-label="Default select example" id="inputCategory" v-model="editedProductCategory">
      <option >Vegetables</option>
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
      Please enter a product category
    </div>
    <div>&nbsp;</div>
  </form>
  <button type="button" class="btn btn-primary" @click="editProduct(selectedId)" data-bs-dismiss="modal">Save changes</button>
</template>

<script>
/* eslint-disable */
export default {
  name: 'EditProductModal',
 data(){
    return{
      editedProductName:'',
      editedProductBrand: '',
      editedProductCategory: ''
    }
 },
  props: {
    selectedId : Number
  },
  methods: {
    /**
     * @description updates/edits the recently added product to our list
     * @param id --> the id of the product to be updated
     */

    editProduct(id){
      const valid = this.validate();
      if(valid) {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        if(this.editedProductName !== "" && this.editedProductBrand !== "" && this.editedProductCategory !== "")
        {
        const raw = JSON.stringify({
          "productName": this.editedProductName,
          "brand": this.editedProductBrand,
          "category": this.editedProductCategory
        });

        const requestOptions = {
          method: 'PUT',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch("http://localhost:8080/api/v1/products/" + id, requestOptions)
          .then(response => response.json())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
        window.location.reload() }
      }
    },

    /**
     * @description validates the input values
     */

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
    },
  }
}
</script>

<style scoped>

</style>

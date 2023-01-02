/* eslint-disable */
<template>
  <form class="form">
  <div>&nbsp;</div>
  <div>&nbsp;</div>
  <h4>Load A Shopping List</h4>
  <div class="table-container">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th>#</th>
        <th>List Id</th>
        <th>List Name</th>
        <th>Description</th>
        <th>Options</th>
      </tr>
      </thead>
      <tbody>
      <!-- Add your table rows and cells here -->
      <tr v-for="(list,index) in lists" :key="list.id" >
        <td>{{ index + 1 }}</td>
        <td>{{ list.listId }}</td>
        <td> {{ list.listName }} </td>
        <td> {{ list.description }}</td>
        <td>
          <router-link :to="'/list/' + list.listId">
          <button type="button" class="btn btn-primary">
            Load
          </button>
        </router-link>
          <!-- Button trigger modal -->
          <button type="button" class="btn btn-secondary" data-bs-toggle="modal"
                  :data-bs-target= "'#staticBackdrop' + index ">
            Edit
          </button>
          <!-- Modal -->
          <div class="modal fade" :id="'staticBackdrop'+index" data-bs-backdrop="static" data-bs-keyboard="false"
               tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="staticBackdropLabel">Edit List {{list.listId}}</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form class="form needs-validation" novalidate>
                    <div class="form-group mb-4">
                      <input type="text" class="form-control" id="listname"
                             placeholder="Please enter a new list name"
                             v-model="editedListName" required>
                    </div>
                    <div class="form-group mb-4">
                <textarea class="form-control" id="message" name="message"
                          rows="3" placeholder="Please enter a new list description"
                          v-model="editedDescription" required></textarea>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button type="button" class="btn btn-primary" @click="editList(list.listId)"
                          data-bs-dismiss="modal">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button type="button" class="btn btn-danger" @click="deleteList(list.listId)">Delete</button>
        </td>
      </tr>
      <!-- Add more rows here -->
      </tbody>
    </table>
  </div>
  </form>
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
     selectedId : Number,
     editedDescription : '',
     editedListName : ''
   }
  },
  methods:{
    /**
     * @description updates/edits the selected list
     * @param id --> the id of the list to be updated
     */

   editList(id){

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
      "listName" : this.editedListName,
        "description" : this.editedDescription
      });
        if(this.editedListName !== "" && this.editedDescription !== ""){
      const requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      fetch("http://localhost:8080/api/v1/shoppingLists/"+id, requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
          window.location.reload()
        }},
    /***
     * @description deletes the selected shopping list
     * @param id --> id of the list to be deleted
     */

    deleteList(id){
      const requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      };
      fetch('http://localhost:8080/api/v1/shoppingLists/' + id, requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
      window.location.reload()

    }
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
.table-container {
  height: 650px; /* Set the desired height of the container */
  margin: 15px;
  overflow-y: auto; /* Enable scrollbar for the container */
}
.table-container thead th {
  position: sticky;
  top: 0;
  background-color: green;
  color: white;
}
</style>

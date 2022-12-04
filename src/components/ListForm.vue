<template>
  <head>
    <meta charset="UTF-8">
    <title>Bootstrap 5 generator example page</title>

    <meta charset="utf-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="favicon.ico">
    <link rel="stylesheet"
          href=" https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css ">
    <link rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">
    <!-- Plugins -->
  </head>
  <body>
  <section class="pt-5 pb-5">
    <div class="container">
      <div class="row">
        <div class="col-md-6 ">
          <img src="https://www.eatwell101.com/wp-content/uploads/2012/02/A-Beginner%E2%80%99s-Shopping-List.jpg" alt=" https://dummyimage.com/660x450/ccc/ffffff"
               class="img-fluid m-shadow-16 rounded shadow">
        </div>
        <div class="col-md-6">
          <h3 class="display-5 mt-2 fw-bold">Make A Shopping List</h3>
          <p>Make a grocery list before going shopping</p>
          <form class="form">
            <div class="form-group mb-4">
              <input type="text" class="form-control" id="listname"
                     placeholder="Enter a name for your list">
            </div>
            <div class="form-group mb-4">
                <textarea class="form-control" id="message" name="message"
                          rows="3" placeholder="Type a description"></textarea>
            </div>
            <div class="form-group">
              <button type="button" class="btn btn-primary btn-lg">
                Create Shopping List</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  </section>
  </body>
</template>

<script>
export default {
  name: 'ListForm'
}
</script>

<style scoped>

</style>

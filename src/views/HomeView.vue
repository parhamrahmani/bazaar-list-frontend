
<template>

  <div>&nbsp;</div>
<section>
   <img alt="Vue logo" src="../assets/logotrans.png"
        height="60"
        width="250"
        style="align-content: center"
   >
  <div>&nbsp;</div>
  <div>&nbsp;</div><div>&nbsp;</div>
  <div>&nbsp;</div>
   <ListForm>
   </ListForm>
   <div>
   </div>
</section>
</template>

<script type="text/javascript">
import ListForm from '@/components/ListForm'
import ResponsiveTable from '@/components/ResponsiveTable'
export default {

  /* eslint-disable */
  name: 'ShoppingListView',
  components:{ ListForm, ResponsiveTable},
  data () {
    return {
      lists: [

      ],
      products: [
      ]
    }
  },}
</script>

<style scoped>
p {
  background-image: url('../assets/logotrans.png');
}
</style>

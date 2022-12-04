
<template>
  <div>&nbsp;</div>
  <img alt="Vue logo" src="../assets/logotrans.png"
       height="60"
       width="250"
       style="align-content: center"
  >
  <ListForm></ListForm>
</template>

<script type="text/javascript">
import CollapseBars from '@/components/CollapseBars'
import DynamicTable from '@/components/DynamicTable'
import ListForm from '@/components/ListForm'
export default {

  /* eslint-disable */
  name: 'ShoppingListView',
  components:{ CollapseBars , DynamicTable , ListForm},
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
</style>

<template>
  <div class="home" >
    <img alt="Vue logo" src="../assets/logotrans.png"
         height="100"
         width="400"
    >
    <HelloWorld msg="Hello World!" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

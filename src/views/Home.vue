<template>
  <div class="home">
    <navbar />
    <mains />
    

  </div>
</template>

<script>
import Foote from '../components/Foote.vue'
import Mains from '../components/Mains.vue'
import Navbar from '../components/Navbar.vue'


export default {
  name: 'Home',
  components: {
    Navbar,
    Mains,
    
    
  },
}
</script>
<style scoped>
.home{
  
}

</style>


<template>
  <div class="contadores">
      <app-contador v-for = 'c in 5' :key = 'c'></app-contador>
      <app-count v-for = 'c in 3' :key = 'c'/>
  </div>
</template>

<script>
import Contador from './contador.vue'
import Conters from './count.vue'
export default {
    components: {
        'app-contador': Contador,
        'app-count': Conters
    }
}
</script>

<style>

</style>
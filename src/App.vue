<script setup>

import { RouterView } from 'vue-router'

import BoxHeaderComponent from './views/BoxHeaderComponent.vue'
//import jumbo from './views/jumbo.vue'
</script>


<template>

  <div class="container">
  <BoxHeaderComponent> </BoxHeaderComponent>
  
  <RouterView/>
  </div>

</template>

<script >
export default {
  name: 'App',
};
</script>
<template>
  <div class="catalog-page container">
    Product {{ $route.params.id }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ProductPage'
})
</script>

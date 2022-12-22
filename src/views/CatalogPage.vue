<template>
  <div class="catalog-page container">
    <CatalogFilters :filters="filters"/>
    <ProductList/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CatalogFilters from '@components/CatalogFilters.vue'
import ProductList from '@components/ProductList.vue'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'CatalogPage',
  data () {
    return {
      count: 0
    }
  },
  components: {
    CatalogFilters,
    ProductList
  },
  computed: {
    ...mapState(['filters'])
  }
})
</script>

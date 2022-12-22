<template>
  <nav v-if="filteredProducts.length" class="product-list">
    <ProductCard
      v-for="product in filteredProducts"
      :key="product.id"
      :product="product"
    />
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'
import ProductCard from '@components/ProductCard.vue'

export default Vue.extend({
  name: 'ProductList',
  components: {
    ProductCard
  },
  created () {
    this.getProductList()
  },
  computed: {
    ...mapGetters(['filteredProducts'])
  },
  methods: {
    ...mapActions(['getProductList'])
  }
})
</script>

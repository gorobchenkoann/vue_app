<template>
  <router-link
    :to="`product/${product.id}`"
    class="product"
  >
    <img class="product__image" :src="product.images[0]" :alt="product.title"/>
    <h2 class="product__title">{{ product.title }}</h2>

    <div class="product__price">{{ product.price }} $</div>

    <div
      class="product__stock"
      :class="product.stock > 0 ? 'available' : 'notAvailable'">
      {{ product.stock > 0 ? 'In stock' : 'Not in stock' }}
    </div>

    <p class="product__description">{{ product.description }}</p>
  </router-link>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Product } from '@/types'

export default Vue.extend({
  name: 'ProductCard',
  props: {
    product: {
      required: true,
      type: Object as PropType<Product>
    }
  }
})
</script>

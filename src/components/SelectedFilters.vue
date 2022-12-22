<template>
    <div class="selected-filters">
        <div
            v-for="filter in combinedSelectedFilters"
            :key="filter.name"
        >
            <div
                class="selected-filters__item"
                @click="onClick(filter)"
            >{{ filter.name }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'
import { Filter } from '@/types'

export default Vue.extend({
  name: 'SelectedFilters',
  computed: {
    ...mapGetters(['combinedSelectedFilters'])
  },
  methods: {
    ...mapActions(['getProductList', 'changeFilter']),
    onClick (filter: Filter) {
      this.changeFilter({ checked: false, filter })
    }
  }
})
</script>

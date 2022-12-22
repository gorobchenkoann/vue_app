<template>
  <div class="filters">
    <div
      v-if="hasSelectedFilters"
      class="filters__wrap">
        <div class="filters__title">Selected Filters</div>
        <SelectedFilters/>
    </div>

    <div class="filters__wrap">
      <FiltersBlock
        title="Brand"
        :filters="filters.brand"
      />
    </div>

    <div class="filters__wrap">
      <FiltersBlock
        title="Category"
        :filters="filters.category"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import FiltersBlock from '@components/FiltersBlock.vue'
import SelectedFilters from '@components/SelectedFilters.vue'

export default Vue.extend({
  name: 'CatalogFilters',
  components: {
    FiltersBlock,
    SelectedFilters
  },
  props: {
    filters: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters(['hasSelectedFilters'])
  }
})
</script>

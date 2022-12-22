<template>
    <div class="filters__wrap">
      <div class="filters__title">{{ title }}</div>

      <div
        v-for="filter in filtersTransformed"
        :key="filter.id"
        >
          <CustomCheckbox
            class="filters__checkbox"
            :checked="filter.selected"
            @change="change($event, filter)"
            >
            <template #label>
              {{ filter.name }}
            </template>
          </CustomCheckbox>
      </div>

      <div
        class="filters__button-more"
        v-if="needToCutFilters"
        @click="toggleFilters"
    >{{ buttonText }}</div>
    </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { mapActions } from 'vuex'
import CustomCheckbox from '@common/CustomCheckbox.vue'
import { Filter } from '@/types'
import { FILTERS_VISSIBLE_AMOUNT } from '@/constants'

export default Vue.extend({
  name: 'FiltersBlock',
  components: {
    CustomCheckbox
  },
  data () {
    return {
      isFiltersCut: false
    }
  },
  props: {
    filters: {
      type: Array as PropType<Filter[]>,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  computed: {
    needToCutFilters (): boolean {
      return this.filters.length > FILTERS_VISSIBLE_AMOUNT
    },
    buttonText (): string {
      return !this.isFiltersCut && this.needToCutFilters ? 'Show more' : 'Hide'
    },
    filtersTransformed (): Filter[] {
      return (!this.isFiltersCut && this.needToCutFilters) ? this.filters.slice(0, FILTERS_VISSIBLE_AMOUNT) : this.filters
    }
  },
  methods: {
    ...mapActions(['changeFilter']),
    toggleFilters (): void {
      this.isFiltersCut = !this.isFiltersCut
    },
    change (checked: boolean, filter: Filter) {
      this.changeFilter({ checked, filter })
    }
  }
})
</script>

import Vue from 'vue'
import Vuex from 'vuex'
import { generateId } from '@/utils/utils'
import { Product, Filters, Filter } from '@/types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productList: [] as Product[],
    filters: {
      brand: [] as Filter[],
      category: [] as Filter[]
    }
  },
  mutations: {
    SET_PRODUCT_LIST (state, productList) {
      state.productList = productList
    },
    SET_FILTERS (state, filters) {
      state.filters = filters
    },
    CHANGE_FILTER (state, { checked, filter }) {
      const filterType = filter.type as keyof Filters

      const currentFilter = state.filters[filterType].find((f: Filter) => {
        return f.name === filter.name
      })

      if (currentFilter) {
        currentFilter.selected = checked
      }
    }
  },
  actions: {
    getProductList ({ commit, dispatch }) {
      fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => {
          commit('SET_PRODUCT_LIST', data.products)
          dispatch('createFilters', data.products)
        })
    },
    createFilters ({ commit }, products) {
      const filters = { brand: [] as Filter[], category: [] as Filter[] }

      products.forEach((product: Product) => {
        const brand = product.brand.toLowerCase()
        const category = product.category

        const isAddedBrand = filters.brand.find((brandFilter: Filter) => brandFilter.name === brand)
        const isAddedCategory = filters.category.find((categoryFilter: Filter) => categoryFilter.name === category)

        if (!isAddedBrand) {
          filters.brand.push({ id: generateId(), name: brand, type: 'brand', selected: false })
        }

        if (!isAddedCategory) {
          filters.category.push({ id: generateId(), name: category, type: 'category', selected: false })
        }
      })

      commit('SET_FILTERS', filters)
    },
    changeFilter ({ commit }, { checked, filter }) {
      commit('CHANGE_FILTER', { checked, filter })
    }
  },
  getters: {
    brandFilters: state => {
      return state.filters.brand.filter((f: Filter) => f.selected)
    },
    categoryFilters: state => {
      return state.filters.category.filter((f: Filter) => f.selected)
    },
    filteredProducts: (state, getters) => {
      let filteredProducts = state.productList as Product[]

      if (getters.brandFilters.length) {
        filteredProducts = filteredProducts.filter((p: Product) => {
          return getters.brandFilters.some((brandFilter: Filter) => {
            return brandFilter.selected && brandFilter.name === p.brand.toLowerCase()
          })
        })
      }

      if (getters.categoryFilters.length) {
        filteredProducts = filteredProducts.filter((p: Product) => {
          return getters.categoryFilters.some((catFilter: Filter) => {
            return catFilter.selected && catFilter.name === p.category.toLowerCase()
          })
        })
      }

      return filteredProducts
    },
    hasSelectedFilters: (state, getters) => getters.brandFilters.length || getters.categoryFilters.length,
    combinedSelectedFilters: (state, getters) => [...getters.brandFilters, ...getters.categoryFilters]
  }
})

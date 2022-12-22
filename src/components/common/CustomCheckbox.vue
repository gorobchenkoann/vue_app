<template>
    <label class="checkbox">
        <input
            type="checkbox"
            class="checkbox__input"
            :checked="checked"
            @change="onChange"
        />

        <span class="checkbox__control"></span>

        <span class="checkbox__label">
          <slot name="label"/>
        </span>
    </label>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CustomCheckbox',
  props: {
    checked: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onChange (e: { target: HTMLInputElement }): void {
      this.$emit('change', e.target.checked)
    }
  }
})
</script>

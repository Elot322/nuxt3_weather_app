<template>
  <div>
    <p
      :class="$style['error']">
      {{ error }}
    </p>
    <slot name="input" :decorate="decorate"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ValidationContainer',
  emits: ['getData'],
  setup(props, ctx) {
    const error = ref('')

    async function decorate(func: () => Promise<any>) {
      try {
        const result = await func()
        ctx.emit('getData', result)
        error.value = ''
      } catch(e: any) {
        error.value = e.message
      }
    }

    return {
      error,
      decorate
    }
  }
})
</script>

<style lang="scss" module>
.error {
  color: red
}
</style>
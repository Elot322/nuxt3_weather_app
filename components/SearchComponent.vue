<template>
  <ValidationContainer
    :class="$style['search-container']"
    @getData="changeWeatherInfo">
    <template #input="{ decorate }">
      <input
        :class="$style['search-container__input']"
        v-model="inputValue"
        placeholder="Enter city"
        type="text"/>
      <button
        :class="$style['search-container__button']"
        @click="decorate(onButtonClick)">Search</button>
    </template>
  </ValidationContainer>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { getWeather } from '~/services/get-weather'

import ValidationContainer from '~/components/ValidationContainer.vue'

export default defineComponent({
  name: "SearchComponent",
  components: {
    ValidationContainer
  },
  emits:['update'],
  setup(props, ctx) {
    const inputValue = ref('')

    function changeWeatherInfo(data:any) {
      ctx.emit('update', data)
    }
    
    async function onButtonClick() {
      return await getWeather({
        'q': inputValue.value,
        'units': 'metric'
      })
    }

    return {
      inputValue,
      changeWeatherInfo,
      onButtonClick
    }
  }
})
</script>

<style lang="scss" module>
.search-container {

  &__input {
    width: calc(100% - 16px);
    padding: 8px;
    box-sizing: border-box;
    border-radius: 10px;
    border: 1px solid white;
    margin-top: 20px;

    &:focus {
      outline: none;
      border: 4px solid white;
      transition: border 50ms;
    }
  }

  &__button {
    background: #debff4;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 20px;
    width: 100px;
    font-size: 15px;
    
    &:hover {
      background: #8b48d7;
    }
  }
}

</style>
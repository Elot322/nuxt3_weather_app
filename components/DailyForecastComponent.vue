<template>
  <div :class="$style['forecast-container']">
    <div
      v-for="(item, index) in list"
      :class="$style['forecast-container__card']"
      :key="index">
      <p
        :class="$style['forecast-container__text']">{{ item.day }}</p>
      <img :src="item.icon"/>
      <p
        :class="$style['forecast-container__text']">{{ item.maxTempDay + " / " + item.minTempNight + "°C" }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import type { ForecastView } from '~/adapters/types/weather';
import type { PropType } from 'vue';

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DailyForecastComponent',
  props: {
    list: {
      type: Array as PropType<ForecastView[]>
    }
  }
})
</script>

<style lang="scss" module>
.forecast-container {
  margin-top: 5px;
  display: flex;
  padding: 5px;
  flex-direction: row;
  justify-content: space-between;

  &__card {
    background-color: #8b48d7;
    border-radius: 5px;
    padding: 5px;
  }

  &__text {
    color: white
  }
}
</style>
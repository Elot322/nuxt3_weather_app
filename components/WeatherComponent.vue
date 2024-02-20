<template>
  <div 
    :class="$style['weather-card']">
    <img
      :class="$style['weather-card__image']"
      :src="cityWeather.icon" 
      alt="Weather card image"/>
    <p
      :class="$style['weather-card__text']">{{'Status: ' + cityWeather.description }}</p>
    <p
      :class="$style['weather-card__text']">{{ 'Temp: ' + cityWeather.temp + "°C" }}</p>
    <p
      :class="$style['weather-card__text']">{{ 'Humidity: ' + cityWeather.humidity + "%" }}</p>
    <p
      :class="$style['weather-card__text']">{{ 'Wid speed: ' + cityWeather.windSpeed + "m/s" }}</p>
    <DailyForecastComponent
      :list="cityWeather.dailyForecast"/>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import type { WeatherView } from '~/adapters/types/weather.d'

import { defineComponent } from 'vue'

import DailyForecastComponent from './DailyForecastComponent.vue'

export default defineComponent({
  name: "WeatherComponent",
  components: {
    DailyForecastComponent
  },
  props: {
    cityWeather: {
      type: Object as PropType<WeatherView>,
      required: true
    }
  }
})
</script>

<style lang="scss" module>
.weather-card {
  text-align: center;

  &__image {
    width: 150px;
    height: 150px;
  }

  &__text {
    margin-top: 5px;
    font-size: 20px;
    color: white;
    text-decoration: solid;
  }
}
</style>
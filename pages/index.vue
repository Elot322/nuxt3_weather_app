<template>
  <div :class="$style['weather-container']">
    <h2 :class="$style['weather-container__title']">Nuxt 3 Weather App</h2>
      <div
      :class="$style['weather-container__content']">
      <SearchComponent
        @update="updateData"/>
      <WeatherComponent
        v-if="weatherData"
        :city-weather="weatherData"/>
      </div>
  </div>
</template>

<script lang="ts">
import type { WeatherResponse, ForecastResponse } from '~/services/types/weather'
import type { WeatherView } from '~/adapters/types/weather'

import { defineComponent, ref } from 'vue'
import { weatherResponseToWeatherCard } from '~/adapters/weather-response-to-weather-card'

import SearchComponent from '~/components/SearchComponent.vue'
import WeatherComponent from '~/components/WeatherComponent.vue'

export default defineComponent({
  name: "HomePage",
  components: {
    SearchComponent,
    WeatherComponent
  },
  setup() {
    const weatherData = ref<WeatherView | null>(null)

    function updateData(data: {forecast: ForecastResponse, weather: WeatherResponse}) {
      weatherData.value = weatherResponseToWeatherCard(data.forecast, data.weather)
    }

    return {
      weatherData,
      updateData
    }
  }
})
</script>

<style lang="scss" module>
.weather-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__title {
    color: white;
    font-size: 20px;
    margin-bottom: 10px
  }

  &__content {
    background: rgba(255, 255, 255, 0.3);
    max-width: 400px;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    text-align: center;
  }
}
</style>
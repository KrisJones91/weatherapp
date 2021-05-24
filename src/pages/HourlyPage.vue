<template>
<div class="hourlypage">
  <h1>Hourly Page</h1>

</div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { useRoute } from 'vue-router'
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { weatherService } from '../services/WeatherService'
export default {
name: 'HourlyPage',
setup(){
    const route = useRoute()
    const state = reactive({
        weather: computed(() => AppState.weather)
    })
    onMounted(async() => {
        await weatherService.getWeather(route.params.current)
    })
    return{
        state,
        route
    }
}
}
</script>

<style>

</style>
<template>
<div class="hourlypage container-fluid">
    <div class="row">
         <h1>Hourly Page</h1>
    </div>
    <div class="row">
        <div class="col">
            <div class="card">
                <p>{{state.weather.daily[0].temp}}</p>
            </div>
        </div>
    </div>

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
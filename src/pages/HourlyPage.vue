<template>
<div class="hourlypage container-fluid">
    <div class="row justify-content-center">
        <div class="col-8 text-right">
            <h1>Hourly Page</h1>
        </div>
        <div class="col-3 text-right">
            <h2 id="clock" class="mt-2">{{time().slice(0,5)}}</h2>
        </div>
        
    </div>
    <div class="row py-3">
        <div class="col-4">
            <div class="card card-1" v-if="state.weather.hourly[0]">
                <div class="card-header text-center">
                    <h4>Current Hour</h4>
                </div>
                <div class="card-body text-center">
                    <p class="mb-0">Temp: <b>{{state.weather.hourly[0].temp.toFixed()}}</b>&deg;F</p>
                    <p class="mb-0">Feels Like: <b>{{state.weather.hourly[0].feels_like.toFixed()}}</b>&deg;F</p>
                    <p class="mb-0">Humidity: <b>{{state.weather.hourly[0].humidity}}</b>%</p> 
                    <p class="mb-0">UV Index: <b>{{state.weather.hourly[0].uvi}}</b>%</p> 

                </div>
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
        weather: computed(() => AppState.weather),
        time: weather.hourly
    })
    onMounted(async() => {
        await weatherService.getWeather(route.params.current)
    })
    return{
        state,
        route,
      time() {
        let date = new Date()
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();
        if (h > 12) {
            // h = h - 12;
        }
        if (h == 0) {
            h = 12;
        }
        if (m < 10) {
            m = '0' + m;
        }
        if (s < 10) {
            s = '0' + s;
        }
        let time = h + ":" + m + ":" + s;
        return time
        }
        // loop(){
        //     let hours = state.weather.hourly
        //     for(let i = 0; i < hours; i++){
        //         let timing = hours[i]
        //         return timing
        //     }
        //     return hours
        // }


    }
}
}
</script>

<style>

</style>
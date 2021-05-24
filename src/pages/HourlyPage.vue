<template>
<div class="hourlypage container-fluid">
    <div class="row justify-content-center">
        <div class="col-8">
            <h1>Hourly Page</h1>
        </div>
        <div class="col-3">
            <h2 id="clock">{{time().slice(0,5)}}AM</h2>
        </div>
        
    </div>
    <div class="row">
        <div class="col">
            <div class="card" v-if="state.weather.hourly">
                <div class="card-top">
                    <h4></h4>
                </div>
                <p>{{state.weather.hourly[0].temp}}</p>
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
        route,
        
                    time() {
                        let date = new Date()
                        let h = date.getHours();
                        let m = date.getMinutes();
                        let s = date.getSeconds();

                        if (h > 12) {
                            h = h - 12;
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
    }
}
}
</script>

<style>

</style>
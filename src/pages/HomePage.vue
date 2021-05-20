<template>
  <div class="home container-fluid">
    <div class="row justify-content-center mt-4">
      <div class="col-6 header-text">
      <h1 class="mt-5 pl-5">Todays Weather Forecast:</h1>
      </div>
      <div class="col-6">
        <div class="card maincard">
          <div class="card-title mt-3 mb-0" v-if="state.weather.current">
            <h2 class="city m-0">{{state.weather.timezone.slice(8)}}</h2>
            <h1 class="m-0 text-white"><b>{{state.weather.current.temp.toFixed(0)}}</b>&deg;F</h1>
            <p class="mt-4 text-white date-main"> <em>{{Date().slice(4,15)}}</em></p>
          </div>
          <div class="card-body text-left" v-if="state.weather.current">
            <div class="row">
              <div class="col-7 pl-5">
                <p class="m-0">Feels Like: <b>{{state.weather.current.feels_like.toFixed(0)}}</b>&deg;F</p>
                <p class="m-0">Humidity: <b>{{state.weather.current.humidity}}</b>%</p>
                <p class="m-0">Clouds: <b>{{state.weather.current.clouds}}</b>%</p>
                <p class="m-0">Wind: <b>{{state.weather.current.wind_speed.toFixed(0)}}</b>mph</p>
              </div>
              <div class="col-5" v-if="state.weather.current.weather">          
                <div v-if="state.weather.current.weather[0].main == 'Clear'">
                    <i class="fas fa-sun fa-5x sun"></i>
                </div>
                <div v-if="state.weather.current.weather[0].main == 'Clouds'">
                    <i class="mr-5 fas fa-cloud fa-5x clouds"></i>
                </div>
                <div v-if="state.weather.current.weather[0].main == 'Rain'">
                    <i class="fas fa-cloud-sun-rain fa-5x rain"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center mt-5">
      <div class="col-2">
        <div class="card cardSmall" v-if="state.weather.daily">
          <p class="mb-0"><b>{{Date().slice(0,3)}}</b></p>
          <p>{{Date().slice(4,11)}}</p>
                <div v-if="state.weather.current.weather[0].main == 'Clear'">
                    <i class="fas fa-sun fa-2x sun"></i>
                </div>
                <div class="" v-if="state.weather.current.weather[0].main == 'Clouds'">
                    <i class="fas fa-cloud fa-2x clouds"></i>
                </div>
                <div v-if="state.weather.current.weather[0].main == 'Rain'">
                    <i class="fas fa-cloud-sun-rain fa-2x rain"></i>
                </div>
          <p class="text-left ml-2 mb-0"><small class="high">High: </small><small> <b>{{state.weather.daily[0].temp.max.toFixed()}}</b>&deg;F</small></p>
          <p class="text-left ml-2"><small class="low">Low: </small><small> <b>{{state.weather.daily[0].temp.min.toFixed()}}</b>&deg;F</small></p>
        </div>
      </div>
      <div class="col-2">
        <div class="card cardSmall" v-if="state.weather.daily">
          <p class="mb-0"><b>{{dayTwo().slice(0,3)}}</b></p>
          <p>{{dayTwo().slice(3,10)}}</p>
                          <div v-if="state.weather.daily[2].weather[0].main == 'Clear'">
                    <i class="fas fa-sun fa-2x sun"></i>
                </div>
                <div class="" v-if="state.weather.daily[2].weather[0].main == 'Clouds'">
                    <i class="fas fa-cloud fa-2x clouds"></i>
                </div>
                <div v-if="state.weather.daily[2].weather[0].main == 'Rain'">
                    <i class="fas fa-cloud-sun-rain fa-2x rain"></i>
                </div>
          <p class="text-left ml-2 mb-0"><small class="high">High: </small><small>  <b>{{state.weather.daily[1].temp.max.toFixed()}}</b>&deg;F</small></p>
          <p class="text-left ml-2"><small class="low">Low: </small><small> <b>{{state.weather.daily[1].temp.min.toFixed()}}</b>&deg;F</small></p>
        </div>
      </div>
      <div class="col-2">
        <div class="card cardSmall" v-if="state.weather.daily">
          <p class="mb-0"><b>{{dayThree().slice(0,3)}}</b></p>
          <p>{{dayThree().slice(3,10)}}</p>
                          <div v-if="state.weather.daily[3].weather[0].main == 'Clear'">
                    <i class="fas fa-sun fa-2x sun"></i>
                </div>
                <div class="" v-if="state.weather.daily[3].weather[0].main == 'Clouds'">
                    <i class="fas fa-cloud fa-2x clouds"></i>
                </div>
                <div v-if="state.weather.daily[3].weather[0].main == 'Rain'">
                    <i class="fas fa-cloud-sun-rain fa-2x rain"></i>
                </div>
          <p class="text-left ml-2 mb-0"><small class="high">High: </small><small>  <b>{{state.weather.daily[2].temp.max.toFixed()}}</b>&deg;F</small></p>
          <p class="text-left ml-2"><small class="low">Low: </small><small> <b>{{state.weather.daily[2].temp.min.toFixed()}}</b>&deg;F</small></p>
        </div>
      </div>
      <div class="col-2">
        <div class="card cardSmall" v-if="state.weather.daily">
          <p class="mb-0"><b>{{dayFour().slice(0,3)}}</b></p>
          <p>{{dayFour().slice(3,10)}}</p>
                          <div v-if="state.weather.daily[4].weather[0].main == 'Clear'">
                    <i class="fas fa-sun fa-2x sun"></i>
                </div>
                <div class="" v-if="state.weather.daily[4].weather[0].main == 'Clouds'">
                    <i class="fas fa-cloud fa-2x clouds"></i>
                </div>
                <div v-if="state.weather.daily[4].weather[0].main == 'Rain'">
                    <i class="fas fa-cloud-sun-rain fa-2x rain"></i>
                </div>
          <p class="text-left ml-2 mb-0"><small class="high">High: </small><small> <b>{{state.weather.daily[3].temp.max.toFixed()}}</b>&deg;F</small></p>
          <p class="text-left ml-2"><small class="low">Low: </small><small> <b>{{state.weather.daily[3].temp.min.toFixed()}}</b>&deg;F</small></p>
        </div>
      </div>
      <div class="col-2">
        <div class="card cardSmall" v-if="state.weather.daily">
          <p class="mb-0"><b>{{dayFive().slice(0,3)}}</b></p>
          <p>{{dayFive().slice(3,10)}}</p>
                          <div v-if="state.weather.daily[5].weather[0].main == 'Clear'">
                    <i class="fas fa-sun fa-2x sun"></i>
                </div>
                <div class="" v-if="state.weather.daily[5].weather[0].main == 'Clouds'">
                    <i class="fas fa-cloud fa-2x clouds"></i>
                </div>
                <div v-if="state.weather.daily[5].weather[0].main == 'Rain'">
                    <i class="fas fa-cloud-sun-rain fa-2x rain"></i>
                </div>
          <p class="text-left ml-2 mb-0"><small class="high">High: </small><small> <b>{{state.weather.daily[4].temp.max.toFixed()}}</b>&deg;F</small></p>
          <p class="text-left ml-2"><small class="low">Low: </small><small> <b>{{state.weather.daily[4].temp.min.toFixed()}}</b>&deg;F</small></p>
        </div>
      </div>
      <div class="col-2">
        <div class="card cardSmall" v-if="state.weather.daily">
          <p class="mb-0"><b>{{daySix().slice(0,3)}}</b></p>
          <p>{{daySix().slice(3,10)}}</p>
                          <div v-if="state.weather.daily[6].weather[0].main == 'Clear'">
                    <i class="fas fa-sun fa-2x sun"></i>
                </div>
                <div class="" v-if="state.weather.daily[6].weather[0].main == 'Clouds'">
                    <i class="fas fa-cloud fa-2x clouds"></i>
                </div>
                <div v-if="state.weather.daily[6].weather[0].main == 'Rain'">
                    <i class="fas fa-cloud-sun-rain fa-2x rain"></i>
                </div>
          <p class="text-left ml-2 mb-0"><small class="high">High: </small><small> <b>{{state.weather.daily[5].temp.max.toFixed()}}</b>&deg;F</small></p>
          <p class="text-left ml-2"><small class="low">Low: </small><small> <b>{{state.weather.daily[5].temp.min.toFixed()}}</b>&deg;F</small></p>
        </div>
      </div>
    </div>
  </div>
  <!-- {{state.weather.daily[1].weather}} -->
</template>

<script>
import { reactive} from '@vue/reactivity'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
import { computed, onMounted } from '@vue/runtime-core'
import { weatherService } from '../services/WeatherService'
export default {
  name: 'Home',
  setup(){
    const route = useRoute()
    const state = reactive({
      weather: computed(() => AppState.weather),
    })
    onMounted(async() => {
      await weatherService.getWeather(route.params.current)
    })
    return {
      state,
      route,
      dayOne(){
        let day = new Date()
        day.getDate()
        // console.log(nextDay)
        return day.toString('').slice(0,11)
      },
      dayTwo(){
        let day = new Date()
        let nextDay = new Date(day)
        nextDay.setDate(day.getDate() + 1)
        // console.log(nextDay)
        return nextDay.toString('').slice(0,11)
 
      },
        dayThree(){
        let day = new Date()
        let nextDay = new Date(day)
        nextDay.setDate(day.getDate() + 2)
        // console.log(nextDay)
        return nextDay.toString('').slice(0,11)
 
      },
       dayFour(){
        let day = new Date()
        let nextDay = new Date(day)
        nextDay.setDate(day.getDate() + 3)
        // console.log(nextDay)
        return nextDay.toString('').slice(0,11)
      },
      dayFive(){
        let day = new Date()
        let nextDay = new Date(day)
        nextDay.setDate(day.getDate() + 4)
        // console.log(nextDay)
        return nextDay.toString('').slice(0,11)
 
      },
       daySix(){
        let day = new Date()
        let nextDay = new Date(day)
        nextDay.setDate(day.getDate() + 5)
        // console.log(nextDay)
        return nextDay.toString('').slice(0,11)
 
      }
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  background-image: url("https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
// .date-main{
  
// }
.header-text{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: white;
}
.city{
  color: rgb(240, 237, 105);
}
.maincard{
  border: 3px outset rgb(253, 253, 253);
  box-shadow: 2px 6px 15px rgb(83, 83, 83);
  background: rgba(50, 190, 233, 0.45);
  border-radius: 40px;
}
.rain{
  color: rgb(15, 76, 241);
  text-shadow: 1px 3px 10px rgb(8, 63, 131);
}
.sun {
  color: rgb(241, 241, 36);
  text-shadow: 1px 3px 10px rgb(114, 74, 1);
}
.clouds{
  color: rgb(255, 255, 255);
  text-shadow: 1px 3px 10px rgb(131, 131, 131);
}
.cardSmall{
  border: 3px outset rgb(249, 252, 106);
  box-shadow: 1px 4px 10px rgb(78, 99, 131);
  background: rgba(255, 255, 255, 0.33);
  border-radius: 5px;
}
.high{
  color: red;
}
.low {
  color: blue;
}
</style>

<template>
<div class="hourlypage">
  <h1>Hourly Page</h1>

</div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { useRoute } from 'vue-router'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
name: 'HourlyPage',
setup(){
    const route = useRoute()
    const state = reactive({
        weather: computed(() => AppState.weather)
    })
}
}
</script>

<style>

</style>
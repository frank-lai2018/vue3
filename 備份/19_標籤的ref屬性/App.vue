<template>
  <div class="app">
    <h1>你好啊！</h1>
    <Person />
    <button @click="showLog">測試</button>
    <Person ref="ren" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'App'
}
</script>
<script lang="ts" setup>
import Person from './components/Person.vue'

import { ref } from 'vue'

let ren = ref()

function showLog() {
  // console.log(title2.value)
  console.log(ren.value)
}
</script>

<style>
.app {
  background-color: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>

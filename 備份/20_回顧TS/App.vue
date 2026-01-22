<template>
  <div class="app">
    <Person />
  </div>
</template>

<script lang="ts">
export default {
  name: 'App'
}
</script>
<script lang="ts" setup>
import Person from './components/Person.vue'
</script>

<style>
.app {
  background-color: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>

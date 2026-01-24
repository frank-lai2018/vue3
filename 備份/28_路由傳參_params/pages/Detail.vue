<template>
  <ul class="news-list">
    <li>編號：{{ params.id }}</li>
    <li>標題：{{ params.title }}</li>
    <li>內容：{{ params.content }}</li>
  </ul>
</template>

<script setup lang="ts" name="Detail">
import {toRefs} from 'vue';
import { useRoute } from 'vue-router';

let route = useRoute()
console.log('route=',route);
let {params} = toRefs(route);

</script>

<style scoped>
  .news-list {
    list-style: none;
    padding-left: 20px;
  }

  .news-list>li {
    line-height: 30px;
  }
</style>
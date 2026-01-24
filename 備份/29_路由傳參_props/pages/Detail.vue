<template>
  <ul class="news-list">
    <!-- <li>編號：{{ a }}</li>
    <li>標題：{{ b }}</li>
    <li>內容：{{ c }}</li> -->
    <li>編號：{{ id }}</li>
    <li>標題：{{ title }}</li>
    <li>內容：{{ content }}</li>
  </ul>
</template>

<script setup lang="ts" name="Detail">
//  defineProps(['id', 'title', 'content']);
//  defineProps(['a', 'b', 'c']);

defineProps<{
  id: string;
  title: string;
  content: string;
}>();

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
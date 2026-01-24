<template>
  <div class="news">
    <ul>
      <li v-for="item in news" :key="item.id">
        <!--第一種寫法-->
        <!-- <RouterLink :to="'/news/detail?id=' + item.id+'&title='+item.title+'&content='+item.content">{{ item.title }}</RouterLink> -->
        <RouterLink 
          :to="{
            path:'/news/detail',
            query:{
              id:item.id,
              title:item.title,
              content:item.content
              }
          }"
            >
            {{ item.title }}
          </RouterLink>
      </li>
    </ul>
        <!-- 展示區 -->
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts" name="News">
import { ref } from 'vue';
import {  RouterView,RouterLink } from 'vue-router';



let news = ref([
  { id: 'NEWS001', title: 'NEWS001 title',content:'這是NEWS001的內容' },
  { id: 'NEWS002', title: 'NEWS002 title',content:'這是NEWS002的內容' },
  { id: 'NEWS003', title: 'NEWS003 title',content:'這是NEWS003的內容' },
  { id: 'NEWS004', title: 'NEWS004 title',content:'這是NEWS004的內容' },
]);

</script>

<style scoped>
/* NEWS */
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.news ul {
  margin-top: 30px;
  list-style: none;
  padding-left: 10px;
}

.news li>a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64967E;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}

.news-content {
  width: 70%;
  height: 90%;
  border: 1px solid;
  margin-top: 20px;
  border-radius: 10px;
}
</style>
<template>
  <div class="talk">
    <button @click="getLoveTalk">取得一句土味情話</button>
    <ul>
      <li v-for="talk in talkStore.talkList" :key="talk.id">{{ talk.title }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="LoveTalk">
import { reactive } from 'vue'
import axios from "axios";
import { nanoid } from 'nanoid'
import { useTalkStore } from '@/store/loveTalk'

const talkStore = useTalkStore()

// 方法
async function getLoveTalk() {
  // 發請求，下面這行的寫法是：連續解構賦值+重命名
  // let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
  // 把請求回來的字串，包裝成一個對象
  // let obj = {id:nanoid(),title}
  // 放到陣列中
  // talkList.unshift(obj)
}
</script>

<style scoped>
.talk {
  background-color: orange;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
</style>
<template>
  <div class="talk">
    <button @click="getLoveTalk">取得一句土味情話</button>
    <ul>
      <li v-for="talk in talkStore.talkList" :key="talk.id">{{ talk.title }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="LoveTalk">
import { useTalkStore } from '@/store/loveTalk'
import { storeToRefs } from "pinia";

const talkStore = useTalkStore()
const { talkList } = storeToRefs(talkStore)

// 監聽talkStore裡面的資料變化
talkStore.$subscribe((mutate, state) => {
 console.log('talkStore裡面保存的資料發生了變化', mutate, state)
 //存入瀏覽器本地
 localStorage.setItem('talkList', JSON.stringify(state.talkList))
})

// 方法
function getLoveTalk() {
  talkStore.getATalk()

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
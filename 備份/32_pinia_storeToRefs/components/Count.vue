<template>
  <div class="count">
    <h2>目前求和為：{{ sum }}</h2>
    <h3>歡迎來到:{{ school }}，坐落於：{{ address }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">減</button>
  </div>
</template>

<script setup lang="ts" name="Count">
import { ref, reactive, toRefs } from "vue";
import { storeToRefs } from 'pinia'
// 引入useCountStore
import { useCountStore } from '@/store/Count'
// 使用useCountStore，得到一個專門保存count相關的store
const countStore = useCountStore()
// storeToRefs只會關注sotre中數據，不會對方法進行ref包裹
// toRefs會把傳入對象的所有屬性，方法都進行ref包裹
const { sum, school, address } = storeToRefs(countStore)
console.log('!!!!!storeToRefs',storeToRefs(countStore))
console.log('!!!!!toRefs',toRefs(countStore))

// 資料
let n = ref(1) // 使用者選擇的數字
// 方法
function add() {
  countStore.add(n.value)
}
function minus() {
  countStore.sum -= n.value
}
</script>

<style scoped>
.count {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}

select,
button {
  margin: 0 5px;
  height: 25px;
}
</style>
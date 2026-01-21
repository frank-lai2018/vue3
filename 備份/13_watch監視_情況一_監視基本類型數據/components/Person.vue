<template>
  <div class="person">
    <h1>情況一：監視【ref】定義的【基本型別】資料</h1>
    <h2>目前求和為：{{ sum }}</h2>
    <button @click="changeSum">點我sum+1</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref, watch } from 'vue'
// 資料
let sum = ref(0)
// 方法
function changeSum() {
  sum.value += 1
}
//監視-情況一：監視【ref】定義的【基本類型】數據
//此處sum不需要寫.value
//watch(要監視的數據, 回調函式(newValue, oldValue){})
// watch的第一個參數可以是ref、reactive物件或getter函式
// watch的回調函式中，newValue和oldValue是基本類型數據，不需要寫.value
// watch會回傳一個函式，執行該函式可以停止監視
// 不停止監視就會一直監視下去
const stopWatch = watch(sum, (newValue, oldValue) => {
  console.log('sum改變了', newValue, oldValue)
  if (newValue >= 10) {
    stopWatch()
  }
})
</script>

<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

button {
  margin: 0 5px;
}

li {
  font-size: 20px;
}
</style>
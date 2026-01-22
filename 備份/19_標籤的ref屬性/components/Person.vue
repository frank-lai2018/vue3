<template>
  <div class="person">
    <h1>台灣</h1>
    <h2 ref="title2">台北</h2>
    <h3>拉拉拉</h3>
    <button @click="showLog">點我輸出h2這個元素</button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Person'
}
</script>
<script lang="ts" setup>
import { ref } from 'vue'

// 建立一個title2，用於儲存ref標記的內容
let title2 = ref()
let a = ref(0)
let b = ref(1)
let c = ref(2)

function showLog() {
  console.log(title2.value)
}
//defineExpose 是 Vue 3 的編譯器宏（Compiler Macro），它不需要從 Vue 導入。
/*
當你使用 <script setup> 語法糖時，Vue 的編譯器會在編譯階段自動處理這些特殊的函數。編譯器宏包括：

defineProps
defineEmits
defineExpose
withDefaults
這些函數會在編譯時被 Vue 的編譯器轉換成相應的代碼，它們不是運行時的函數，所以不需要從任何地方導入。
*/
//編譯器會將這段代碼轉換為標準的 setup 函數形式，讓父組件能夠通過 ref 訪問這些暴露的屬性。
//
// 如果你嘗試 import { defineExpose } from 'vue'，會得到以下錯誤，因為 Vue 的運行時 API 中並不存在這個函數。它只在編譯時存在。

// [@vue / compiler - sfc] `defineExpose` is a compiler macro and no longer needs to be imported. 
//這是 Vue 3 提供的語法糖特性，讓代碼更簡潔，編譯器會幫你處理底層的邏輯
defineExpose({ a, b, c })
</script>

/*scoped樣式只會作用在此元件內*/
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
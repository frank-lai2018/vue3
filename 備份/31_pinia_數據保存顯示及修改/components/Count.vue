<template>
  <div class="count">
    <h2>目前求和為：{{ countStore.sum }}</h2>
    <h3>歡迎來到:{{ countStore.school }}，坐落於：{{ countStore.address }}</h3>
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
import { ref } from "vue";

// 使用useCountStore，得到一個專門保存count相關的store
import { useCountStore } from "@/store/Count";

let n = ref(0)




let countStore=useCountStore() // 引入計數器狀態庫

// 方法
function add() {
 // 第一種修改方式，以下代碼會執行3次
 // countStore.sum += 1
 // countStore.school = '拉拉熊大學'
 // countStore.address = '台北'

 // 第二種修改方式，批次修改，只會執行一次
 countStore.$patch({
    sum:888,
    school:'拉拉熊大學',
    address:'台北'
 }) 

 // 第三種修改方式，定用action來修改，此種方式可以達到程式復用
// countStore.add(n.value)
}
function minus() {
  countStore.minus(n.value)
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
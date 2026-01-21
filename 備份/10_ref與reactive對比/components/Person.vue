<template>
  <div class="person">
    <h2>汽車資訊：一輛{{ car.brand }}車，價值{{ car.price }}萬</h2>
    <button @click="changeBrand">修改汽車的品牌</button>
    <button @click="changePrice">修改汽車的價格</button>
    <button @click="changeCar">修改汽車</button>
    <hr>
    <h2>目前求和為：{{ sum }}</h2>
    <button @click="changeSum">點我sum+1</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref, reactive } from 'vue'

// 資料
let car = reactive({ brand: '賓士', price: 100 })
let sum = ref(0)

// 方法
function changeBrand() {
  car.brand = 'BMW'
}
function changePrice() {
  car.price += 10
}
function changeCar() {
  // car = {brand:'奧拓',price:1} //這麼寫頁面不更新的
  // car = reactive({brand:'奧拓',price:1}) //這麼寫頁面不更新的

  // 下面這個寫法頁面可以更新(覆蓋追加到原物件裡面)
  Object.assign(car, { brand: '奧拓', price: 1 })
}
function changeSum() {
  // sum = ref(9) //這麼寫頁面不更新的
  sum.value += 1
}

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
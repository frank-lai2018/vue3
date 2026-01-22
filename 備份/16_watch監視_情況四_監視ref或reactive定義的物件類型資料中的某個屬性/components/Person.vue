<template>
  <div class="person">
    <h1>情況四：監視【ref】或【reactive】定義的【物件類型】資料中的某個屬性</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年齡：{{ person.age }}</h2>
    <h2>汽車：{{ person.car.c1 }}、{{ person.car.c2 }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年齡</button>
    <button @click="changeC1">修改第一台車</button>
    <button @click="changeC2">修改第二台車</button>
    <button @click="changeCar">修改整個車</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { reactive, watch } from 'vue'

// 資料
let person = reactive({
  name: '張三',
  age: 18,
  car: {
    c1: '賓士',
    c2: 'BMW'
  }
})
// 方法
function changeName() {
  person.name += '~'
}
function changeAge() {
  person.age += 1
}
function changeC1() {
  person.car.c1 = '奧迪'
}
function changeC2() {
  person.car.c2 = '大眾'
}
function changeCar() {
  person.car = { c1: '雅迪', c2: '愛瑪' }
}

// 監視-情況四：監視響應式物件中的某個屬性，且該屬性是【基本類型】的，要寫成函數式
/* watch(()=> person.name,(newValue,oldValue)=>{
 console.log('person.name改變了',newValue,oldValue)
}) */

// 監視-情況四：監視響應式物件中的某個屬性，且該屬性是【物件類型】的，可以直接寫，也能寫函數，更推薦寫函數
//直接寫入：可以監視到c1，c2的變化，但監視不到整體的變化。整體改變時，物件位址值變化了，所以監視不到了。
// watch(person.car, (newValue, oldValue) => {
// console.log('person.car變了', newValue, oldValue)
// }, { deep: true })

//寫入函數（不開啟深度監視）：
//監視不到c1，c2的變化，但是可以監視到整體的變化，函數回傳值監視的是對象的位址值，因此改變成一個新對象，新舊值也能維護的很好。
// watch(() => person.car, (newValue, oldValue) => {
// console.log('person.car變了', newValue, oldValue)
// })
//寫入函數（開啟深度監視）：
watch(() => person.car, (newValue, oldValue) => {
  console.log('person.car變了', newValue, oldValue)
}, { deep: true })

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
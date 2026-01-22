<template>
  <div class="person">
    <h1>情況五：監視上述的多個資料</h1>
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

// 監視，情況五：監視上述的多個數據
watch([() => person.name, person.car], (newValue, oldValue) => {
  console.log('person.car改變了', newValue, oldValue)
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
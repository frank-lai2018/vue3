<template>
  <div class="person">
    <h2>姓名：{{ person.name }}</h2>
    <h2>年齡：{{ person.age }}，{{ nl }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年齡</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { reactive, toRefs, toRef } from 'vue'

// 資料
let person = reactive({
  name: '張三',
  age: 18
})

// 使用toRefs從person這個響應式物件中，解構出name、age，且name和age依然是響應式的
// name和age的值是ref類型，其value值指向的是person.name和person.age
let { name, age } = toRefs(person)
let nl = toRef(person, 'age')

console.log(nl.value)

// 方法
function changeName() {
  name.value += '~'
  console.log(name.value, person.name)
}
function changeAge() {
  age.value += 1
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
<template>
  <div class="person">
    <h1>情況三：監視【reactive】定義的【物件類型】資料</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年齡：{{ person.age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年齡</button>
    <button @click="changePerson">修改整個人</button>
    <hr>
    <h2>測試：{{ obj.a.b.c }}</h2>
    <button @click="test">修改obj.a.b.c</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { reactive, watch } from 'vue'
// 資料
let person = reactive({
  name: '張三',
  age: 18
})
let obj = reactive({
  a: {
    b: {
      c: 666
    }
  }
})
// 方法
function changeName() {
  person.name += '~'
}
function changeAge() {
  person.age += 1
}
function changePerson() {
  // person = { name: '李四', age: 80 }//直接修改，不行
  // person = reactive({ name: '李四', age: 80 })//包裹修改，也不行
  Object.assign(person, { name: '李四', age: 80 })
}
function test() {
  obj.a.b.c = 888
}

// 監視-狀況三：監視【reactive】定義的【物件類型】數據，且預設是開啟深度監視的
// 監視reactive物件數據，深度監視是關不掉的
watch(person, (newValue, oldValue) => {
  console.log('person變了', newValue, oldValue)
})
watch(obj, (newValue, oldValue) => {
  console.log('Obj改變了', newValue, oldValue)
})

// 使用 getter 函數（箭頭函數）
watch(() => person.name, (newValue, oldValue) => {
  console.log('person的name變了', newValue, oldValue)
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
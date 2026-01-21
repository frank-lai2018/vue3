<template>
  <div class="person">
    <h1>情況二：監視【ref】定義的【物件類型】資料</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年齡：{{ person.age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年齡</button>
    <button @click="changePerson">修改整個人</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref, watch } from 'vue'
// 資料
let person = ref({
  name: '張三',
  age: 18
})
// 方法
function changeName() {
  person.value.name += '~'
}
function changeAge() {
  person.value.age += 1
}
function changePerson() {
  person.value = { name: '李四', age: 90 }
}
/*
 監視-情況二：監視【ref】定義的【物件類型】數據，監視的是物件的位址值，若想監視物件內部屬性的變化，需要手動開啟深度監視 deep: true
 watch的第一個參數是：被監視的數據
 watch的第二個參數是：監視的回調
 watch的第三個參數是：設定物件（deep、immediate等等.....）
 watch 默認是懶執行的：僅當數據源變化時，才會執行回調。但在某些場景中，我們希望在創建偵聽器時，立即執行一遍回調。舉例來說，我們想請求一些初始數據，然後在相關狀態更改時重新請求數據。這時候就可以使用 immediate 選項。設定 immediate: true 後，回調會在偵聽器創建後立即執行一次。
  參考文件：https://vuejs.org/guide/essentials/watchers.html#immediate-and-deep-watchers
*/
watch(person, (newValue, oldValue) => {
  console.log('person變了', newValue, oldValue)
}, { deep: true })

// 錯誤寫法：監視物件內部屬性變化
// 問題是 watch 的第一個參數不能直接是一個值（person.value.name），必須是一個響應式引用或 getter 函數。
// watch(person.value.name, (newValue, oldValue) => {
//   console.log('person變了', newValue, oldValue)
// })
//person.value.name 直接訪問會得到一個普通的字串值（'張三'），不是響應式的
// () => person.value.name 是一個函數，每次 watch 檢查時會重新執行，獲取最新的值


// 使用 getter 函數（箭頭函數）
watch(() => person.value.name, (newValue, oldValue) => {
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
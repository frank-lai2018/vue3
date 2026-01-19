<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年齡：{{ age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年齡</button>
    <button @click="showTel">查看聯絡方式</button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Person',
  beforeCreate() {
    console.log('beforeCreate')
  },
  setup() {
    console.log(this) //setup中的this是undefined，Vue3在弱化this了
    // 數據，原來是寫在data中的，此時的name、age、tel都不是響應式的數據
    let name = '張三'
    let age = 18
    let tel = '13888888888'

    // 方法
    function changeName() {
      name = 'zhang-san' //注意：這樣修改name，頁面是沒有變化的
      console.log(name) //name確實改了，但name不是響應式的
    }
    function changeAge() {
      age += 1 //注意：這樣修改age，頁面是沒有變化的
      console.log(age) //age確實改了，但age不是響應式的
    }
    function showTel() {
      alert(tel)
    }

    // 將資料、方法交出去，模板才可以使用
    return { name, age, tel, changeName, changeAge, showTel }
  }
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
</style>
<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年齡：{{ age }}</h2>
    <h2>位址：{{ address }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年齡</button>
    <button @click="showTel">查看聯絡方式</button>
  </div>
</template>

<!-- 存在兩個script也是可以的，一個setup，一個配置name -->
<!-- <script lang="ts">
export default {
 name: 'Person'
}
</script> -->

<!-- 如果想在setup裡面同時命名元件名稱，需要下載外掛程式 -->
<script lang="ts" setup name="Person">
let name = '張三'
let age = 18
let tel = '13888888888'
let address = '6666666666666666'

// 方法
function changeName() {
  name = 'zhang-san'
  console.log(name)
}
function changeAge() {
  age += 1
  console.log(age)
}
function showTel() {
  alert(tel)
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
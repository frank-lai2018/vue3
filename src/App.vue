<template>
  <!-- 務必看懂下面這一行程式碼 -->
  <!-- <h2 a="1+1" :b="1+1" c="x" :d="x" ref="qwe">測試</h2> -->

  <Person :list="personList" />
  <br>
  <br>
  <br>
  <TestDeFineProps a="測試" />
</template>

<script lang="ts">
export default {
  name: 'App'
}
</script>

<script lang="ts" setup>
import TestDeFineProps from './components/TestDeFineProps.vue'
import Person from './components/Person.vue'
import { reactive } from 'vue'
import { type Persons } from './types'

let x = 9

let personList = reactive<Persons>([
  { id: 'asudfysafd01', name: '張三', age: 18 },
  { id: 'asudfysafd02', name: '李四', age: 20 },
  { id: 'asudfysaf)d03', name: '王五', age: 22 }
])

</script>
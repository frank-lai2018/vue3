<template>
  <div class="person">
    <h2>{{ list }}</h2>
    <ul>
      <li v-for="p in list" :key="p.id">
        {{ p.name }} -- {{ p.age }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Person'
}
</script>

<script lang="ts" setup>
import { type Persons } from '../types'

// 只接收list
// let list_data = defineProps(['list'])
// console.log('personList', list_data.list)
// 接收list + 限制類型
// defineProps<{list:Persons}>()


// 接收list，同時將props儲存起來
let list_data = defineProps(['list'])
console.log('personList', list_data.list)

// 接收list + 限制類型 + 限制必要性 + 指定預設值
// withDefaults(defineProps<{ list?: Persons }>(), {
//   list: () => [{ id: 'ausydgyu01', name: '康師傅·王麻子·特崙蘇', age: 19 }]
// })

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
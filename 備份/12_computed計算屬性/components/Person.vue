<template>
  <div class="person">
    姓：<input type="text" v-model="firstName"> <br>
    名：<input type="text" v-model="lastName"> <br>
    <button @click="changeFullName">將全名改為li-si</button> <br>
    全名：<span>{{ fullName }}</span> <br>
    全名：<span>{{ fullName }}</span> <br>
    全名：<span>{{ fullName }}</span> <br>
    全名：<span>{{ fullName }}</span> <br>
    全名：<span>{{ fullName }}</span> <br>
    全名：<span>{{ fullName }}</span> <br>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref, computed } from 'vue'

let firstName = ref('zhang')
let lastName = ref('san')

// fullName是一個計算屬性，且是唯讀的
/* let fullName = computed(()=>{
 console.log(1)
 return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
}) */

// fullName是一個計算屬性，可讀可寫
let fullName = computed({
  // 當fullName被讀取時，get調用
  get() {
    return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
  },
  // 當fullName被修改時，set調用，且會收到修改的值
  set(val) {
    const [str1, str2] = val.split('-')
    firstName.value = str1!
    lastName.value = str2!
  }
})

function changeFullName() {
  fullName.value = 'li-si'
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
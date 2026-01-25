<template>
  <div class="father">
    <h3>父元件</h3>
    <h4>銀子：{{ money }}萬元</h4>
    <h4>車子：一輛{{ car.brand }}車，價值{{ car.price }}萬元</h4>
    <Child />
  </div>
</template>

<script setup lang="ts" name="Father">
import Child from './Child.vue'
import { ref, reactive, provide } from 'vue'

let money = ref(100)
let car = reactive({
  brand: '賓士',
  price: 100
})
function updateMoney(value: number) {
  money.value -= value
}

// 向後代提供數據
//provide(數據名， 數據值)
provide('moneyContext', { money, updateMoney })
provide('car', car)

</script>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}
</style>
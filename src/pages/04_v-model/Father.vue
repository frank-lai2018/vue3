<template>
  <div class="father">
    <h3>父组件</h3>
    <h4>{{ username }}</h4>
    <h4>{{ password }}</h4>
    <!-- v-model用在html標籤上 -->
    <!-- <input type="text" v-model="username"> -->
    <!--上面這行底層會變成下面的標籤，v-model本質就是動態的value值+input事件-->
    <!-- <input type="text" :value="username" @input="username = (<HTMLInputElement>$event.target).value"> -->

    <!-- v-model用在組件標籤上 -->
    <!-- <AtguiguInput v-model="username"/> -->
    <!-- 上面這行底層會變成下面的標籤，v-model本質就是動態的value值+input事件 -->
    <!-- :modelValue="username"實現的數據傳入，AtguiguInput組件使用defineProps接收後可以顯示在自己的input上，當AtguiguInput的input修改後，使用@update:modelValue="username = $event"實現的數據返回 -->

    <AtguiguInput 
      :modelValue="username" 
      @update:modelValue="username = $event"
    />

    <!-- 修改modelValue -->
    <!-- <AtguiguInput v-model:ming="username" v-model:mima="password"/> -->
  </div>
</template>

<script setup lang="ts" name="Father">
	import { ref } from "vue";
  import AtguiguInput from './AtguiguInput.vue'
  // 數據
  let username = ref('zhansgan')
  let password = ref('123456')
</script>

<style scoped>
.father {
  padding: 20px;
  background-color: rgb(165, 164, 164);
  border-radius: 10px;
}
</style>

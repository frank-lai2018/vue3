<template>
	<div class="father">
		<h3>父元件</h3>
		<h4>房產：{{ house }}</h4>
		<button @click="changeToy">修改Child1的玩具</button>
		<button @click="changeComputer">修改Child2的電腦</button>
		<button @click="getAllChild($refs)">讓所有孩子的書變多</button>
		<Child1 ref="c1" />
		<Child2 ref="c2" />
	</div>
</template>

<script setup lang="ts" name="Father">
import Child1 from './Child1.vue'
import Child2 from './Child2.vue'
import { ref, reactive } from "vue";
let c1 = ref()
let c2 = ref()

// 注意點：當存取obj.c的時候，底層會自動讀取value屬性，因為c是在obj這個響應式物件中的
/* let obj = reactive({
a:1,
b:2,
c:ref(3)
})
let x = ref(4)

console.log(obj.a)
console.log(obj.b)
console.log(obj.c)
console.log(x) */


// 資料
let house = ref(4)
// 方法
function changeToy() {
	c1.value.toy = '小豬佩奇'
}
function changeComputer() {
	c2.value.computer = '華為'
}
function getAllChild(refs: { [key: string]: any }) {
	console.log(refs)
	for (let key in refs) {
		refs[key].book += 3
	}
}
// 提供外部數據
defineExpose({ house })
</script>

<style scoped>
.father {
	background-color: rgb(165, 164, 164);
	padding: 20px;
	border-radius: 10px;
}

.father button {
	margin-bottom: 10px;
	margin-left: 10px;
}
</style>
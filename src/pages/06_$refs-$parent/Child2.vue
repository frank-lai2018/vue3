<template>
	<div class="child2">
		<h3>子元件2</h3>
		<h4>電腦：{{ computer }}</h4>
		<h4>書：{{ book }} 本</h4>
	</div>
</template>

<script setup lang="ts" name="Child2">
import { ref } from "vue";
// 資料
let computer = ref('聯想')
let book = ref(6)
// 把資料交給外部
defineExpose({ computer, book })
</script>

<style scoped>
.child2 {
	margin-top: 20px;
	background-color: orange;
	padding: 20px;
	border-radius: 10px;
	box-shadow: 0 0 10px black;
}
</style>
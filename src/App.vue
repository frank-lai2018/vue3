<template>
	<div class="container-fluid wraper">
		<h1 class="title">
			Vue3 元件間通信
		</h1>
		<hr>
		<div class="row">
			<div class="col-xs-3 col-md-3 col-lg-3 col-xl-3">
				<!-- 導航區 -->
				<router-link active-class="active" class="list-group-item" to="/props">1. props</router-link>
				<router-link active-class="active" class="list-group-item" to="/event">2. 自訂事件</router-link>
				<router-link active-class="active" class="list-group-item" to="/mitt">3. mitt</router-link>
				<router-link active-class="active" class="list-group-item" to="/model">4. v-model</router-link>
				<router-link active-class="active" class="list-group-item" to="/attrs">5. $attrs</router-link>
				<router-link active-class="active" class="list-group-item" to="/ref-parent">6. <span
						class="small">$refs、$parent</span></router-link>
				<router-link active-class="active" class="list-group-item" to="/provide-inject">7.
					provide、inject</router-link>
				<router-link active-class="active" class="list-group-item" to="/pinia">8. pinia</router-link>
				<router-link active-class="active" class="list-group-item" to="/slot">9. slot</router-link>
				<router-link active-class="active" class="list-group-item" to="/slotDefault">09_slot_默認插槽</router-link>
				<router-link active-class="active" class="list-group-item" to="/slotName">09_slot_具名插槽</router-link>
				<router-link active-class="active" class="list-group-item" to="/slotScope">09_slot_作用域插槽</router-link>
			</div>
			<div class="col-xs-9 col-md-9 col-lg-9 col-xl-9">
				<div class="panel-body">
					<!-- 佔位一個展示區 -->
					<router-view></router-view>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts" name="App">
</script>

<style>
.wraper .title {
	padding: 20px;
	text-align: center;
	min-width: 610px;
}

.wraper .small {
	font-size: 15px;
}

.wraper .list-group-item {
	min-width: 230px;
}
</style>
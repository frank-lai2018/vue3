<template>
    <div class="testDeFineProps">
        <h2>{{ a }}</h2>
    </div>
</template>

<script lang="ts">
export default {
    name: 'TestDeFineProps'
}
</script>

<script lang="ts" setup>


// 只接收list
//defineProps(['a'])


// 接收list，同時將props儲存起來
let x = defineProps(['a'])
console.log(x.a)


</script>

<style scoped>
.testDeFineProps {
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
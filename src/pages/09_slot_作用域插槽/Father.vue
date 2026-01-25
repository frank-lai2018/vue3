<template>
  <div class="father">
    <h3>父元件</h3>
    <div class="content">
      <Game>
        <!--v-slot="params" 可以接收子組件插槽傳送過來的數據，會把插槽的所有數據打包成物件，params就是個物件，所以可以用解構賦值，把需要的屬性拿出來-->
        <template v-slot="params">
          <ul>
            <li v-for="y in params.youxi" :key="y.id">
              {{ y.name }}
            </li>
          </ul>
        </template>
      </Game>

      <Game>
        <template v-slot="params">
          <ol>
            <li v-for="item in params.youxi" :key="item.id">
              {{ item.name }}
            </li>
          </ol>
        </template>
      </Game>

      <Game>
        <template #default="{ youxi }">
          <h3 v-for="g in youxi" :key="g.id">{{ g.name }}</h3>
        </template>
      </Game>

    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
import Game from './Game.vue'
</script>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}

.content {
  display: flex;
  justify-content: space-evenly;
}

img,
video {
  width: 100%;
}
</style>
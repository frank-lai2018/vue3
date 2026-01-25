<template>
  <div class="father">
    <h3>父元件</h3>
    <div class="content">
      <Category title="熱門遊戲清單">
        <ul>
          <li v-for="g in games" :key="g.id">{{ g.name }}</li>
        </ul>
      </Category>
      <Category title="今日美食城市">
        <img :src="imgUrl" alt="">
      </Category>
      <Category title="今日影視推薦">
        <video :src="videoUrl" controls></video>
      </Category>
    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
import Category from './Category.vue'
import { ref, reactive } from "vue";

let games = reactive([
  { id: 'asgytdfats01', name: '英雄聯盟' },
  { id: 'asgytdfats02', name: '王者農藥' },
  { id: 'asgytdfats03', name: '紅色警戒' },
  { id: 'asgytdfats04', name: '鬥羅大陸' }
])
let imgUrl = ref('https://z1.ax1x.com/2023/11/19/piNxLo4.jpg')
let videoUrl = ref('http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4')

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
<template>
  <div class="father">
    <h3>父元件</h3>
    <div class="content">
      <Category>
        <!--使用v-slot:s2來說明放到name為s2的插槽-->
        <template v-slot:s2>
          <ul>
            <li v-for="g in games" :key="g.id">{{ g.name }}</li>
          </ul>
        </template>
        <template v-slot:s1>
          <h2>熱門遊戲清單</h2>
        </template>
      </Category>

      <Category>
        <template v-slot:s2>
          <img :src="imgUrl" alt="">
        </template>
        <template v-slot:s1>
          <h2>今日美食城市</h2>
        </template>
      </Category>

      <Category>
        <!--使用#號是簡寫，#s2跟v-slot:s2，name為s2的插槽-->
        <template #s2>
          <video video :src="videoUrl" controls></video>
        </template>
        <template #s1>
          <h2>今日影視推薦</h2>
        </template>
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

h2 {
  background-color: orange;
  text-align: center;
  font-size: 20px;
  font-weight: 800;
}
</style>
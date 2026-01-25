import {defineStore}  from "pinia";

export const useCountStore = defineStore("count", {
// 真正存儲存數據的地方
  state: () => ({
      sum:6,
      school:'lala',
      address:'華亞科技園區'
  }),
  // actions裡面放置的是一個一個的方法，用來回應元件中的“動作”
  actions: {
    add(value: number) {
      console.log('add 被調用了',value)
      // 修改資料（this是目前的store）
      this.sum += value;
    },
    minus(value: number) {
      this.sum -= value;
    }
  }
})
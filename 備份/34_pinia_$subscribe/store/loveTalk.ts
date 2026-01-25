import { defineStore } from 'pinia'
import axios from 'axios'
import {nanoid} from 'nanoid'

export const useTalkStore = defineStore('talk', {
  // 真正儲存資料的地方
  state() {
    return {
      talkList:JSON.parse(localStorage.getItem('talkList') as string) || []  //避免是null無法呼叫unshift
    }
  },
  actions: {
    async getATalk() {
      // 發請求，下面這行的寫法是：連續解構賦值+重命名
      // 把請求回來的字串，包裝成一個對象
      let obj = { id: nanoid(), title:`title_${nanoid()}` }
      // 放到陣列中
      this.talkList.unshift(obj)
    }
  },
})
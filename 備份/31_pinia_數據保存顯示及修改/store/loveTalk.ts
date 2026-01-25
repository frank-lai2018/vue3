import { defineStore } from 'pinia'

export const useTalkStore = defineStore('talk', {
  // 真正儲存資料的地方
  state() {
    return {
      talkList: [
        { id: 'ftrfasdf01', title: '今天你有點怪，哪裡怪？怪好看的！ ' },
        { id: 'ftrfasdf02', title: '草莓、藍莓、蔓越莓，今天想我沒了？ ' },
        { id: 'ftrfasdf03', title: '心裡給你留了一塊地，我的死心塌地' }
      ]
    }
  }
})
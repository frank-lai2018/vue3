import {reactive,onMounted,watch} from 'vue'
import axios from 'axios'

export default function (){
  // 數據
  let dogList = reactive([
    'https://images.dog.ceo/breeds/pembroke/n02113023_4373.jpg'
  ])
  // 方法
  async function getDog(){
    try {
      let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
      dogList.push(result.data.message)
    } catch (error) {
      alert(error)
    }
  }
  // 鉤子
  onMounted(()=>{
    getDog()
  })

  //監事也可以寫
  watch(dogList, (newValue, oldValue) => {
    console.log('dogList改變了', newValue, oldValue)
  })


  // 向外部提供的東西
  return {dogList,getDog}
}
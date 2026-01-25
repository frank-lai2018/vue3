import { defineStore } from "pinia";
import { ref } from "vue";

//選項式寫法
// export const useCountStore = defineStore("count", {
//     // 真正存儲存數據的地方
//     state: () => ({
//         sum: 6,
//         school: 'lala',
//         address: '華亞科技園區'
//     }),
//     // actions裡面放置的是一個一個的方法，用來回應元件中的“動作”
//     actions: {
//         add(value: number) {
//             console.log('add 被調用了', value)
//             // 修改資料（this是目前的store）
//             this.sum += value;
//         },
//         minus(value: number) {
//             this.sum -= value;
//         }
//     },
//     // getters用來放置計算屬性（基於state的資料，做二次運算而得出的新資料）
//     getters: {
//         bigSum: state => state.sum * 10,
//         upperSchool(): string {
//             return this.school.toUpperCase()
//         }
//     }
// })

//組合式寫法
export const useCountStore = defineStore("count", () => {
    // state
    const sum = ref(6)
    const school = ref('lala')
    const address = ref('華亞科技園區')
    // actions
    function add(value: number) {
        console.log('add 被調用了', value)
        sum.value += value;
    }
    function minus(value: number) {
        sum.value -= value;
    }
    // getters
    const bigSum = () => sum.value * 10
    const upperSchool = () => school.value.toUpperCase()
    return {
        sum,
        school,
        address,
        add,
        minus,
        bigSum,
        upperSchool
    }
})
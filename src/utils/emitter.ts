// 引入mitt
import mitt from 'mitt'

// 呼叫mitt得到emitter，emitter能：綁定事件、觸發事件
const emitter = mitt()

 // 綁定事件
/*emitter.on('test1',()=>{
 console.log('test1被呼叫了')
})
emitter.on('test2',()=>{
 console.log('test2被呼叫了')
})

// 觸發事件
setInterval(() => {
 emitter.emit('test1')
 emitter.emit('test2')
}, 1000);

//解綁定事件
setTimeout(() => {
 // emitter.off('test1')
 // emitter.off('test2')
 emitter.all.clear()
}, 3000); */


// 暴露emitter
export default emitter
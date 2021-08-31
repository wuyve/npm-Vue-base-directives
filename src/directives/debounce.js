/*
 * @Author: wuyve
 * @Date: 2021-08-30 16:22:50
 * @LastEditTime: 2021-08-30 16:22:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: vue-base-directives/src/directives/copy.js
 */

// 节流，防止多次点击触发事件
// v-debounce="options"
// options = {
//   func 需要执行的方法
//   delay 延时时长，单位为毫秒
// }
const debounce = {
  inserted (el, binding) {
    let timer
    el.addEventListener('click', () => {
      if (timer) {
        clearTimeout(timer)
      }
      if (!el.disabled) {
        el.disabled = true
        binding.value.fun()
      }
      timer = setTimeout(() => {
        el.disabled = false
      }, binding.value.delay)
    })
  }
}

export default debounce
/*
 * @Author: wuyve
 * @Date: 2021-08-30 15:50:50
 * @LastEditTime: 2021-08-30 15:50:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: vue-base-directives/src/directives/copy.js
 */
const copy = {
  bind (el, {value}) {
    el.$value = value
    el.handler = () => {
      if (!el.$value) {
        // 值为空
        console.log('无复制内容')
        return
      }
      // 创建一个input
      const input = document.createElement('input')
      // 设置内容
      input.value = el.$value
      // 添加到临时实例
      document.body.appendChild(input)
      input.select()
      // 执行复制
      document.execCommand('Copy')

      console.log('复制成功222')
      document.body.removeChild(input)
    },
    el.addEventListener('click', el.handler)
  },
  // 当传进来的值更新时触发
  componentUpdated (el, {value}) {
    el.$value = value
  },
  // 指令与元素解绑时，移除事件绑定
  unbind (el) {
    el.removeEventListener('click', el.handler)
  }
}

export default copy
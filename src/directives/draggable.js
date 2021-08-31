/*
 * @Author: wuyve
 * @Date: 2021-08-30 16:22:50
 * @LastEditTime: 2021-08-30 16:22:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: vue-base-directives/src/directives/copy.js
 */
// 拖拽
const draggable = {
  inserted: function (el) {
    el.style.cursor = 'move';
    el.style.position="absolute";
    el.onmousedown = function (e) {
      let disx = e.pageX - el.offsetLeft
      let disy = e.pageY - el.offsetTop
      document.onmousemove = function (e) {
        let x = e.pageX - disx
        let y = e.pageY - disy
        let maxX = parseInt(window.getComputedStyle(el.parentNode).width) - parseInt(window.getComputedStyle(el).width)
        let maxY = parseInt(window.getComputedStyle(el.parentNode).height) - parseInt(window.getComputedStyle(el).height)
        if (x < 0) {
          x = 0
        } else if (x > maxX) {
          x = maxX
        }

        if (y < 0) {
          y = 0
        } else if (y > maxY) {
          y = maxY
        }
        el.style.left = x + 'px'
        el.style.top = y + 'px'
      }
      document.onmouseup = function () {
        document.onmousemove = document.onmouseup = null
      }
    }
  }
}

export default draggable
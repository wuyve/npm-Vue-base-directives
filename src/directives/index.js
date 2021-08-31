// 引入指令
import copy from './copy.js'
import debounce from './debounce.js'
import draggable from './draggable.js'
import lazyLoad from './lazyLoad.js'
import waterMarker from './waterMarker'
import permission from './permission.js'

// 自定义指令
const directives = {
  copy,
  debounce,
  draggable,
  lazyLoad,
  waterMarker,
  permission
}


export default {
  install (Vue) {
    Object.keys(directives).forEach(key => {
      Vue.directive(key, directives[key])
    })
  }
}
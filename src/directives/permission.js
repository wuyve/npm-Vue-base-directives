// 控制权限
const permission = {
  checkArray (allKeys, key) {
    if (!Array.isArray(allKeys)) {
      console.log('请传入权限数组')
      return
    }
    const flag = allKeys.includes(key)
    if (flag) return true  // 有权限
    else return false  // 无权限
  },
  inserted (el, binding) {
    const allKeys = binding.value.allKeys
    const key = binding.value.key
    if (key) {
      const hasPermission = permission.checkArray(allKeys, key)
      // 判断是否有权限
      if (!hasPermission) el.parentNode && el.parentNode.removeChild(el)
    }
  }
}

export default permission

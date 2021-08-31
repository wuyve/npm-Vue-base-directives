<template>
  <div>
    <button 
      v-for="(item, index) in buttonList" 
      :key="index" 
      v-permission="{allKeys: permissionList, key: item.key}"
    >
      {{item.name}}
    </button>
  </div>
</template>

<script>
export default {
  name: 'Permission',
  data () {
    const buttonList = []
    for (let i = 1; i < 8; i++) {
      const obj = {}
      obj.name = 'button' + i,
      obj.key = i
      buttonList.push(obj)
    }
    return {
      buttonList,
      permissionList: [2, 4, 6, 7, 8]
    }
  }
}
</script>
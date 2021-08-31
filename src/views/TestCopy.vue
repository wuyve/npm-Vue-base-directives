<template>
  <div>
    <img alt="Vue logo" class="dialog-model" v-copy="testCopy" src="../assets/logo.png">
    <HelloWorld v-debounce="debounceOptions" msg="Welcome to Your Vue.js App"/>
  </div>
</template>
<script>
import HelloWorld from '../components/HelloWorld.vue'
export default {
  name: 'TestCopy',
  components: {
    HelloWorld
  },
  data () {
    return {
      testCopy: '这个是测试数据222',
      debounceOptions: {
        fun: () => this.testDebounce(),
        delay: 1000
      }
    }
  },
  methods: {
    testDebounce () {
      console.log('触发我了')
    }
  }
}
</script>
<style>

</style>
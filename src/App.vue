<template>
  <div id="app">
    <img alt="Vue logo" class="dialog-model" v-copy="testCopy" v-draggable src="./assets/logo.png">
    <HelloWorld v-debounce="debounceOptions" msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data () {
    return {
      testCopy: '这个是测试数据222',
      debounceOptions: {
        fun: () => this.testDebounce(),
        delay: 1000
      }
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    testDebounce () {
      console.log('触发我了')
    }
  }
}
</script>

<style>
#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.dialog-model {
  position: absolute;
  top: 0;
}
</style>

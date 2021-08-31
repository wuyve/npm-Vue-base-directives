<template>
  <div class="page" v-waterMarker="options1">
    <div class="context" v-waterMarker="options2">
      页面水印
    </div>
  </div>
</template>
<script>
export default {
  name: 'WaterMarker',
  data () {
    return {
      options1: {
        text: 'wuyve',
        textColor: '#F00',
        font: '20px STKaiti'
      },
      options2: {
        text: '水熊虫',
        textColor: '#00F'
      }
    }
  }
}
</script>
<style>
.page {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.context {
  width: 400px;
  height: 400px;
  background-color: aqua;
}
</style>
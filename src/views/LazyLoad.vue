<template>
  <div class="lazy-load" v-waterMarker="'wuyve'">
    <img v-for="(item, index) in imgList" :key="index" v-lazyLoad="item.img">
  </div>
</template>
<script>
export default {
  name: 'LazyLoad',
  data () {
    return {
      imgList: [
        {
          img: 'https://activity-cdn.joyoung.com/jy-activity/image/zhoubao.png',
        }, {
          img: 'https://activity-cdn.joyoung.com/jy-activity/image/activity/h5_router/h5_activity_20201111/over_ani_images/img_0.png'
        }, {
          img: 'https://activity-cdn.joyoung.com/jy-activity/image/activity/h5_router/h5_activity_20201111/over_ani_images/img_1.png'
        }, {
          img: 'https://activity-cdn.joyoung.com/jy-activity/image/activity/h5_router/h5_activity_20201111/over_ani_images/img_2.png'
        }, {
          img: 'https://activity-cdn.joyoung.com/jy-activity/image/activity/h5_router/h5_activity_20201111/over_ani_images/img_3.png'
        }, {
          img: 'https://activity-cdn.joyoung.com/jy-activity/image/activity/h5_router/h5_activity_20201111/over_ani_images/img_4.png'
        }, {
          img: 'https://activity-cdn.joyoung.com/jy-activity/image/activity/h5_router/h5_activity_20201111/over_ani_images/img_5.png'
        }, {
          img: 'https://activity-cdn.joyoung.com/jy-activity/image/activity/h5_router/h5_activity_20201111/over_ani_images/img_6.png'
        }, {
          img: 'https://activity-cdn.joyoung.com/jy-activity/image/activity/h5_router/h5_activity_20201111/over_ani_images/img_7.png'
        }, {
          img: 'https://activity-cdn.joyoung.com/jy-activity/image/activity/h5_router/h5_activity_20201111/over_ani_images/img_8.png'
        }, {
          img: 'https://activity-cdn.joyoung.com/jy-activity/image/activity/h5_router/h5_activity_20201111/over_ani_images/img_9.png'
        }, {
          img: 'https://activity-cdn.joyoung.com/jy-activity/image/activity/h5_router/h5_activity_20201111/over_ani_images/img_10.png'
        }, {
          img: 'https://activity-cdn.joyoung.com/jy-activity/image/activity/h5_router/h5_activity_20201111/over_ani_images/img_11.png'
        }, {
          img: 'https://activity-cdn.joyoung.com/jy-activity/image/activity/h5_router/h5_activity_20201111/over_ani_images/img_12.png'
        }, {
          img: 'https://activity-cdn.joyoung.com/jy-activity/image/activity/h5_router/h5_activity_20201111/over_ani_images/img_13.png'
        }, {
          img: 'https://activity-cdn.joyoung.com/jy-activity/image/activity/h5_router/h5_activity_20201111/over_ani_images/img_14.png'
        }, {
          img: 'https://activity-cdn.joyoung.com/jy-activity/image/activity/h5_router/h5_activity_20201111/over_ani_images/img_15.png'
        }, {
          img: 'https://activity-cdn.joyoung.com/jy-activity/image/activity/h5_router/h5_activity_20201111/over_ani_images/img_16.png'
        }, {
          img: 'https://activity-cdn.joyoung.com/jy-activity/image/activity/h5_router/h5_activity_20201111/over_ani_images/img_17.png'
        }, {
          img: 'https://activity-cdn.joyoung.com/jy-activity/image/activity/h5_router/h5_activity_20201111/over_ani_images/img_18.png'
        }
      ]
    }
  }
}
</script>
<style>
.lazy-load {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
}
img {
  width: 500px;
  height: 500px;
}
</style>
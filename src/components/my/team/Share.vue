<template>
  <div class="share">
    <div class="header">
      <h4>扫码组建团队</h4>
      <p>扫描下方二维码组建团队</p>
    </div>
    <img :src="image" alt="">
  </div>
</template>

<script>
import qrcode from '@/assets/qrcode.png'

export default {
  name: 'Share',
  created () {
    this.$store.dispatch('setTabsState', false)
    this.$store.dispatch('setTitle', '组建团队')
  },
  data () {
    return {
      image: qrcode
    }
  }
}
</script>

<style scoped lang="less">
  .share {
    .header {
      margin-top: 100px;
      padding: 5px 10px;
      background-color: white;
      text-align: center;
      color: #666666;
    }

    img {
      width: 80%;
      margin: 50px auto;
      display: block;
    }
  }
</style>

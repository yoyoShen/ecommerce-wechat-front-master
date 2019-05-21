<template>
  <div class="share-dialog" v-if="show">
    <h3>会员分享</h3>
    <p class="price">{{returnMoney | toYuan}}</p>
    <p>分享既得佣金</p>
    <el-button size="mini" type="primary" class="btn-share" @click="handleShare">立即分享</el-button>
  </div>
</template>

<script>
export default {
  name: 'CommodityShareDialog',
  props: ['returnMoney', 'show', 'code'],
  data () {
    return {}
  },
  methods: {
    handleShare () {
      this.$emit('share', this.code)
    }
  }
}
</script>

<style scoped lang="less">
  .share-dialog {
    position: fixed;
    right: 10px;
    bottom: 150px;
    border-radius: 10px;
    background-color: white;
    border: 1px solid #DDDDDD;
    color: #666666;
    padding: 10px;
    width: 140px;

    h3 {
      font-weight: normal;
      font-size: 1.1rem;
      margin: 0;
      padding: 0;
      border-bottom: 1px solid #DDDDDD;
    }

    p {
      text-align: center;
    }

    .btn-share {
      width: 90%;
      margin: 0 auto;
      display: block;
    }
  }
</style>

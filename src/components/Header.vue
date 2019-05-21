<template>
  <el-header class="app-header" height="50">
    <div class="back-button" @click="handleBack">
      <i class="el-icon-arrow-left"></i>
      <span>返回</span>
    </div>
    <div class="title-text">
      {{$store.state.title}}
    </div>
    <div class="more-button">
      <i class="el-icon-more"></i>
    </div>
  </el-header>
</template>

<script>

export default {
  name: 'Header',
  methods: {
    handleBack () {
      this.$router.back()
    }
  }
}
</script>

<style scoped lang="less">
  @height: 50px;
  .app-header {
    z-index: 9999999;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: white;
    color: #2697EB;
    line-height: @height;
    height: @height;
    position: fixed;
    top: 0;
    width: 100%;

    .back-button {
      height: 100%;
      width: 60px;
      text-align: left;
    }

    .title-text {
      font-size: 1.125rem;
      text-align: center;
    }

    .more-button {
      width: 60px;
      text-align: right;
    }
  }

</style>

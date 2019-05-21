<template>
  <div class="base-user-info">
    <div class="image">
      <img :src="user.image" alt="">
    </div>
    <div class="text">
      <p class="name">{{user.name}}</p>
      <p class="phone">{{user.phone}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseUserInfo',
  data () {
    return {
      user: {
        image: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3278187659,893770648&fm=58',
        name: 'Nikola Tesla',
        phone: '1325145856'
      }
    }
  }
}
</script>

<style scoped lang="less">
  .base-user-info {
    margin-top: 10px;
    background-color: white;
    display: flex;
    justify-content: flex-start;
    overflow: hidden;
    height: 100px;

    .image {
      width: 80px;
      height: 80px;
      margin: 10px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
    }

    .text {
      text-align: left;

      .name {
        color: black;
        font-size: 1.2rem;
      }

      .phone {
        color: #666666;
        font-size: 1rem;
      }
    }
  }
</style>

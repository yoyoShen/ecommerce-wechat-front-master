<template>
  <div class="team">
    <el-row class="user-info">
      <el-col :span="6" class="img">
        <img :src="user.image" alt="">
      </el-col>
      <el-col :span="12" class="name">
        <h4>Levent</h4>
        <p>13235165232</p>
      </el-col>
      <el-col :span="6" class="share">
        <i class="el-icon-share" @click="toTeamShare"></i>
      </el-col>
    </el-row>
    <el-row class="shop-name">
      <el-col :span="12">
        <b>店铺名称</b>
      </el-col>
      <el-col :span="12">
        <p>我的小店</p>
      </el-col>
    </el-row>
    <div class="members">
      <p class="title-text">团队成员</p>
      <el-row class="member-item" v-for="m in members" :key="m.id">
        <el-col :span="6" class="img">
          <img :src="m.image" alt="">
        </el-col>
        <el-col :span="18" class="name">{{m.name}}</el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  created () {
    this.$store.dispatch('setTabsState', false)
    this.$store.dispatch('setTitle', '我的团队')
  },
  data () {
    return {
      user: {
        image: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3278187659,893770648&fm=58'
      },
      members: [
        {
          id: 1,
          name: 'Linus',
          image: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3278187659,893770648&fm=58'
        },
        {
          id: 2,
          name: 'Linus',
          image: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3278187659,893770648&fm=58'
        },
        {
          id: 3,
          name: 'Linus',
          image: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3278187659,893770648&fm=58'
        }
      ]
    }
  },
  methods: {
    toTeamShare () {
      this.$router.push({
        name: 'TeamShare'
      })
    }
  }
}
</script>

<style scoped lang="less">
  .team {
    overflow: hidden;

    .user-info {
      height: 90px;
      padding: 0 10px;
      background-color: white;
      margin-top: 10px;

      .img {
        img {
          width: 80%;
          height: 80%;
          border-radius: 10%;
          margin: 10% 10% 0 10%;
        }
      }

      .name {
        color: #666666;

        h4 {
          margin: 20px 0 0 0;
          padding: 0;
        }

        p {
          font-size: .9rem;
        }
      }

      .share {
        font-size: 2rem;
        line-height: 90px;
        text-align: center;
      }
    }

    .shop-name {
      border-top: 1px solid #DDDDDD;
      background-color: white;
      height: 45px;
      line-height: 45px;
      padding: 0 10px;
      color: #666666;

      p {
        text-align: right;
        margin: 0;
        padding-right: 20px;
      }

      b {
        font-weight: normal;
      }
    }

    .members {
      .title-text {
        margin: 10px 0 0 0;
        color: #666666;
      }

      .member-item {
        background-color: white;
        height: 56px;
        line-height: 56px;
        padding: 0 10px;
        border-bottom: 1px solid #DDDDDD;

        .img {
          height: 100%;

          img {
            border-radius: 5px;
            margin: 4px 4px 0 4px;
            width: 50px;
            height: 50px;
          }
        }
      }
    }
  }
</style>

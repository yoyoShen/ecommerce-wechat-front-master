<template>
  <div class="my">
    <base-user-info/>
    <div class="coffers" v-if="showCoffers" @click="toCoffers">
      <div class="left">
        <h4>我的金库</h4>
        <p>我的返现金库</p>
      </div>
      <div class="right">
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
    <div class="team" v-if="showTeam" @click="toTeam">
      <div class="left">
        <h4>我的团队</h4>
        <p>我的推手团队</p>
      </div>
      <div class="right">
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
    <my-order/>
  </div>
</template>

<script>
import BaseUserInfo from '@/components/commons/BaseUserInfo'
import MyOrder from './MyOrder'

export default {
  name: 'Index',
  created () {
    this.$store.dispatch('setTabsState', true)
    this.$store.dispatch('setTitle', '我的')
  },
  data () {
    return {
      showTeam: true,
      showCoffers: true
    }
  },
  components: {
    BaseUserInfo,
    MyOrder
  },
  methods: {
    toTeam () {
      this.$router.push({name: 'Team'})
    },
    toCoffers () {
      this.$router.push({name: 'Coffers'})
    }
  }
}
</script>

<style scoped lang="less">
  .my {
    overflow: hidden;

    .coffers, .team {
      border-top: 1px solid #DDDDDD;
      background-color: white;
      display: flex;
      justify-content: space-between;
      padding: 0 10px;
      height: 75px;

      .left {
        h4 {
          font-size: 1.1rem;
          color: #666666;
          margin: 10px 0 0 0;
          padding: 0;
          font-weight: normal;
        }

        p {
          color: #666666;
          font-size: .9rem;
          margin: 10px 0;
          padding: 0;
        }
      }

      .right {
        i {
          line-height: 75px;
          font-size: 1.7rem;
        }
      }
    }
  }
</style>

<template>
  <div class="withdrawal">
    <img :src="iconUrl" alt="" class="top-icon">
    <el-row class="withdrawal-hint">
      <el-col :span="12" class="label">
        可提现金额
      </el-col>
      <el-col :span="12" class="value">
        {{withdrawable | toYuan}}
      </el-col>
    </el-row>
    <div class="input">
      <p class="title-text">提现金额</p>
      <el-row class="input-wrapper">
        <el-col :span="4" class="label">
          ￥
        </el-col>
        <el-col :span="20" class="value">
          <input type="text" placeholder="请输入提现金额" v-model="withdrawAmount" @input="handleInput">
        </el-col>
      </el-row>
    </div>
    <el-button type="primary" class="btn-apply">申请提现</el-button>
    <p class="tips">温馨提示：</p>
    <p class="tips">
      资讯类信息文案可以打满多行资讯类信息文案可以打满多行资讯类信息文案可以打满多行。
    </p>
  </div>
</template>

<script>
import iconUrl from '@/assets/icon_money_bag.png'

export default {
  created () {
    this.$store.dispatch('setTabsState', false)
    this.$store.dispatch('setTitle', '提现申请')
  },
  data () {
    return {
      iconUrl,
      withdrawable: '1452.00',
      withdrawAmount: null
    }
  },
  name: 'Withdrawal',
  methods: {
    handleInput () {
      if (this.withdrawAmount &&
        (!/^\d+\.?\d{0,2}$/.test(this.withdrawAmount) || parseFloat(this.withdrawAmount) > parseFloat(this.withdrawable))) {
        this.withdrawAmount = this.withdrawAmount.substr(0, this.withdrawAmount.length - 1)
      }
    }
  }
}
</script>

<style scoped lang="less">
  @border: 1px solid #DDDDDD;
  .withdrawal {
    overflow: hidden;

    .top-icon {
      display: block;
      width: 100px;
      margin: 70px auto 30px auto;
    }

    .withdrawal-hint {
      background-color: white;
      padding: 10px;
      border-top: @border;
      border-bottom: @border;

      .label {
        color: #666666;
        font-size: 1.1rem;
      }

      .value {
        color: red;
        font-size: 1.2rem;
      }
    }

    .input {
      margin-top: 10px;
      background-color: white;
      padding: 10px;
      border-bottom: @border;
      border-top: @border;

      .title-text {
        margin: 0;
        padding: 0;
        color: #666666;
      }

      .input-wrapper {
        line-height: 2rem;
        margin: 10px 0;

        .label {
          font-size: 2rem;
          display: block;
          line-height: 2.4rem;
          text-align: center;
          color: #666666;
        }

        .value {
          input {
            outline: none;
            font-size: 2rem;
            border: none;
            color: black;
            width: 100%;
            line-height: 2.4rem;
          }
        }
      }
    }

    .btn-apply {
      display: block;
      margin: 10px;
      height: 48px;
      width: calc(100% - 20px);
      font-size: 1.125rem;
    }

    .tips {
      padding: 5px 10px;
      margin: 0;
      color: #666666;
      font-size: .8rem;
    }
  }
</style>

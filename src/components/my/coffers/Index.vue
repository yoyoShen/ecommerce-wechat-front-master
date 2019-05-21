<template>
  <div class="coffers">
    <div class="overview">
      <div class="top">
        <div class="total">
          <p class="title-text">总资产</p>
          <p class="total-money">{{total | toYuan}}</p>
        </div>
        <el-button class="btn-withdrawal" @click="toWithdrawal">申请提现</el-button>
      </div>
      <p class="bottom">
        <span>可提现：{{canWithdrawal | toYuan}}</span>
        <span>已提现：{{withdrawals | toYuan}}</span>
        <span>累计收益：{{accumulated | toYuan}}</span>
        <span>团队收益：{{teamIncome | toYuan}}</span>
      </p>
    </div>
    <p class="title-text">推广订单</p>
    <div class="trade-wrapper">
      <div class="trade-item" v-for="trade in trades" :key="trade.id">
        <h5>订单号：{{trade.tradeNo}}</h5>
        <p>商品名：{{trade.commodityName}}</p>
        <p>{{trade.commodityDescription}}</p>
        <p>姓名：{{trade.username}}</p>
        <p>电话：{{trade.userPhone}}</p>
        <p class="red">佣金：{{trade.returnMoney}}</p>
        <p>状态：{{trade.status}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  created () {
    this.$store.dispatch('setTabsState', false)
    this.$store.dispatch('setTitle', '我的金库')
  },
  data () {
    return {
      total: '1254.00',
      canWithdrawal: '1254.00',
      withdrawals: '50.00',
      accumulated: '1520.00',
      teamIncome: '25.00',
      trades: [
        {
          id: 1,
          tradeNo: '201548585444154154',
          commodityName: '火龙果',
          commodityDescription: '资讯类信息文案可以打满多行资讯类信息文案可以打满多行资讯类信息文案可以打满多行。',
          username: '莱温特',
          userPhone: '13235169652',
          status: 1,
          returnMoney: '7.00'
        },
        {
          id: 2,
          tradeNo: '201548585444154154',
          commodityName: '火龙果',
          commodityDescription: '资讯类信息文案可以打满多行资讯类信息文案可以打满多行资讯类信息文案可以打满多行。',
          username: '莱温特',
          userPhone: '13235169652',
          status: 1,
          returnMoney: '7.00'
        },
        {
          id: 3,
          tradeNo: '201548585444154154',
          commodityName: '火龙果',
          commodityDescription: '资讯类信息文案可以打满多行资讯类信息文案可以打满多行资讯类信息文案可以打满多行。',
          username: '莱温特',
          userPhone: '13235169652',
          status: 1,
          returnMoney: '7.00'
        },
        {
          id: 4,
          tradeNo: '201548585444154154',
          commodityName: '火龙果',
          commodityDescription: '资讯类信息文案可以打满多行资讯类信息文案可以打满多行资讯类信息文案可以打满多行。',
          username: '莱温特',
          userPhone: '13235169652',
          status: 1,
          returnMoney: '7.00'
        }
      ]
    }
  },
  methods: {
    toWithdrawal () {
      this.$router.push({
        name: 'Withdrawal'
      })
    }
  }
}
</script>

<style scoped lang="less">
  .coffers {
    .overview {
      background-color: #2697EB;
      height: 120px;
      color: white;
      padding: 0 10px;

      .top {
        display: flex;
        justify-content: space-between;

        .total {
          .title-text {
            font-size: .8rem;
            margin: 10px 0 0 0;
          }

          .total-money {
            font-size: 1.1rem;
            margin: 10px 0 0 0;
          }
        }

        .btn-withdrawal {
          width: 70px;
          height: 20px;
          margin-top: 10px;
          line-height: 20px;
          padding: 0;
          color: #2697EB;
        }
      }

      .bottom {
        font-size: .8rem;
        display: flex;
        flex-wrap: wrap;

        span {
          display: block;
          margin: 0 10px 0 0;
        }
      }
    }

    .title-text {
      margin: 10px 0 0 0;
      padding: 0 10px;
    }

    .trade-wrapper {
      .trade-item {
        background-color: white;
        margin: 0 0 20px 0;
        padding: 10px 10px;
        overflow: hidden;

        h5 {
          font-weight: normal;
          font-size: 1.2rem;
          color: #666666;
          margin: 10px 0 15px 0;
          padding: 0;
        }

        p {
          margin: 0;
          padding: 0;
          color: #666666;
          font-size: .9rem;
        }

        .red {
          color: red;
        }
      }
    }
  }
</style>

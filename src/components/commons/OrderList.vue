<template>
  <div class="list-wrapper">
    <div class="order-item" v-for="order in list" :key="order.id">
      <h2><span>电子码：</span><b>{{order.bookedCode}}</b></h2>
      <p class="small-text gray"><span>交易单号：</span>{{order.tradeNo}}</p>
      <p class="small-text gray"><span>交易时间：</span>{{order.createTime}}</p>
      <p class="big-text fat">{{order.commodityName}}</p>
      <p class="small-text gray">
        {{order.commodityDescription}}
      </p>
      <div class="user">
        <div class="name">
          <span>姓名</span>
          <span>{{order.username}}</span>
        </div>
        <div class="phone">
          <span>电话</span>
          <span>{{order.userPhone}}</span>
        </div>
      </div>
      <img :src="order.qrCodeUrl" alt="" class="qr-code">
      <div class="price">
        <span class="money">{{order.price | toYuan}}</span>
        <span class="status">{{order.status | toStatusText}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderList',
  props: ['list'],
  filters: {
    toStatusText (v) {
      const statusMap = {
        1: '已支付，无需预约',
        2: '已支付，待预约',
        3: '已预约',
        4: '已完成'
      }
      const text = statusMap[v]
      return text || '未知状态'
    }
  }
}
</script>

<style scoped lang="less">
  .list-wrapper {
    width: 100%;

    .order-item {
      margin: 5px 10px;
      background-color: white;
      padding: 10px;
      border-radius: 10px;
      border: 1px solid #DDDDDD;

      h2 {
        margin: 0 0 10px 0;
        padding: 10px 0;
        font-weight: normal;
        font-size: 1.5rem;
        color: #666666;
        border-bottom: 1px solid #DDDDDD;

        b {
          color: #333333;
          font-weight: normal
        }
      }

      .gray {
        color: #666666;
      }

      .text {
        margin: 0;
        padding: 0;
      }

      .small-text {
        .text();
        font-size: .8rem;
      }

      .big-text {
        .text();
        font-size: 1.3rem;
      }

      .fat {
        margin: 10px 0;
      }

      .user {
        margin: 10px 0;

        .base {
          display: flex;
          justify-content: space-between;
        }

        .name {
          .base();
          .big-text();
        }

        .phone {
          .base();
          .small-text();
          .gray();
        }
      }

      .qr-code {
        width: 70%;
        margin: 20px auto;
        display: block;
      }

      .price {
        width: 100%;
        border-top: 1px solid #DDDDDD;
        line-height: 30px;
        display: flex;
        justify-content: space-between;

        .money {
          font-size: 1.3rem;
          color: red;
          margin-left: 10px;
        }

        .status {
          .small-text();
          .gray();
          margin-right: 10px;
        }
      }
    }
  }
</style>

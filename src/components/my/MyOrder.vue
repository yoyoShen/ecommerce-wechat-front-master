<template>
  <div class="order-list">
    <p class="title">我的订单</p>
    <el-tabs v-model="activeName" @tab-click="handleClick" class="tabs">
      <el-tab-pane label="全部" name="all">
        <order-list :list="orderList.all"/>
      </el-tab-pane>
      <el-tab-pane label="已支付" name="paid">
        <order-list :list="orderList.paid"/>
      </el-tab-pane>
      <el-tab-pane label="已预约" name="booked">
        <order-list :list="orderList.booked"/>
      </el-tab-pane>
      <el-tab-pane label="已完成" name="completed">
        <order-list :list="orderList.completed"/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import OrderList from '@/components/commons/OrderList'
import qrcodeUrl from '@/assets/qrcode.png'

export default {
  name: 'MyOrder',
  components: {
    OrderList
  },
  data () {
    return {
      activeName: 'all',
      orderList: {
        all: [
          {
            createTime: '2019-10-10 20:20:10',
            bookedCode: '00121388421',
            tradeNo: '201901020012001254',
            commodityName: '美甲预约【爱化妆】',
            commodityDescription: '资讯类信息文案可以打满多行资讯类信息文案可以打满多行资讯类信息文案可以打满多行。',
            qrCodeUrl: qrcodeUrl,
            username: '莱温特',
            userPhone: '13235164523',
            price: '100.00',
            status: 1
          },
          {
            createTime: '2019-10-10 20:20:10',
            bookedCode: '00121388421',
            tradeNo: '201901020012001254',
            commodityName: '美甲预约【爱化妆】',
            commodityDescription: '资讯类信息文案可以打满多行资讯类信息文案可以打满多行资讯类信息文案可以打满多行。',
            qrCodeUrl: qrcodeUrl,
            username: '莱温特',
            userPhone: '13235164523',
            price: '100.00',
            status: 2
          },
          {
            createTime: '2019-10-10 20:20:10',
            bookedCode: '00121388421',
            tradeNo: '201901020012001254',
            commodityName: '美甲预约【爱化妆】',
            commodityDescription: '资讯类信息文案可以打满多行资讯类信息文案可以打满多行资讯类信息文案可以打满多行。',
            qrCodeUrl: qrcodeUrl,
            username: '莱温特',
            userPhone: '13235164523',
            price: '100.00',
            status: 3
          }
        ],
        paid: [],
        booked: [],
        completed: []
      }
    }
  },
  methods: {
    handleClick () {
      console.log('click')
    }
  }
}
</script>

<style scoped lang="less">
  .order-list {
    background-color: white;
    margin-top: 10px;

    .title {
      color: #666666;
      margin: 0;
      padding: 0 10px;
      border-bottom: 1px solid #DDDDDD;
    }

    .card-wrapper {
      background-color: white;
    }

    .tabs {
      margin: 0 10px;
    }
  }
</style>

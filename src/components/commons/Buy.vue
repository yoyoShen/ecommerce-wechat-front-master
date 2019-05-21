<template>
  <div class="buy">
    <div class="order card">
      <p class="title-text">订单信息</p>
      <div class="input-wrapper">
        <el-row class="input-row">
          <el-col :span="10" class="label">姓名</el-col>
          <el-col :span="14">
            <el-input type="text" placeholder="请输入姓名" v-model="username"/>
          </el-col>
        </el-row>
        <el-row class="input-row">
          <el-col :span="10" class="label">电话</el-col>
          <el-col :span="14">
            <el-input type="text" placeholder="请输入电话号" v-model="phone"/>
          </el-col>
        </el-row>
      </div>
      <p class="title-text">备注信息</p>
      <el-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4}"
        placeholder="请输入内容"
        v-model="description">
      </el-input>
    </div>
    <div class="card">
      <p class="title-text">商品信息</p>
      <div class="commodity">
        <h4>火龙果</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor
          sit amet lacus accumsan et viverra </p>
      </div>
      <el-row class="price info-line">
        <el-col :span="10" class="label">价格</el-col>
        <el-col :span="14" class="value">{{price | toYuan}}</el-col>
      </el-row>
      <el-row class="count info-line">
        <el-col :span="10" class="label">数量</el-col>
        <el-col :span="14">
          <el-input-number v-model="count" :min="1" :max="10"></el-input-number>
        </el-col>
      </el-row>
    </div>
    <el-row class="bottom-btns">
      <el-col :span="12" class="subtotal">
        <span>小计：</span>
        <b>{{subtotal | toYuan}}</b>
      </el-col>
      <el-col :span="12" class="btn">
        <el-button type="primary" class="btn-pay">确认支付</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Buy',
  data () {
    return {
      username: '',
      phone: '',
      description: '',
      count: 1,
      price: '123.01'
    }
  },
  computed: {
    subtotal () {
      return (parseFloat(this.price) * this.count).toFixed(2)
    }
  }
}
</script>

<style scoped lang="less">
  .buy {
    overflow: hidden;
    margin-bottom: 50px;

    .card {
      margin: 10px 10px;
      padding: 10px;
      border-radius: 9px;
      background-color: white;

      .input-wrapper {
        overflow: hidden;
      }

      .title-text {
        margin: 0;
        padding: 0 0 5px 0;
        font-size: .8rem;
        color: #A1A1A1;
      }

      .input-row {
        padding: 5px 0;

        &:first-child {
          border-top: 1px solid #DDDDDD;
        }

        &:last-child {
          border-bottom: 1px solid #DDDDDD;
        }

        .label {
          line-height: 40px;
          padding-left: 10px;
          color: #666666;
        }
      }

      @border: 1px solid #DDDDDD;

      .commodity {
        border-top: @border;
        border-bottom: @border;

        h4 {
          color: #666666;
          margin: 3px 0;
          padding: 0;
          font-size: 1.2rem;
          font-weight: normal;
        }

        p {
          color: #A1A1A1;
          margin: 0;
          padding: 0;
        }
      }
    }

    .info-line {
      border-bottom: 1px solid #DDDDDD;
      padding: 10px 0;
      height: 60px;
      color: #666666;

      .label {
        line-height: 40px;
      }

      .value {
        line-height: 40px;
        color: red;
      }
    }

    .bottom-btns {
      z-index: 99999;
      position: fixed;
      bottom: 50px;
      height: 50px;
      background-color: white;
      width: 100%;

      .subtotal {
        line-height: 50px;
        padding-left: 10px;
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;

        span {
          color: #666666;
        }

        b {
          color: red;
          font-size: .9rem;
          display: block;
          margin-right: 10px;
        }
      }

      .btn {
        .btn-pay {
          width: 100%;
          height: 50px;
          font-size: 1.2rem;
          background-color: #FF6600;
          border: none;
        }
      }
    }
  }
</style>

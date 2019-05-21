<template>
  <div class="tab-bar-wrapper" v-if="$store.state.showTabs">
    <div class="stub"></div>
    <div class="tab-bar">
      <button :key="menu.text" v-for="menu in menus" @click="handleMenuClick(menu)"
              :class="menu.active?'active':''">
        <span class="icon" :class="menu.active?'active':''"></span>
        <span>{{menu.text}}</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  mounted () {
    const route = this.$route
    this.$store.state.menu.list.forEach(m => {
      m.active = m.name === route.name
    })
  },
  data () {
    return {
      menus: this.$store.state.menu.list
    }
  },
  methods: {
    handleMenuClick (menu) {
      this.$emit('menuClick', menu)
    }
  }
}
</script>

<style scoped lang="less">
  @normalColor: #999999;
  @activeColor: #29A1F7;
  .tab-bar-wrapper > .stub {
    height: 50px;
  }

  .tab-bar {
    z-index: 999999;
    border-top: 1px solid #DDDDDD;
    position: fixed;
    bottom: 0;
    height: 50px;
    width: 100%;
    background-color: #F5F5F9;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .tab-bar > button {
    color: @normalColor;
    border: none;
    text-align: center;
    padding: auto 10px;
    outline: none;
    background-color: transparent;
    display: flex;
    flex-direction: column;

    &.active {
      color: @activeColor;
    }
  }

  .tab-bar > button:first-child {
    margin-left: 20px;
  }

  .tab-bar > button:last-child {
    margin-right: 20px;
  }

  .tab-bar > button > .icon {
    display: block;
    height: 20px;
    background-color: @normalColor;
    width: 100%;
    margin-top: 5px;
    border-radius: 5px;

    &.active {
      background-color: @activeColor;
    }
  }
</style>

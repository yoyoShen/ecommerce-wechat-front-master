<template>
  <div id="app">
    <app-header/>
    <index class="content"/>
    <tab-bar @menuClick="handleMenuClick"/>
  </div>
</template>

<script>
import AppHeader from './components/Header'
import TabBar from './components/TabBar'
import Index from './components/Index'

export default {
  name: 'App',
  components: {
    Index,
    AppHeader,
    TabBar
  },
  methods: {
    handleMenuClick (menu) {
      this.$store.dispatch('routeTo', {menu, router: this.$router})
    }
  }
}
</script>

<style lang="less">
  html, body {
    margin: 0;
    padding: 0;
    background-color: #F5F5F9;
  }

  #app > .content {
    margin-top: 50px;
  }
</style>

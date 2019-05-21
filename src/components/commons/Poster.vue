<template>
  <div class="poster">
    <img :src="imageUrl" alt="">
  </div>
</template>

<script>
import imageUrl from '@/assets/poster.png'

export default {
  name: 'Poster',
  data () {
    return {
      imageUrl
    }
  },
  created () {
    this.$store.dispatch('setTitle', '推广海报')
    this.$store.dispatch('setTabsState', false)
  }
}
</script>

<style scoped lang="less">
  .poster {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }
</style>

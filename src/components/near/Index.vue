<template>
  <div>
    <position-bar/>
    <commodity-card v-for="c in commodities" :key="c.id" :commodity="c"/>
  </div>
</template>

<script>
import CommodityCard from '@/components/commons/CommodityCard'
import PositionBar from '@/components/commons/PositionBar'
import commodityImageUrl from '@/assets/commodity.jpg'

export default {
  name: 'Index',
  components: {
    PositionBar,
    CommodityCard
  },
  created () {
    this.$store.dispatch('setTabsState', true)
    this.$store.dispatch('setTitle', '附近')
  },
  data () {
    return {
      commodities: [
        {
          id: 1,
          name: '火龙果',
          image: commodityImageUrl,
          description: '资讯类信息文案可以打满多行资讯类信息文案可以打满多行资讯类信息文案可以打满多行。',
          price: '100.00',
          oldPrice: '125.00',
          stock: 135,
          distance: '100'
        },
        {
          id: 2,
          name: '火龙果',
          image: commodityImageUrl,
          description: '资讯类信息文案可以打满多行资讯类信息文案可以打满多行资讯类信息文案可以打满多行。',
          price: '100.00',
          oldPrice: '125.00',
          stock: 135,
          distance: '100'
        },
        {
          id: 3,
          name: '火龙果',
          image: commodityImageUrl,
          description: '资讯类信息文案可以打满多行资讯类信息文案可以打满多行资讯类信息文案可以打满多行。',
          price: '100.00',
          oldPrice: '125.00',
          stock: 135,
          distance: '100'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>

import Vue from 'vue'
import Router from 'vue-router'
import Local from '@/components/local/Index'
import Near from '@/components/near/Index'
import My from '@/components/my/Index'
import CommodityDetail from '@/components/commons/CommodityDetail'
import Coffers from '@/components/my/coffers/Index'
import Team from '@/components/my/team/Index'
import TeamShare from '@/components/my/team/Share'
import Withdrawal from '@/components/my/coffers/Withdrawal'
import Buy from '@/components/commons/Buy'
import Poster from '@/components/commons/Poster'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Local',
      component: Local
    },
    {
      path: '/near',
      name: 'Near',
      component: Near
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/commodity/:id',
      name: 'CommodityDetail',
      component: CommodityDetail
    },
    {
      path: '/coffers',
      name: 'Coffers',
      component: Coffers
    },
    {
      path: '/team',
      name: 'Team',
      component: Team
    },
    {
      path: '/team-share',
      name: 'TeamShare',
      component: TeamShare
    },
    {
      path: '/withdrawal',
      name: 'Withdrawal',
      component: Withdrawal
    },
    {
      path: '/buy',
      name: 'Buy',
      component: Buy
    }, {
      path: '/poster',
      name: 'Poster',
      component: Poster
    }
  ]
})

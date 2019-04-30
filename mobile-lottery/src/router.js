import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      component: Home,
      meta: {
        index: 1
      },
      children: [
        {
          path: '/home',
          name: 'home',
          meta: {
            index: 1
          },
          component: () => import(/* webpackChunkName: "about" */ './views/Home/Home.vue')
        },
        {
          path: '/market',
          name: 'market',
          meta: {
            index: 2
          },
          component: () => import(/* webpackChunkName: "about" */ './views/market/index.vue')
        },
        {
          path: '/liuhe',
          name: 'liuhe',
          meta: {
            index: 3
          },
          component: () => import(/* webpackChunkName: "about" */ './views/market/liuhe.vue')
        },
        {
          path: '/victory',
          name: 'victory',
          meta: {
            index: 3
          },
          component: () => import(/* webpackChunkName: "about" */ './views/market/victory.vue')
        },
        {
          path: '/Lheimg',
          name: 'Lheimg',
          meta: {
            index: 2
          },
          component: () => import(/* webpackChunkName: "about" */ './views/games/Lheimg.vue')
        },
        {
          path: '/RedEnevlope',
          name: 'RedEnevlope',
          meta: {
            index: 2
          },
          component: () => import(/* webpackChunkName: "about" */ './views/games/RedEnevlope.vue')
        },
        {
          path: '/OpenLottery',
          name: 'OpenLottery',
          meta: {
            index: 2
          },
          component: () => import(/* webpackChunkName: "about" */ './views/lottery/OpenLottery.vue')
        },
     
        {
          path: '/formulaDetail',
          name: 'formulaDetail',
          meta: {
            index: 3
          },
          component: () => import(/* webpackChunkName: "about" */ './views/inquire/detail.vue')
        },
        {
          path: '/formula',
          name: 'formula',
          meta: {
            index: 2
          },
          component: () => import(/* webpackChunkName: "about" */ './views/formula/index.vue')
        },
        {
          path: '/LuckyNumber',
          name: 'LuckyNumber',
          meta: {
            index: 2
          },
          component: () => import(/* webpackChunkName: "about" */ './views/games/LuckyNumber.vue')
        },
        {
          path: '/games',
          name: 'games',
          meta: {
            index: 3
          },
          component: () => import(/* webpackChunkName: "about" */ './views/games/games.vue')
        },
        {
          path: '/HistoryDraw',
          name: 'HistoryDraw',
          meta: {
            index: 6
          },
          component: () => import(/* webpackChunkName: "about" */ './views/Home/HistoryDraw/index.vue')
        },
        {
          path: '/Exchange',
          name: 'Exchange',
          meta: {
            index: 6
          },
          component: () => import(/* webpackChunkName: "about" */ './views/Home/Exchange/index.vue')
        },
        {
          path: '/ExchangeDetail',
          name: 'ExchangeDetail',
          meta: {
            index: 6
          },
          component: () => import(/* webpackChunkName: "about" */ './views/Home/Exchange/ExchangeDetail.vue')
        },
        {
          path: '/Statistics',
          name: 'Statistics',
          meta: {
            index: 6
          },
          component: () => import(/* webpackChunkName: "about" */ './views/Home/Statistics/index.vue')
        },
        {
          path: '/Formula',
          name: 'Formula',
          meta: {
            index: 6
          },
          component: () => import(/* webpackChunkName: "about" */ './views/Home/formula/index.vue')
        },
        {
          path: '/trend',
          name: 'trend',
          meta: {
            index: 6
          },
          component: () => import(/* webpackChunkName: "about" */ './views/Home/trend/index.vue')
        },
        {
          path: '/admin/login',
          name: 'login',
          meta: {
            index: 8
          },
          component: () => import(/* webpackChunkName: "about" */ './views/admin/login.vue')
        },
        {
          path: '/admin/register',
          name: 'register',
          meta: {
            index: 9
          },
          component: () => import(/* webpackChunkName: "about" */ './views/admin/register.vue')
        },
        {
          path: '/admin/forgetPd',
          name: 'forgetPd',
          meta: {
            index: 10
          },
          component: () => import(/* webpackChunkName: "about" */ './views/admin/forgetPd.vue')
        },
      ]
    },
    {
      path: '/vote',
      name: 'vote',
      meta: {
        index: 2
      },
      component: () => import(/* webpackChunkName: "about" */ './views/vote/Vote.vue')
    },
    {
      path: '/share',
      name: 'share',
      meta: {
        index: 3
      },
      component: () => import(/* webpackChunkName: "about" */ './views/share/Share.vue')
    },
    {
      path: '/personal',
      name: 'personal',
      meta: {
        index: 4
      },
      component: () => import(/* webpackChunkName: "about" */ './views/personal/index.vue'),
    },
    {
      path: '/personal_index',
      name: 'personal_index',
      meta: {
        index: 4
      },
      children: [
        {
          path: '/fans',
          name: 'fans',
          meta: {
            index: 5
          },
          component: () => import(/* webpackChunkName: "about" */ './views/personal/fans/index.vue')
        },
        {
          path: '/heartWather',
          name: 'heartWather',
          meta: {
            index: 5
          },
          component: () => import(/* webpackChunkName: "about" */ './views/personal/heartWater/index.vue')
        },
      ],
      component: () => import(/* webpackChunkName: "about" */ './views/personal/personal_index/index.vue'),
    }
  ],
})

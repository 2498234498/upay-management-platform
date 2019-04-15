import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/view/Layout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: {
        path: '/statisticalAnalysis'
      }
    },
    {
      path: '/statisticalAnalysis',
      component: Layout,
      meta: { title: '统计分析' },
      children: [
        {
          path: '',
          name: 'CapitalStatistics',
          component: () => import('@/view/StatisticalAnalysis'),
          meta: { title: '资金统计' }
        },
        {
          path: 'resourceStatistics',
          name: 'ResourceStatistics',
          component: () => import('@/view/StatisticalAnalysis/ResourceStatistics'),
          meta: { title: '资源统计' }
        },
        {
          path: 'merchantStatistics',
          name: 'MerchantStatistics',
          component: () => import('@/view/StatisticalAnalysis/MerchantStatistics'),
          meta: { title: '商户统计' }
        },
        {
          path: 'acceptanceStatistics',
          name: 'AcceptanceStatistics',
          component: () => import('@/view/StatisticalAnalysis/AcceptanceStatistics'),
          meta: { title: '承兑商统计' }
        }
      ]
    },
    {
      path: '/userCenter',
      component: Layout,
      meta: { title: '用户中心' },
      children: [
        {
          path: '',
          name: 'MerchantManagement',
          component: () => import('@/view/UserCenter'),
          meta: { title: '商户管理' }
        },
        {
          path: 'administratorManagement',
          name: 'AdministratorManagement',
          component: () => import('@/view/UserCenter/AdministratorManagement'),
          meta: { title: '承兑商管理' }
        },
        {
          path: 'retailManagement',
          name: 'RetailManagement',
          component: () => import('@/view/UserCenter/RetailManagement'),
          meta: { title: '散户管理' }
        }
      ]
    },
    {
      path: '/collectionAccountManagement',
      component: Layout,
      meta: { title: '归集账号管理' },
      children: [
        {
          path: '',
          name: 'AcceptersCollectionAccount',
          component: () => import('@/view/CollectionAccountManagement'),
          meta: { title: '承兑商归集账号' }
        },
        {
          path: 'retailAccountCollection',
          name: 'RetailAccountCollection',
          component: () => import('@/view/CollectionAccountManagement/RetailAccountCollection'),
          meta: { title: '散户归集账号' }
        }
      ]
    },
    {
      path: '/orderCenter',
      component: Layout,
      meta: { title: '订单中心' },
      children: [
        {
          path: '',
          name: 'InputOrderManagement',
          component: () => import('@/view/OrderCenter'),
          meta: { title: '入金订单管理' }
        },
        {
          path: 'cashOrderManagement',
          name: 'CashOrderManagement',
          component: () => import('@/view/OrderCenter/CashOrderManagement'),
          meta: { title: '出金订单管理' }
        },
        {
          path: 'appealOrderManagement',
          name: 'AppealOrderManagement',
          component: () => import('@/view/OrderCenter/AppealOrderManagement'),
          meta: { title: '申诉订单管理' }
        }
      ]
    },
    {
      path: '/channelManagement',
      component: Layout,
      meta: { title: '通道管理' },
      children: [
        {
          path: '',
          name: 'AlipayChannel',
          component: () => import('@/view/ChannelManagement'),
          meta: { title: '支付宝通道' }
        },
        {
          path: 'weChatChannel',
          name: 'WeChatChannel',
          component: () => import('@/view/ChannelManagement/WeChatChannel'),
          meta: { title: '微信通道' }
        },
        {
          path: 'windControlRules',
          name: 'WindControlRules',
          component: () => import('@/view/ChannelManagement/WindControlRules'),
          meta: { title: '风控规则' }
        }
      ]
    },
    {
      path: '/reconciliationCenter',
      component: Layout,
      meta: { title: '对账中心' },
      children: [
        {
          path: '',
          name: 'CashReconciliationMerchants',
          component: () => import('@/view/ReconciliationCenter'),
          meta: { title: '入金对账(商户)' }
        },
        {
          path: 'cashReconciliationAcceptor',
          name: 'CashReconciliationAcceptor',
          component: () => import('@/view/ReconciliationCenter/CashReconciliationAcceptor'),
          meta: { title: '入金对账(承兑商)' }
        },
        {
          path: 'cashReconciliationRetailInvestors',
          name: 'CashReconciliationRetailInvestors',
          component: () => import('@/view/ReconciliationCenter/CashReconciliationRetailInvestors'),
          meta: { title: '入金对账(散户)' }
        },
        {
          path: 'cashReconciliation',
          name: 'CashReconciliation',
          component: () => import('@/view/ReconciliationCenter/CashReconciliation'),
          meta: { title: '出金对账' }
        },
        {
          path: 'acceptorsMargin',
          name: 'AcceptorsMargin',
          component: () => import('@/view/ReconciliationCenter/AcceptorsMargin'),
          meta: { title: '承兑商保证金' }
        },
        {
          path: 'retailDeposit',
          name: 'RetailDeposit',
          component: () => import('@/view/ReconciliationCenter/RetailDeposit'),
          meta: { title: '散户保证金' }
        },
        {
          path: 'accepterTransfersReconciliation',
          name: 'AccepterTransfersReconciliation',
          component: () => import('@/view/ReconciliationCenter/AccepterTransfersReconciliation'),
          meta: { title: '承兑商转出对账' }
        },
        {
          path: 'cashWithdrawalApplication',
          name: 'CashWithdrawalApplication',
          component: () => import('@/view/ReconciliationCenter/CashWithdrawalApplication'),
          meta: { title: '提现申请' }
        },
        {
          path: 'correctionRecord',
          name: 'CorrectionRecord',
          component: () => import('@/view/ReconciliationCenter/CorrectionRecord'),
          meta: { title: '冲正记录' }
        },
        {
          path: 'backgroundPushQuery',
          name: 'BackgroundPushQuery',
          component: () => import('@/view/ReconciliationCenter/BackgroundPushQuery'),
          meta: { title: '后台推送查询' }
        }
      ]
    },
    {
      path: '/systemManagement',
      component: Layout,
      meta: { title: '系统管理' },
      children: [
        {
          path: '',
          name: 'RoleManagement',
          component: () => import('@/view/SystemManagement'),
          meta: { title: '角色管理' }
        },
        {
          path: 'menuManagement',
          name: 'MenuManagement',
          component: () => import('@/view/SystemManagement/MenuManagement'),
          meta: { title: '菜单管理' }
        },
        {
          path: 'userManagement',
          name: 'UserManagement',
          component: () => import('@/view/SystemManagement/UserManagement'),
          meta: { title: '用户管理' }
        },
        {
          path: 'accountManagement',
          name: 'AccountManagement',
          component: () => import('@/view/SystemManagement/AccountManagement'),
          meta: { title: '账户管理' }
        },
        {
          path: 'logManagement',
          name: 'LogManagement',
          component: () => import('@/view/SystemManagement/LogManagement'),
          meta: { title: '日志管理' }
        }
      ]
    }
  ]
})

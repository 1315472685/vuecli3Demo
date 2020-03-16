import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/about/:id',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      meta: {
        title: '关于我们'
      }
    },
    {
      path: '/vuedraggable',
      name: 'vuedraggable',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "vuedraggable" */ './views/vuedraggable/vuedraggable.vue'),
      meta: {
        title: '拖拽插件'
      }
    },
    {
      path: '/element',
      name: 'element',
      component: () => import(/* webpackChunkName: "element" */ './views/element/element.vue'),
      meta: {
        title: 'elementUI按需引入'
      }
    },
    {
      path: '/ckeditor',
      name: 'ckeditor',
      component: () => import(/* webpackChunkName: "about" */ './views/ckeditor/ckeditor.vue'),
      meta: {
        title: '富文本框'
      }
    },
    {
      path: '/cjeditorVue',
      name: 'cjeditorVue',
      component: () => import(/* webpackChunkName: "about" */ './views/ckeditor/cjeditorVue.vue'),
      meta: {
        title: '富文本框'
      }
    },
    {
      path: '/ckeditorEasyimage',
      name: 'ckeditorEasyimage',
      component: () => import(/* webpackChunkName: "about" */ './views/ckeditor/ckeditorEasyimage.vue'),
      meta: {
        title: '富文本框简易图片'
      }

    },
    {
      path: '/vueChart',
      name: 'vueChart',
      component: () => import(/* webpackChunkName: "about" */ './views/chart/vueChart.vue'),
      meta: {
        title: 'vueChart图表插件'
      }

    },
    {
      path: '/AntDesignofVue',
      name: 'AntDesignofVue',
      component: () => import(/* webpackChunkName: "about" */ './views/AntDesignofVue/AntDesignofVue.vue'),
      meta: {
        title: 'AntDesignofVue UI框架'
      }
    }
  ]
})

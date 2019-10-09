import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/vuedraggable',
      name: 'vuedraggable',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "vuedraggable" */ './views/vuedraggable/vuedraggable.vue')
    },
    {
      path: '/element',
      name: 'element',
      component: () => import(/* webpackChunkName: "element" */ './views/element/element.vue')
    },
    {
      path: '/ckeditor',
      name: 'ckeditor',
      component: () => import(/* webpackChunkName: "about" */ './views/ckeditor/ckeditor4.vue')
    },
    {
      path: '/cjeditorVue',
      name: 'cjeditorVue',
      component: () => import(/* webpackChunkName: "about" */ './views/ckeditor/cjeditorVue5.vue')
    },
    {
      path: '/ckeditorEasyImage4',
      name: 'ckeditorEasyImage4',
      component: () => import(/* webpackChunkName: "about" */ './views/ckeditor/ckeditorEasyImage4.vue')
    }
  ]
})

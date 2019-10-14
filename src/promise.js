import router from './router'
router.beforeEach(async (to, from, next) => {
  // 只有当路由跳转的时候才会触发

  // end-----忘记密码返回--密码登录------
  to.matched.some(item => {
    document.title = item.meta.title
    window.scrollTo(0, 0)
    next()
  })
})

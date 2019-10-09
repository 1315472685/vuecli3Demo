import router from './router'
router.beforeEach(async (to, from, next) => {
  // 只有当路由跳转的时候才会触发

  // end-----忘记密码返回--密码登录------
  to.matched.some(item => {
    document.title = '练习'
    window.scrollTo(0, 0)
    next()
  })
})

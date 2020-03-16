// 导入自己需要的组件
import { Button, Affix } from 'ant-design-vue'
const antDesign = {
  install: function (Vue) {
    Vue.use(Button)
    Vue.use(Affix)
  }
}
export default antDesign

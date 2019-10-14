// 导入自己需要的组件
import VeLine from 'v-charts/lib/line.common'
import Vhistogram from 'v-charts/lib/histogram.common'
import Vpie from 'v-charts/lib/pie.common'
import Vring from 'v-charts/lib/ring.common'
import Vliquidfill from 'v-charts/lib/liquidfill.common'
import Vamap from 'v-charts/lib/amap.common'

const vueChart = {
  install: function (Vue) {
    Vue.component(VeLine.name, VeLine)
    Vue.component(Vhistogram.name, Vhistogram)
    Vue.component(Vpie.name, Vpie)
    Vue.component(Vring.name, Vring)
    Vue.component(Vliquidfill.name, Vliquidfill)
    Vue.component(Vamap.name, Vamap)
  }
}
export default vueChart

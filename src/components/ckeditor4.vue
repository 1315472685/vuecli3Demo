<template>
  <div>
    <el-button @click="add" type="primary" icon="el-icon-edit" circle></el-button>
    <p></p>
    <textarea :id="id"></textarea>
  </div>
</template>
<script>
export default {
  name: 'ckeditor4',
  props: ['value'],
  mounted: function () {
    window.CKEDITOR.addCss(
      'figure[class*=easyimage-gradient]::before { content: ""; position: absolute; top: 0; bottom: 0; left: 0; right: 0; }' +
        'figure[class*=easyimage-gradient] figcaption { position: relative; z-index: 2; }' +
        '.easyimage-gradient-1::before { background-image: linear-gradient( 135deg, rgba( 115, 110, 254, 0 ) 0%, rgba( 66, 174, 234, .72 ) 100% ); }' +
        '.easyimage-gradient-2::before { background-image: linear-gradient( 135deg, rgba( 115, 110, 254, 0 ) 0%, rgba( 228, 66, 234, .72 ) 100% ); }'
    )

    const self = this

    // 渲染编辑器
    // 使用该CKEDITOR.replace()方法将现有<textarea>元素替换为CKEditor。
    self.ckeditor = window.CKEDITOR.replace(self.id, {})

    // 设置初始内容
    self.ckeditor.setData(self.value)

    // 监听内容变更事件
    self.ckeditor.on('change', function () {
      self.$emit('input', self.ckeditor.getData())
    })
    // this.ckeditor.setData(this.value)
    // console.log(this.ckeditor)
  },
  data: function () {
    return {
      id: parseInt(Math.random() * 10000).toString(),
      ckeditor: null,
      content: ''
    }
  },
  watch: {
    // 监听prop的变化，更新ckeditor中的值
    value: function () {
      if (this.value !== this.ckeditor.getData()) {
        this.ckeditor.setData(this.value)
      }
    }
  },
  methods: {
    add () {
      let str1 =
        '<img alt="土星五号携带阿波罗11号" class="right" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1517952005,2185746019&fm=26&gp=0.jpg" />'

      if (this.content === str1) {
        console.log('121212')
        this.content =
          '<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 阿波罗11号</font></font></h1><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阿波罗11</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">号是航天飞机，于</font><font style="vertical-align: inherit;">1969年7月20日世界标准时间20:18 </font><font style="vertical-align: inherit;">登陆了第一批人类，美国人</font></font><a href="http://en.wikipedia.org/wiki/Neil_Armstrong"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尼尔&middot;阿姆斯特朗</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="http://en.wikipedia.org/wiki/Buzz_Aldrin"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">巴斯&middot;奥尔德林</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">6小时后的7月21日UTC，阿姆斯特朗成为第一个登上月球表面的<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阿姆斯特朗（Armstrong）在</font><font style="vertical-align: inherit;">飞船外面</font><font style="vertical-align: inherit;">呆了大约</font></font><s><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">三个</font></font></s><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">半小时半，阿尔德林少了一些; </font><font style="vertical-align: inherit;">他们一起收集了47.5磅（21.5千克）的月球物质返回地球。</font><font style="vertical-align: inherit;">使命的第三个成员，</font></font><a href="http://en.wikipedia.org/wiki/Michael_Collins_(astronaut)"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">迈克尔&middot;柯林斯</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，驾驶着</font></font><a href="http://en.wikipedia.org/wiki/Apollo_Command/Service_Module"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单独飞船在月球轨道上，直到阿姆斯特朗和奥尔德林回到了它的行程回地球。</font></font></p>'
      } else {
        this.content = str1
      }
      console.log(this.ckeditor.getData())
      this.ckeditor.setData(this.content)
    }
  },
  // 销毁组件前，销毁编辑器
  beforeDestroy: function () {
    this.ckeditor.destroy()
  }
}
</script>
<style scoped>
div {
  width: 80%;
  margin: 0 auto;
  text-align: center;
}
</style>

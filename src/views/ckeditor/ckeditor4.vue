<template>
  <div class="ckeditor">
    <el-button type="primary" round @click="changeVal">主要按钮</el-button>
    <p></p>
    <ckeditor4 :value="value"></ckeditor4>
  </div>
</template>

<script>
import ckeditor4 from '@/components/ckeditor4';
export default {
  name: 'ckeditor',
  components: {
    ckeditor4
  },
  data () {
    return {
      value:
        '<h1><img   alt="土星五号携带阿波罗11号" style="float:right" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1517952005,2185746019&fm=26&gp=0.jpg" /><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 阿波罗11号</font></font></h1><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阿波罗11</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">号是航天飞机，于</font><font style="vertical-align: inherit;">1969年7月20日世界标准时间20:18 </font><font style="vertical-align: inherit;">登陆了第一批人类，美国人</font></font><a href="http://en.wikipedia.org/wiki/Neil_Armstrong"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尼尔&middot;阿姆斯特朗</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="http://en.wikipedia.org/wiki/Buzz_Aldrin"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">巴斯&middot;奥尔德林</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">6小时后的7月21日UTC，阿姆斯特朗成为第一个登上月球表面的<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阿姆斯特朗（Armstrong）在</font><font style="vertical-align: inherit;">飞船外面</font><font style="vertical-align: inherit;">呆了大约</font></font><s><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">三个</font></font></s><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">半小时半，阿尔德林少了一些; </font><font style="vertical-align: inherit;">他们一起收集了47.5磅（21.5千克）的月球物质返回地球。</font><font style="vertical-align: inherit;">使命的第三个成员，</font></font><a href="http://en.wikipedia.org/wiki/Michael_Collins_(astronaut)"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">迈克尔&middot;柯林斯</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，驾驶着</font></font><a href="http://en.wikipedia.org/wiki/Apollo_Command/Service_Module"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单独飞船在月球轨道上，直到阿姆斯特朗和奥尔德林回到了它的行程回地球。</font></font></p>'
    }
  },
  methods: {
    changeVal () {
      console.log('changeVal')
      let str1 =
        '<h1><img alt="土星五号携带阿波罗11号" class="right" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1517952005,2185746019&fm=26&gp=0.jpg" /><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 阿波罗11号</font></font></h1><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阿波罗11</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">号是航天飞机，于</font><font style="vertical-align: inherit;">1969年7月20日世界标准时间20:18 </font><font style="vertical-align: inherit;">登陆了第一批人类，美国人</font></font><a href="http://en.wikipedia.org/wiki/Neil_Armstrong"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尼尔&middot;阿姆斯特朗</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="http://en.wikipedia.org/wiki/Buzz_Aldrin"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">巴斯&middot;奥尔德林</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">6小时后的7月21日UTC，阿姆斯特朗成为第一个登上月球表面的<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阿姆斯特朗（Armstrong）在</font><font style="vertical-align: inherit;">飞船外面</font><font style="vertical-align: inherit;">呆了大约</font></font><s><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">三个</font></font></s><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">半小时半，阿尔德林少了一些; </font><font style="vertical-align: inherit;">他们一起收集了47.5磅（21.5千克）的月球物质返回地球。</font><font style="vertical-align: inherit;">使命的第三个成员，</font></font><a href="http://en.wikipedia.org/wiki/Michael_Collins_(astronaut)"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">迈克尔&middot;柯林斯</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，驾驶着</font></font><a href="http://en.wikipedia.org/wiki/Apollo_Command/Service_Module"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单独飞船在月球轨道上，直到阿姆斯特朗和奥尔德林回到了它的行程回地球。</font></font></p>'
      let str2 =
        '<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 阿波罗11号</font></font></h1><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阿波罗11</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">号是航天飞机，于</font><font style="vertical-align: inherit;">1969年7月20日世界标准时间20:18 </font><font style="vertical-align: inherit;">登陆了第一批人类，美国人</font></font><a href="http://en.wikipedia.org/wiki/Neil_Armstrong"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尼尔&middot;阿姆斯特朗</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="http://en.wikipedia.org/wiki/Buzz_Aldrin"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">巴斯&middot;奥尔德林</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">6小时后的7月21日UTC，阿姆斯特朗成为第一个登上月球表面的<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阿姆斯特朗（Armstrong）在</font><font style="vertical-align: inherit;">飞船外面</font><font style="vertical-align: inherit;">呆了大约</font></font><s><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">三个</font></font></s><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">半小时半，阿尔德林少了一些; </font><font style="vertical-align: inherit;">他们一起收集了47.5磅（21.5千克）的月球物质返回地球。</font><font style="vertical-align: inherit;">使命的第三个成员，</font></font><a href="http://en.wikipedia.org/wiki/Michael_Collins_(astronaut)"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">迈克尔&middot;柯林斯</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，驾驶着</font></font><a href="http://en.wikipedia.org/wiki/Apollo_Command/Service_Module"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单独飞船在月球轨道上，直到阿姆斯特朗和奥尔德林回到了它的行程回地球。</font></font></p>'
      if (this.value === str1) {
        this.value = str2
      } else {
        this.value = str1
      }
    }
  }
}
</script>

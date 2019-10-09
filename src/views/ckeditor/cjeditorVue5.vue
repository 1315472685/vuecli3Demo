<template>
  <div class="app">
    <div id="toolbar-container"></div>

    <!-- 编辑器容器 -->
    <div id="editor">
      <img
        alt="土星五号携带阿波罗11号"
        class="right"
        src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1517952005,2185746019&fm=26&gp=0.jpg"
      />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      editor: null // 编辑器实例
    }
  },
  mounted () {
    this.initCKEditor()
  },
  methods: {
    initCKEditor () {}
  }
}
</script>
<style scoped>
</style>

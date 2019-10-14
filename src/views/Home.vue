<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/vuedraggable">vuedraggable</router-link>|
      <router-link to="/ckeditor">ckeditor</router-link>|
      <router-link to="/cjeditorVue">cjeditorVue</router-link>|
    </div>
    <div>
      <el-tag @click="enter('vueChart')">vueChart图表</el-tag>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {},
  methods: {
    enter (i) {
      console.log(i)
      this.$router.push({ name: i })
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  #nav {
    margin-bottom: 20px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>

<template>
  <div class="antDesign">
    <a-button type="primary">Primary</a-button>
    <a-button>Default</a-button>
    <a-button type="dashed">Dashed</a-button>
    <a-button type="danger">Danger</a-button>
    <a-button type="link">Link</a-button>
    <a-affix :offsetTop="this.top">
      <a-button type="primary" @click="()=>{this.top += 10}">Affix top</a-button>
    </a-affix>
  </div>
</template>
<script>
export default {
  name: 'antDesign',
  data () {
    return {
      top: 10
    }
  }
}
</script>
<style lang="scss" scoped>
.antDesign {
  height: 2000px;
  button {
    margin: 10px 10px 0 0;
  }
}
</style>

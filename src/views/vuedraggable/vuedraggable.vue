<template>
  <div class="draggable">
    <h3>拖拽功能</h3>
    <vuedraggable class="wrapper" v-model="fruit" :options="{group:'people'}">
      <transition-group>
        <div v-for="item1 in fruit" :key="item1" class="item">
          <p>{{item1}}</p>
        </div>
      </transition-group>
    </vuedraggable>
    <div class="box"></div>
    <vuedraggable class="wrapper" v-model="girl" :options="{group:'people'}">
      <transition-group>
        <div v-for="item1 in girl" :key="item1" class="item">
          <p>{{item1}}</p>
        </div>
      </transition-group>
    </vuedraggable>
  </div>
</template>
<script>
import vuedraggable from 'vuedraggable';
export default {
  name: 'vueDraggable',
  components: { vuedraggable },
  props: {},
  data () {
    return {
      list: [1, 2, 3, 4, 5, 6],
      fruit: ['apple', 'banana', 'orage'],
      girl: ['linzhil', 'cjk', 'bdyjy']
    }
  },
  created () {
    console.log(this.$route)
  },
  updated () {
    console.log(this.list)
  },
  methods: {}
}
</script>
<style scoped>
.box {
  height: 10px;
  background: brown;
}
.wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}
span {
  clear: both;
  width: 100%;
  overflow: hidden;
}
.item {
  box-sizing: border-box;
  border: 2px solid #fff;
  width: 100%;
  float: left;
  height: 50px;
  background-color: #42b983;
  color: #ffffff;
}
</style>

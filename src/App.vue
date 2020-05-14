<template>
  <div id="app">
    <!-- <router-view/> -->
    <!-- keep-alive 包裹动态组件的时候，会缓存不活动的组件实例，而不是销毁他们
    它自身是一个抽象组件，不会渲染一个dom，也不会出现在组件的父组件链中 
    新增include 和exclude属性允许组件有条件的缓存。二者都可以用逗号隔开，正则表达式或者一个数组-->
    <keep-alive :include="/hot/">  
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import eventBus from "./utils/enventbus";
export default {
  // 其他选型省略
  mounted() {
    this.$nextTick(() => {
      eventBus.on("setDialog", dialogInfo => {
        // 将弹窗相关信息、弹窗组件添加进 component 数组中
        this.items.push({ dialogInfo, component: ConfirmDialog });
      });
    });
  },
  computed:{
	    // key(){ 
	    //     return this.$route.path + Math.random();
	    // },
      keyval:{
        get: function () {
          return this.$route.path + Math.random();
        },
        set: function () {
          return this.$route.path + Math.random();
        }
      }
	}
};
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

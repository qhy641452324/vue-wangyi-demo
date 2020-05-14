<template>
  <div ref="scroll">
    <h1>app根组件</h1>
    <hr>
    <p v-bind:attr="item.price+1" class="item" v-for="(item,index) in items" :key="index">[商品名称]: {{item.name}}-[商品价格]:&yen;{{item.price}}</p>
  </div>
</template>
<script>
export default {
  data(){
    return {
      items: [],
      newPageInfo: {
        isLoadedData: false,
        pageNo: 1,  // 第一页
        pageSize: 15, // 每一次加载的最大页数
        dataList: [],
        loadMoreConfig: {
          onScrollBottom: this.onScrollBottomForNewPage,  //调用加载的方法
          scrollBottomOffset: 20,  //距离底部门槛阈值
          loading: false //是否加载
        }
      }
    }
  },
  created(){
    let arr=[];
    for(var i=0;i<15;i++){
      this.items.push({
        id:i,
        name:'商品'+i,
        price:i
      });
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      //可滚动容器的高度
      let innerHeight = this.$refs.scroll.clientHeight;
      //屏幕尺寸高度
      let outerHeight = document.documentElement.clientHeight;
      //可滚动容器超出当前窗口显示范围的高度
      let scrollTop = document.documentElement.scrollTop;
      //scrollTop在页面为滚动时为0，开始滚动后，慢慢增加，滚动到页面底部时，出现innerHeight < (outerHeight + scrollTop)的情况，严格来讲，是接近底部。
      console.log(innerHeight + " " + outerHeight + " " + scrollTop);
      if (innerHeight <= outerHeight + scrollTop) {
        //加载更多操作
        // console.log("loadmore");
        for(var i=0;i<15;i++){
          var now=Date.now();
          // 更新数据; 在items数组中新增10条数据
          this.items.push({
            id:now,
            name:'商品'+now,
            price:now.toString().substr(10,3)
          });
        }
      }
    }
  }
};
</script>
<style scoped lang="less">
.item{
  border:1px solid #CCC;
  padding: 10px;
  margin: 10px;
}
</style>


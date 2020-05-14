<template>
  <section class="list-warp">
    <div class="title cell">
      <h2>load-more</h2>
    </div>
    <div class="list">
      <loadmore :onLoadMore="onLoadMore" :enableLoadMore="enableLoadMore" :noData="noData">
        <div class="item cell" v-for="(item,index) in list" :key="index">
          <div>
            <span class="name">{{item.name}}</span>
            <span>{{item.price}}</span>
          </div>
          <div class="status">
            <span class="examing">............</span>
          </div>
        </div>
      </loadmore>
    </div>
  </section>
</template>
<script>
import loadmore from "../components/loadlist";
export default {
  components: {
    loadmore
  },
  data () {
    return {
      page: 1, //当前页
      size: 10, //分页初始值
      enableLoadMore: true, //加载更多按钮是否展示
      noData: false,
      list: [] //列表数据
    };
  },
  created(){
    let arr=[];
    for(var i=0;i<15;i++){
      this.list.push({
        id:i,
        name:'商品'+i,
        price:i
      });
    }
  },
  mounted () {
    this.getLoad();
  },
  methods: {
    //数据加载
    getLoad () {
      let params = {
        page: this.page,
        size: this.size
      };
      for(var i=0;i<15;i++){
          var now=Date.now();
          // 更新数据; 在items数组中新增10条数据
          this.list.push({
            id:now,
            name:'商品'+now,
            price:now.toString().substr(10,3)
          });
        }

        if(this.page > 4){
            this.enableLoadMore = false;
            // this.noData = true
        }
        console.log(this.page)
    },
    //上拉加载更多
    onLoadMore (done) {
      this.page++;
      if (this.enableLoadMore) {
        this.getLoad();
        // done();
      }
    }
  }
};
</script>
<style lang='less'>
 
</style>
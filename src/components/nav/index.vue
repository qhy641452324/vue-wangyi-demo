<template>
  <div class="m-tabarea-index">
    <div class="utab-header">
        <div class="topfix">
            <div class="tt">网易云音乐</div>
            <div class="topfr"><span class="f-bd f-bd-full topbton">下载APP</span></div>
        
        </div>
        <nav class="u-tab">
            <router-link to="/" class="tabtitle ">
                <span class="txt" @click="newcur=0" :class="{zselected:newcur==0}">推荐音乐</span>
            </router-link>
            <router-link to="/hot" class="tabtitle ">
                <span class="txt" @click="newcur=1" :class="{zselected:newcur==1}">热歌榜</span>
            </router-link>
            <router-link to="search" class="tabtitle ">
                <span class="txt" @click="newcur=2" :class="{zselected:newcur==2}">搜索</span>
            </router-link>
        </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props:["cur"],
  data () {
    return {
    //  newcur: null //默认选中第一个tab
    }
  },
  computed: {
    //  newcur : function(){
    //    return this.cur;
    //  } 
    newcur:{
        get: function () {
          return this.cur
        },
        set: function () {}
    }
  }

}
</script>

<style lang="less" scoped>
.m-tabarea-index {
    .utab-header{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 999;
        .topfix{
            display: flex;
            background-color: #d43c33;
            box-sizing: border-box;
            height: .84rem;
            width: 100%;
            justify-content: space-between;
            -webkit-box-align: center;
            align-items: center;
            padding: 0 10px;
            .tt{
                font-size: 18px;
                color: aliceblue;
                font-weight: 400;
            }
            .topfr{
                border: 1px;
                .topbton{
                    position: relative;
                    display: inline-block;
                    height: 36px;
                    line-height: 36px;
                    font-size: 16px;
                    width: 100px;
                    text-align: center;
                    color: #d43c33;
                    background-color: #fff;
                    border-radius: 18px;
                }
            }
        }
    }
  .u-tab{
        align-items: center;
        width: 100%;
        height: .4rem;
        line-height: .4rem;
        background-color: #fff;
        display: flex;
        z-index: 100;
        justify-content: center;
        border-bottom: 1px solid #ccc;
        .tabtitle{
          flex: 1;
          display: block;
          text-align: center;
          cursor: pointer;
          font-size: .14rem;
          
          .txt{
            height: 100%;
            color: #333;
            position: relative;
            display: inline-block;
            max-width: 100%;
            height: 100%;
            padding: 0 5px;
            box-sizing: border-box;
            color: #333;
            font-size: 15px;
            line-height: 40px;
          }
          .zselected{
            color: #dd001b;
            border-bottom: 2px solid red;
          }
        }
        
  }
}


</style>

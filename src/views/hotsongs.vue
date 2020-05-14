<template>
  <div style="">
     <topnav :cur="1"></topnav>
     <div class="hotcontent">
       <!-- <div class="dir1">
        <span>我是一个vue自定义指令</span>
        <span v-hqcolor>{{number}}</span>
       </div> -->

       <div class="hotop">
         <div class="hotopct">
            <div class="u-hmsprt hoticon"></div>
            <div class="hottime">更新日期：04月02日</div>
            <span v-hqcolor>{{number}}</span>
         </div>
       </div>

       <songlist :showh="false" :showf="false"></songlist>

       <div class="hotdn"><span class="hotview">查看完整榜单</span></div>
       
     </div>
  </div>
</template>


<script type="text/javascript">
import topnav from '../components/nav';
import songlist from "../components/songlist";


export default {
  name: 'hot',
  data () {
    return {
      cur:1,
      number:''
    }
  },
  components:{
      topnav,
      songlist
  },
  created(){
    let that = this;
    that.number = that.getnumber()
  },
  beforeMount(){
    let that = this;
    setInterval(function(){
      that.number = that.getnumber()
    },3000)
  },
  mounted(){
    
  },
  methods:{
    getnumber:function(){
      return (Math.random()*10 - 5).toFixed(2);
    }
  }
}
</script>

<style lang="less">
  .hotcontent{
    margin-top: 1.24rem;
    .dir1{
      margin: .1rem 0 0 0;
      padding-left: .1rem;
      display: inline-block;
      width: 100%;
      text-align: left;
    }

    .hotop{
      position: relative;
      padding-top: 38.9%;
      overflow: hidden;
      background: url("https://s3.music.126.net/mobile-new/img/hot_music_bg_2x.jpg?f01a252389c26bcf016816242eaa6aee=") no-repeat;
      background-size: contain;
      .hotopct{
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        -webkit-box-pack: center;
        justify-content: center;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 2;
        padding-left: 20px;
        box-sizing: border-box;
      }
      .hoticon{
          width: 142px;
          height: 67px;
      }
      .u-hmsprt{
          background: url("https://s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28c3767992ca4bb6d4887c74880=") no-repeat;
          background-size: 166px 97px;
          background-position: -24px -30px;
      }
      .hottime{
        margin-top: 10px;
        color: hsla(0,0%,100%,.8);
        font-size: 12px;
        transform: scale(.91);
        transform-origin: left top;
        text-align: left;
      }
    }

    .hotdn{
      // height: 55px;
      // line-height: 55px;
      text-align: center;
      .hotview{
          display: inline-block;
          color: #999;
          padding-right: 14px;
          background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNCAyMiI+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjY2NjIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTEgMWwxMCAxMEwxIDIxIi8+PC9zdmc+") 100% no-repeat;
          background-size: 7px 12px;
          height: 55px;
          line-height: 58px;
          text-align: center;
      }
    }
  }
</style>



<template>
  <div class="searcontent">
     <topnav :cur="2"></topnav>

     <div class="">
       <!-- <p class="ttlab">组件测试</p>
        <child :arrayData="arrayData">
          <span style="color: red;">我将替换子组件插槽:父组件插入子组件</span>
          
          <span slot="name_slot" style="color: #11caff;">我将替换子组件slot name="name_slot"的插槽</span>
        
          <span slot="array_data" style="color: green;" slot-scope="arrayData">{{arrayData}}</span>
          
        </child>

        <custom-input v-model="searchText"></custom-input>

        <div class="txt">预览图中绿色1</div>
        <div class="txt2">预览图中绿色2</div>
        <div class="txt3">预览图中绿色3</div> -->
        <form class="m-input" method="get" action="#">
          <div class="inputcover">
            <i class="u-svg u-svg-srch"></i>
            <input type="search" name="search" class="input" placeholder="" autocomplete="off" value="">
            <label class="holder">搜索歌曲、歌手、专辑</label>
            <figure class="close">
              <i class="u-svg u-svg-empty"></i>
            </figure>
          </div>
        </form>

        <div class="m-default">
          <section class="m-hotlist" style="display:block;">
            <h3 class="title">热门搜索</h3>
            <ul class="list">
              <li class="item f-bd f-bd-full"><a class="link" href="javascript:void(0);">好想爱这个世界啊</a></li>
              <li class="item f-bd f-bd-full"><a class="link" href="javascript:void(0);">万有引力</a></li>
              <li class="item f-bd f-bd-full"><a class="link" href="javascript:void(0);">eight</a></li>
              <li class="item f-bd f-bd-full"><a class="link" href="javascript:void(0);">RADWIMPS</a></li>
              <li class="item f-bd f-bd-full"><a class="link" href="javascript:void(0);">护士节</a></li>
              <li class="item f-bd f-bd-full"><a class="link" href="javascript:void(0);">丢了你</a></li>
              <li class="item f-bd f-bd-full"><a class="link" href="javascript:void(0);">mom</a></li>
              <li class="item f-bd f-bd-full"><a class="link" href="javascript:void(0);">相信未来义演</a></li>
              <li class="item f-bd f-bd-full"><a class="link" href="javascript:void(0);">Stuck with U</a></li>
              <li class="item f-bd f-bd-full"><a class="link" href="javascript:void(0);">千千阙歌</a></li>
            </ul>
          </section>
        </div>

     </div>
  </div>
</template>


<script>
import Vue from 'vue'
import topnav from '../components/nav';
import child from '../components/slottest';


Vue.component('custom-input', {
  props: ['value'],
  template: `
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
  `
})

export default {
  name: 'search',
  data() {
      return { 
          arrayData: [
              {id: 'a1', name: 'aa1',des: 'des1'},
              {id: 'a2', name: 'aa2',des: 'des2'},
              {id: 'a3', name: 'aa3',des: 'des3'}
          ],
          searchText:'this is a test '   
      }
  },
  methods:{
    getdata(){
      
    }
  },
  created(){

  },
  components:{
      topnav,
      child
  }
}

</script>

<style lang="less" >
  .searcontent{
    margin-top: 1.24rem;
    .ttlab{
      font-size: .18rem;
      padding: 10px;
    }

    .txt{
      // margin-top: 10px;
      // font-size: 1.6rem;
      font-size: .1rem;
      line-height: 1;
    }
    .txt2{
      margin-top: 10px;
      font-size: .16rem;
      line-height: .16rem;
      // font-size: 1rem;
    }
    .txt3{
      margin-top: 10px;
      font-size: 16px;
      line-height: 16px;
    }
    .m-input{
      position: relative;
      padding: 15px 10px;
      .inputcover{
        position: relative;
        width: 100%;
        height: 30px;
        padding: 0 30px;
        box-sizing: border-box;
        background: #ebecec;
        border-radius: 30px;
        .u-svg-srch {
            position: absolute;
            left: 0;
            top: 9px;
            margin: 0 8px;
            vertical-align: middle;
        }
        .u-svg-srch {
            width: 13px;
            height: 13px;
            background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNiAyNiI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjYzljOWNhIiBkPSJNMjUuMTgxIDIzLjUzNWwtMS40MTQgMS40MTQtNy4zMTUtNy4zMTRBOS45NjYgOS45NjYgMCAwIDEgMTAgMjBDNC40NzcgMjAgMCAxNS41MjMgMCAxMFM0LjQ3NyAwIDEwIDBzMTAgNC40NzcgMTAgMTBjMCAyLjM0Mi0uODExIDQuNDktMi4xNiA2LjE5NWw3LjM0MSA3LjM0ek0xMCAyYTggOCAwIDEgMCAwIDE2IDggOCAwIDAgMCAwLTE2eiIvPjwvc3ZnPg==");
        }
        .input {
            width: 100%;
            height: 30px;
            line-height: 18px;
            background: rgba(0,0,0,0);
            font-size: 14px;
            color: #333;
            outline: none;
            -webkit-appearance: none;
            border-radius: 0;
            border: 0;
        }
        .holder {
            position: absolute;
            left: 30px;
            top: 5px;
            font-size: 14px;
            color: #c9c9c9;
            background: rgba(0,0,0,0);
            pointer-events: none;
        }
        .close {
            position: absolute;
            right: 0;
            top: 0;
            width: 30px;
            height: 30px;
            line-height: 28px;
            text-align: center;
        }
      }


    }
      .m-default{
       .m-hotlist {
            padding: 15px 10px 0;
            .title {
                font-size: 12px;
                line-height: 12px;
                color: #666;
                text-align: left;
            }
            .list {
                margin: 10px 0 7px;
                .item {
                    position: relative;                      
                    display: inline-block;
                    height: 32px;
                    margin-right: 8px;
                    margin-bottom: 8px;
                    padding: 0 14px;
                    font-size: 14px;
                    line-height: 32px;
                    color: #333;
                    a{
                      color: #333;
                    }
                }
                .f-bd:after {
                    position: absolute;
                    z-index: 2;
                    content: "";
                    top: 0;
                    left: 0;
                    pointer-events: none;
                    box-sizing: border-box;
                    width: 100%;
                    height: 100%;
                    -webkit-transform-origin: top left;
                    -ms-transform-origin: top left;
                    transform-origin: top left;
                    border: 1px solid rgba(0,0,0,.1);
                    border-color: #d3d4da;
                    border-radius: 32px;
                    
                }
            }
        }       
      }

    // .txt{
    //   font-size: 16px;
    //   font-size: 1rem;
    //   font-size: .75rem;
    // }
  }
</style>



<template>
  <div class="list-block">
      <div class="title">推荐歌单</div>
      <div class="remd_songs">
          <div class="item-wrap">
            <div class="child-item" v-for="item in favoritelist">
                <div class="imgbox">
                    <img v-lazy="item.al.picUrl" alt="">
                </div>
                <p class="name">{{item.al.name}}</p>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: '',
    data () {
        return {
            favoritelist:[]
        }
    },

    mounted() {
      this.getlist();
    },
    methods: {
      getlist() {
        var _this = this;
        this.http.get('cloudmusic', { type: "playlist", id: "2022110447" }).then(res => {
          let data = res.data.playlist.tracks.slice(0, 6);
          _this.favoritelist = data;
        })

      }
    },
}
</script>

<style lang="less">
    .list-block{
        padding-top: .2rem;
        .title{
            position: relative;
            padding-left: 9px;
            margin-bottom: 14px;
            font-size: 17px;
            height: 20px;
            line-height: 20px;
            text-align: left;
            font-weight: 400;
            &::after{
                content: " ";
                position: absolute;
                left: 0;
                top: 50%;
                margin-top: -9px;
                width: 2px;
                height: 16px;
                background-color: #d33a31;
            }
        }

        .remd_songs{
            position: relative;
            padding-bottom: .24rem;
            .item-wrap{
                flex-wrap: wrap;
                display: flex;
                justify-content: end;
                min-height: 3.28rem;
                .child-item{
                    width: 31%;
                    margin: 0 0 .06rem .06rem;
                    box-shadow: 6px 6px 3px #c3c3c3;
                    
                    .imgbox{
                        position: relative;
                        height: 1.22rem;
                        text-align: center;
                        line-height: 1.22rem;
                        img{
                            width: 100%;
                            height:100%;
                            display: block;
                        }
                        img[lazy = 'loading']  {
                            width: 29px !important;
                            height: 34px!important;
                        }
                        img[lazy = 'loaded']  {
                            background-color: #ffffff !important;
                            width: 100%;
                        }
                    }
                    .name {
                        font-size: 0.13rem;
                        color: #333;
                        text-align: center;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                        padding: 6px 2px 0 6px;
                        min-height: .3rem;
                        line-height: 1.2;
                    }
                }
            }
        }
    }
</style>


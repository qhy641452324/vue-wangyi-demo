<template>
  <div class="">
    <topnav :cur="0"></topnav>
    <div class="main-content">
      <listblock></listblock>
      <songlist :showh="true" :showf="true"></songlist>
    </div>
    
  </div>
</template>

<script>
import topnav from "../components/nav";
import listblock from "../components/albumlist";
import songlist from "../components/songlist";
export default {
  name: '',
  data () {
    return {

    }
  },
  components:{
    topnav:topnav,
    listblock:listblock,
    songlist:songlist
  }
}
</script>

<style lang="less">
    .main-content{
      margin-top: 1.24rem;
    }
</style>



<template>
    <div class="sidebar">
       <h1>单个插槽</h1>
       <div class="slot"><slot></slot></div>
        <h1>具名插槽</h1>
       <div class="nameSlot"><slot name="name_slot"></slot></div>

       <h3>作用域插槽</h3>
        <div class="city">
           <li v-for="item in arrayData" :key="item.id">
               <span>id:{{item.id}}</span>
               <span>name:{{item.name}}</span>
               <span>des:{{item.des}}</span>
               <div class="tableSlot">
                   <slot name="array_data" :iteminfos="item.id"></slot>
                </div>
           </li>
       </div>
    </div>
</template>

<script>
    export default {
        props:["arrayData"],
        data() {
            return {  
            }
        },
        computed:{
           
        }
    }
</script>

<style scoped>
    .sidebar{
        text-align: left;
    }
</style>

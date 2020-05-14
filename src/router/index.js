import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import hot from '@/views/hotsongs.vue'
import search from '@/views/search.vue'
import test from '@/views/test.vue'
import loadtest from '@/views/loadmore.vue'

Vue.use(Router)

var routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: index
  },
  {
    path: '/hot',
    name: 'hot',
    component: hot
  },
  {
    path: '/search',
    name: 'search',
    component: search
  },
  {
    path: '/test',
    name: 'test',
    component: test
  },
  {
    path: '/loadtest',
    name: 'loadtest',
    component: loadtest
  }
]

export default new Router({
  routes: routes
})

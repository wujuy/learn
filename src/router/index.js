import Vue from 'vue'
import Router from 'vue-router'
import BinaryTree from '@/components/binarytree'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'binarytree',
      component: BinaryTree
    }
  ]
})

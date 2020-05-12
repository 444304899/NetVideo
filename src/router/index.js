import Vue from 'vue'
import Router from 'vue-router'
import Gresource from '@/components/Gresource'
import Index from '@/components/Index'
import Film from '@/components/Film'
import Tag from '@/components/Tag'
Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/gresource',
      name: 'Gresource',
      component: Gresource
    },
    {
      path: '/film',
      name: 'Film',
      component: Film
    },
    {
      path: '/tag',
      name: 'Tag',
      component: Tag
    },
  ]
})

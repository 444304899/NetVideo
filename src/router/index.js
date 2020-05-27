import Vue from 'vue'
import Router from 'vue-router'
import Gresource from '@/components/Gresource'
import Index from '@/components/Index'
import Film from '@/components/Film'
import FilmList from '@/components/FilmList'
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
      component: FilmList,
      children: [
        {
          path: 'list2-1',
          name: 'List2-1',
          component: FilmList,
        },
        {
          path: 'list2-2',
          name: 'List2-1',
          component: FilmList
        }
      ]
    },
    {
      path: '/tag',
      name: 'Tag',
      component: Tag,
      children: [
        {
          path: 'maoxian',//以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
          name: 'Maoxian',
          component: Tag
        },
        {
          path: 'jvqing',
          name: 'Jvqing',
          component: Tag
        }
      ]
    },
  ]
})

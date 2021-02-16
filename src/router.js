import Vue from 'vue'
import Router from 'vue-router'

const Comic = () => import('./views/Comic')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/comic/:id',
      component: Comic,
      props: true,
    },
    {
      path: '/',
      component: Comic,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
})

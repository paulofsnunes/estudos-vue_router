import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
const CursosView = () => import(/* webpackChunkName: "curso" */ '../views/CursosView.vue')
// import CursosView from '../views/CursosView.vue'
const MateriasView = () => import(/* webpackChunkName: "curso" */ '../views/MateriasView.vue')
// import MateriasView from '../views/MateriasView.vue'
const AulasView = () => import(/* webpackChunkName: "curso" */ '../views/AulasView.vue')
// import AulasView from '../views/AulasView.vue'
const DescricaoView = () => import(/* webpackChunkName: "curso" */ '../views/DescricaoView.vue')
// import DescricaoView from '../views/DescricaoView.vue'
import AcoesView from '../views/AcoesView.vue'
import AcoesDados from '../views/AcoesDados.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  // base: "app",
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      // name: 'home',
      // component: HomeView
      components: {
        default: HomeView,
        sidebar: AcoesView
      }
    },
    {
      path: '/origamid',
      redirect: "/"
    },
    {
      path: '*',
      redirect: "/"
    },
    {
      path: '/acoes',
      // name: 'acoes',
      // component: AcoesView,
      components: {
        default: AcoesView,
        sidebar: HomeView
      },
      children: [
        {
          path: ":simbolo",
          component: AcoesDados,
          props: true
        }
      ]
    },
    {
      path: '/cursos',
      // name: 'cursos',
      component: CursosView,
      props: true,
      // beforeEnter: (to, from, next) => {
      //   console.log("Foi para cursos")
      //   next();
      // },
      children: [
        {
          name: "curso",
          path: ':curso',
          component: MateriasView,
          props: true,
          children: [
            {
              name: 'aulas',
              path: 'aulas',
              component: AulasView,
            },
            {
              name: 'descricao',
              path: 'descricao',
              component: DescricaoView,
            }
          ]
        }
      ]
    }
    // {
    //   path: '/cursos/:curso',
    //   name: 'cursos',
    //   component: CursosView,
    //   props: true
    //   route level code-splitting
    //   this generates a separate chunk (about.[hash].js) for this route
    //   which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    // }
  ],
  scrollBehavior () {
    return window.scrollTo({ top: 0, behavior: 'smooth' });
    // return {
    //   x: 0,
    //   y: 0
    // }
  }
})

export default router

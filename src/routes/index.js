import { createRouter, createWebHashHistory }  from 'vue-router'
import Home from './Home'
import Movie from './Movie'
import About from './About'
export default createRouter({
  // 1. Hash 모드, History 모드
  // Hash mode -> https://google.com/#/search
  history: createWebHashHistory(),
  // pages 구분
  // https://google.com/
  routes: [
    {
      path: '/', // 메인페이지로 이동한다는 의미.
      component: Home
    },
    {
      path: '/movie',
      component: Movie
    },
    {
      path: '/about',
      component: About
    }
  ]
})
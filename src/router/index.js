import Vue from 'vue'
import Router from 'vue-router'
import left from '@/components/left'
import main from '@/components/main'
import right from '@/components/right'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        left: left,
        main: main,
        right: right
      }
    }
  ]
})

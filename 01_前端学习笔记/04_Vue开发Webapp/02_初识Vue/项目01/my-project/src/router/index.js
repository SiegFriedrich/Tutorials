import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import demo1 from '@/pages/demo1/HelloImooc.vue'
import demo2 from '@/pages/demo2/Demo2.vue'
import exs1 from '@/pages/exs1/exs1.vue'
import demo3 from '@/pages/demo3/Demo3.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
	{
	  path: '/demo1',
	  name: 'demo1',
	  component: demo1
	},
	{
	  path: '/demo2',
	  name: 'demo2',
	  component: demo2
	},
	{
	  path: '/exs1',
	  name: 'exs1',
	  component: exs1
	},
	{
	  path: '/demo3',
	  name: 'demo3',
	  component: demo3
	}
  ]
})

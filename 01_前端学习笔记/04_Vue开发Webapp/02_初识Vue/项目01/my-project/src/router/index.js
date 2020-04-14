import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import demo1 from '@/pages/demo1/HelloImooc.vue'
import demo2 from '@/pages/demo2/Demo2.vue'
import exs1 from '@/pages/exs1/exs1.vue'
import demo3 from '@/pages/demo3/Demo3.vue'
import exs2 from '@/pages/exs2/exs2.vue'
import demo4 from '@/pages/demo4/Demo4.vue'
import demo5 from '@/pages/demo5/Demo5.vue'
import exs3 from '@/pages/exs3/exs3.vue'
import demo6 from '@/pages/demo6/Demo6.vue'

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
	},
	{
	  path: '/exs2',
	  name: 'exs2',
	  component: exs2
	},
	{
	  path: '/demo4',
	  name: 'demo4',
	  component: demo4
	},
	{
	  path: '/demo5',
	  name: 'demo5',
	  component: demo5
	},
	{
	  path: '/exs3',
	  name: 'exs3',
	  component: exs3
	},
	{
	  path: '/demo6',
	  name: 'demo6',
	  component: demo6
	}
  ]
})

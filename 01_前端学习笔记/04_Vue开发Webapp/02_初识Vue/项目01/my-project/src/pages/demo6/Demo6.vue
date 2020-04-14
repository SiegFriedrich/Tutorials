<template>
  <div>
	  <h2>Hello Demo6!</h2>
	  
	  <div class="button">
		  <h1 @click="show = !show">想操谁?!!!</h1>
	  </div>
	  
	  <transition name="fade">
		  <h1 v-if="show">你</h1>
	  </transition>
	  

  </div>
</template>

<script>
	import countdown from '@/pages/demo4/Demo4.vue'
	
	export default{
		data(){
			return{
				show: false
			}
		}
	}
</script>
<style>
	.button{
		height: 85px;
		width: 200px;
		margin: 0 auto;
		background-color: lightgreen;
		border: solid 1px;
		border-radius: 10px ;
	}
	h1{
		cursor: pointer;
	}
	.fade-leave-active, .fade-enter-active{
		transition: opacity .5s;
	}
	.fade-leave-to, .fade-enter{
		opacity: 0;
	}
	.fade-enter-to{
		opacity: 1;
	}
</style>

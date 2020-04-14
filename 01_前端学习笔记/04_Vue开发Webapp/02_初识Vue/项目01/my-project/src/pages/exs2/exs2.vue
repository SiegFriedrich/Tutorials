<template>
  <div>  
	  <div v-html="inHtml" v-bind:class="btn" v-on:click="popup()"></div>

  </div>
</template>

<script>
	export default{
		data(){
			return{
				inHtml:'<button >click me</button>',
				btn:'btn'
			}
		},
		methods:{
			popup(){
				alert('Click Success!!!')
			}
		}
	}
</script>


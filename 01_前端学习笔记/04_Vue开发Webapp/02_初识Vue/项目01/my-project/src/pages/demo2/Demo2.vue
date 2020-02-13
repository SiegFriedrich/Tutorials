<template>
  <div>
	  Hello Demo2!
	  
	  <div>{{msg}}</div>
	  <div>---------------------</div>
	  <div>{{aDouble}}</div>
  </div>
</template>

<script>
	export default{
		data(){
			return{
				msg: 'Hello Sieg',
				num: 2
			}
		},
		computed:{
			aDouble(){
				return this.num * 2;
			}
		}
	}
</script>


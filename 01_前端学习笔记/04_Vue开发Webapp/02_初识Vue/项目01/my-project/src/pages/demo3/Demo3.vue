<template>
  <div>
	  Hello Demo3!
	  
	  <div>{{reverseMessage}}</div>
  </div>
</template>

<script>
	export default{
		data(){
			return{
				msg: 'Hello Sieg',
				num: 2,
				message: 'Helloworld'
			}
		},
		computed:{
			reverseMessage(){
				return this.message.split('').reverse().join('');
			}
		}
	}
</script>


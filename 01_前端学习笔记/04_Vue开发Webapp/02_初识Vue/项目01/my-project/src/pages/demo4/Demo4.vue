<template>
  <div>
	  Hello Demo4!
	  <h3>倒计时</h3>
	  <div>{{time}}</div>
  </div>
</template>

<script>
	export default{
		data(){
			return{
				time:10
			}
		},
		mounted(){
			var vm = this;
			var t = setInterval(function(){
				vm.time --;
				if(vm.time == 0){
					clearInterval(t);
				}
			},1000)
		}
	}
</script>


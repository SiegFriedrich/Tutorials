<template>
  <div>  
	  <div>{{title}}</div>
	  <div>{{line1}}</div>
	  <div>{{line2}}</div>
  </div>
</template>

<script>
	export default{
		data(){
			return{
				title: '《诗经国风 .周南》',
				line1: ' 关关雎鸠，在河之洲。',
				line2: ' 窈窕淑女，君子好逑。'
			}
		},
		computed:{
			aDouble(){
				return this.num * 2;
			}
		}
	}
</script>


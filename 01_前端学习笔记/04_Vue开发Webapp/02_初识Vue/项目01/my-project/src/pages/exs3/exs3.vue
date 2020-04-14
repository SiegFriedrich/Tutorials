<template>
  <div>  
  EXS3
	  <div>{{popupLine}}</div>

  </div>
</template>

<script>
	export default{
		data(){
			return{
				queue:[1,4,6,7,-9,4,0,-2,-1,8],
				newArr : []
			}
		},
		computed:{
			popupLine : function(){
				this.newArr = this.queue.sort(function(x,y){
					return x - y;
				});
				return this.newArr;
			},
			
		}
	}
</script>


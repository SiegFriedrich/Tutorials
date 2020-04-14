<template>
	<div class="c-header">
		<ul class="header-ul">
			<li>推荐</li>
			<li>课程</li>
			<li>实战</li>
			<li>职业路线</li>
			<li class="header-search"><img src="../../assets/search.png" /> </li>
			<li class="header-history"><img src="../../assets/history.png" /></li>
		</ul>
	</div>
</template>

<style scoped>
	.c-header{
		position: fixed;
		width: 375px;
		height: 44px;
		background-color: #FFF;
		top:0;
		z-index: 3;
		box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);
	}
	.header-ul li{
		float: left;
		font-size: 16px;
		color: #71777D;
		line-height: 44px;
		padding-left: 20px;
	}
	.header-ul img{
		width: 18px;
		margin-top: 13px;
	}
	.header-ul .header-search{
		margin-left: 40px;
	}
	
</style>
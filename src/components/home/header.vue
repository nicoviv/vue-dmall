<template>
	<header class="header">
		<div class="header-logo"></div>
		<div class="header-title">多点</div>
		<router-link to="search">
			<div class="header-search"></div>
		</router-link>
	</header>
</template>

<style scoped>
	.header{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		display: flex;
		justify-content: space-between;
		width: 100%;
		height: 1.333333rem;
		line-height: 1.333333rem;
		background: #fff;
		z-index: 100;	
	}
	.header-logo{
		width: 1.226667rem;
		height: 1.226667rem;
		background: url(/../../../static/img/sprt.png) -8.866667rem -2.566667rem;
		background-size: 1000%;
	}
	.header-title{
		width: 8rem;
		font-size: 0.6rem;
		text-align: center;
		color: #ff6161;
	}
	.header-search{
		width: 1.226667rem;
		height: 1.226667rem;
		background: url(/../../../static/img/sprt.png) 0.126667rem -1.45667rem;
		background-size: 1100%;
	}
</style>

<script>
	
</script>
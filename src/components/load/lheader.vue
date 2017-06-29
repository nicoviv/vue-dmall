<template>
	<div class="load-header">
		<div class="back">
			<router-link to="mine">
				<div>＜</div>
			</router-link>	
		</div>
		<div class="account">
			登录账号
		</div>
	</div>
</template>

<script>
	
</script>

<style scoped>
	.load-header{
		height: 1.1rem;
	}
	.back{
		float: left;
		margin: 0.1rem 0.3rem;
		border-radius: 50%;
		width: 1rem;
		background-color: #333;
	}
	.back div{
		color: #fff;
		line-height: 1rem;
		text-align: center;
		font-size: 0.5rem;
	}
	.account{
		float: left;
		margin: 0.1rem 2rem;
		font-size: 0.8rem;
	}
</style>
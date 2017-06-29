<template>
	<div>
		<div class="tel">
			<input type="tel" placeholder="请输入您的手机号">
		</div>
		<div class="pwd">
			<input type="text" placeholder="请输入密码">
		</div>
		<h2>
			<router-link to="mine">确定</router-link>
		</h2>
	</div>
</template>

<script>
	
</script>

<style scoped>
	.tel,.pwd{
		/*height: 1rem;*/
		margin: 0.2rem auto;
		border: 1px solid gray;
		box-sizing: border-box;
	}
	input{
		height: 1rem;
		font-size: 0.5rem;
		border: none;
		outline: none;
		text-indent: 1em; 
		width: 100%;
	}
	h2{
		text-align: center;
		margin: 0.5rem auto;
		width: 90%;
		font-weight: 200;
		color: #fff;
		background-color: orange;
		height: 1.2rem;
		line-height: 1.2rem;
		border-radius: 0.5rem;
	}
</style>
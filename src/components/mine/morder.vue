<template>
	<div class="">
		<ul class="order">
			<li>待支付</li>
			<li>未完成</li>
			<li>已完成</li>
			<li>全部订单</li>
		</ul>
	</div>
</template>

<script>
	
</script>

<style scoped>
	.order{
		display: flex;
		align-items: center;
		padding: 0.533333rem 0;
	}
	li{
		width: 25%;
		text-align: center;
		font-size: 0.426667rem;
	}
	.order li:before{
		display: block;
		content: "";
		width: 0.691244rem;
		height: 0.691244rem;
		margin: 0 auto;
	}
	.order li:nth-child(1):before{
		background: url(/../../../static/img/m1.gif);
		background-size: cover;
	}
	.order li:nth-child(2):before{
		background: url(/../../../static/img/m2.gif);
		background-size: cover;
	}
	.order li:nth-child(3):before{
		background: url(/../../../static/img/m3.gif);
		background-size: cover;
	}
	.order li:nth-child(4):before{
		background: url(/../../../static/img/m4.gif);
		background-size: cover;
	}
</style>
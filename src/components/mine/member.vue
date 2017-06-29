<template>
	<div>
		<ul class="member">
			<li>会员中心</li>
			<li>收货地址</li>
			<li>帮助中心</li>
			<li>客服电话</li>
			<li>体验APP</li>
			<li>发票中心</li>
			<li>绑卡</li>
			<li>邀请</li>
		</ul>
	</div>
</template>

<script>
	
</script>

<style scoped>
	.member{
		display: flex;
		align-items: center;
		padding: 0.533333rem 0;
		flex-wrap: wrap;
	}
	li{
		width: 25%;
		text-align: center;
		font-size: 0.426667rem;
		margin: 0.266667rem auto;
	}
	.member li:before{
		display: block;
		content: "";
		width: 0.691244rem;
		height: 0.691244rem;
		margin: 0 auto;
	}
	.member li:before{
		background: url(/../../../static/img/m5.gif);
		background-size: cover;
	}
	.member li:nth-child(2):before{
		background: url(/../../../static/img/m6.gif);
		background-size: cover;
	}
	.member li:nth-child(3):before{
		background: url(/../../../static/img/m7.gif);
		background-size: cover;
	}
	.member li:nth-child(4):before{
		background: url(/../../../static/img/m8.gif);
		background-size: cover;
	}
	.member li:nth-child(5):before{
		background: url(/../../../static/img/m9.gif);
		background-size: cover;
	}
	.member li:nth-child(6):before{
		background: url(/../../../static/img/m10.gif);
		background-size: cover;
	}
	.member li:nth-child(7):before{
		background: url(/../../../static/img/m11.gif);
		background-size: cover;
	}
	.member li:nth-child(8):before{
		background: url(/../../../static/img/m12.png);
		background-size: cover;
	}
</style>
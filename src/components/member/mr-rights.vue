<template>
	<div>
		<ul class="rights">
			<li>评论奖励</li>
			<li>物美特惠</li>
			<li>周年礼包</li>
			<li>积分加价购</li>
			<li>全部权益</li>
		</ul>
		<div class="line"></div>
		<div class="notice">
			<h3>会员公告</h3>
			<p>物美会员升级，点击了解更多升级福利！</p>
		</div>
	</div>

</template>

<script>
	
</script>

<style scoped>
	.rights{
		display: flex;
		padding: 0.4rem 0 0.133333rem;
		justify-content: space-around;
	}
	.rights li:before{
		display: block;
		content: "";
		margin: 0 auto;
		width: 0.691244rem;
		height: 0.691244rem;
		padding: 0.115207rem;
	}
	.rights li:nth-child(1):before{
		background: url(/../../../static/img/r1.png) no-repeat;
		background-size: cover; 
	}
	.rights li:nth-child(2):before{
		background: url(/../../../static/img/r2.png) no-repeat;
		background-size: cover; 
	}
	.rights li:nth-child(3):before{
		background: url(/../../../static/img/r3.png) no-repeat;
		background-size: cover;
	}
	.rights li:nth-child(4):before{
		background: url(/../../../static/img/r4.png) no-repeat;
		background-size: cover;
	}
	.rights li:nth-child(5):before{
		background: url(/../../../static/img/r5.png) no-repeat;
		background-size: cover;
	}
	.line{
		background: #ddd;
		height: 10px;
	}
	.notice{
		padding: 0.266667rem 0.3rem;
		display: flex;
	}
	.notice p{
		padding: 0 0.4rem;
		margin-left: 0.2rem;
		border-left: 2px solid #bbb;
	}
</style>
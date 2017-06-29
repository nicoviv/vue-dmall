<template>
	<div class="box">
		<ul class="htop">
			<li>
				<p class="hello">你好</p>
				<p class="level">银卡会员</p>
			</li>
			<li class="vip">
				<div class="vip-pic"></div>
				<p>会员专属码</p>
			</li>
		</ul>
		<ul class="hbottom">
			<li>
				<p>0.00</p>
				<p>余额</p>
			</li>
			<li>
				<p>126</p>
				<p>积分</p>
			</li>
			<li>
				<p>5</p>
				<p>卡包</p>
			</li>
			<li>
				<p>3</p>
				<p>优惠卷</p>
			</li>	
		</ul>
	</div>
</template>

<script>
	
</script>

<style scoped>

	.box{
		height: 5.333333rem;
		width: 100%;
		background:url(/../../../static/img/mheader.png) no-repeat;
		background-size: cover;
		position: relative;
	}
	ul{
		display: flex;
	}

	.htop{
		height: 2.666667rem;
		align-items: center;
		justify-content: space-between;
	}
	.htop li:first-of-type{
		margin-left: 0.8rem;
	}
	.hello{
		font-size: .5rem;
		color: #fff;
	}
	.level{
		background: url(/../../../static/img/level.png) no-repeat;
		background-size:  contain;
		padding-left: 1rem;
		width: 3rem;
		height: 1rem;
		line-height: 1rem;
		font-size: 0.35rem;
		border-radius: 0.8rem;
		background-color: #000;
		border: 0.026667rem solid #000;
		color: #fff;
	}
	.vip{
		margin-right: 0.533333rem;
	}
	.vip-pic{
		width: 0.921659rem;
		height: 0.921659rem;
		background: url(/../../../static/img/code.gif) no-repeat;
		background-size: cover;
		margin: 0 auto;
	}
	.vip p{
		font-size: 0.4rem;
		color: #fff;
	}
	.hbottom{
		width: 100%;
		height: 2rem;
		position: absolute;
		bottom: 0;
		right: 0;
		left: 0;
		background-color: rgba(0,0,0,0.1);
		padding: 0.133333rem 0;
	}
	.hbottom li{
		width: 25%;
		text-align: center;
	}
	.hbottom p{
		color: #fff;
		font-size: 0.426667rem;
		font-weight: 300;
	}
</style>
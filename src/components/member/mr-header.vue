<template>
	<div>
		<div class="vbox">
			<h2>Hello,银卡会员</h2>
			<ul class="member">
				<li>会员中心</li>
				<li>会员专属码</li>
			</ul>
			<ul class="state">
				<li><p>￥2300</p><p>余额</p></li>
				<li><p>126</p><p>积分</p></li>
				<li><p>871</p><p>成长值</p></li>
				<li><p>3</p><p>优惠卷</p></li>
			</ul>
		</div>
	</div>
</template>

<script>
	
</script>

<style scoped>
	.vbox{
		height: 5.333333rem;
		background:linear-gradient(135deg,#d1dce3 0,#90a3b1 280px); 
		position: relative;
	}
	p,h2{
		text-align: center;
	}
	h2{
		padding-top: 0.266667rem;
		color: #fff;
		font-weight: 200;
	}
	ul{
		display: flex;
	}
	.member{
		justify-content: space-around;
		padding: 0.266667rem 0 0 0;
	}
	.member li:before{
		display: block;
		content: "";
		width: 0.921659rem;
		height: 0.921659rem;
		margin: 0 auto;
	}
	.member li:first-of-type:before{
		background: url(/../../../static/img/m5.gif) no-repeat;
		background-size: contain;
	}
	.member li:nth-of-type(2):before{
		background: url(/../../../static/img/vcode.gif) no-repeat;
		background-size: contain;
	}
	.member li{
		color: #fff;
	}
	.state{
		position: absolute;
		left: 5%;
		right: 5%;
		bottom: -0.266667rem;
		width: 90%;
		background-color: #fff;
		box-shadow: 0 0 5px 1px #aaa;
		z-index: 2;
	}
	.state li{
		width: 25%;
		padding: 0.2rem 0;
	}
	.state li p{
		padding: 0.07rem;
	}
	.state li p:first-of-type{
		font-weight: bolder;
		color: #281e29;;

	}
</style>
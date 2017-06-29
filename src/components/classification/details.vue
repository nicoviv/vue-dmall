<template>
	<div class="details">
		<div class="details-header">
			<router-link to="ification">	
				<span>
					<b></b>
				</span>
			</router-link>
			<router-link to="cat">
				<i></i>
			</router-link>
		</div>
		<div class="details-img">
			<img :src="text.img" alt="">
		</div>
		<div class="details-main">
			<h1>{{text.title}}</h1>
			<p>{{ text.promotionInfo &&text.promotionInfo.matchedPros && text.promotionInfo.matchedPros[0].proName}}</p>
			<div>
				<h3>
					<sup>￥</sup>
					<span>{{ text.promotionInfo&&text.promotionInfo.promotionPrice | num}}</span>
					<s>{{text.promotionInfo&&text.promotionInfo.offPrice | num}}</s>
					<b>{{text.promotionInfo&&text.promotionInfo.promotionDisplay}}</b>
				</h3>
				<h4>已售 <span> {{text.brand}} </span> 件</h4>
			</div>
		</div>
		<div class="details-footer">
			<router-link to="cart"></router-link>
			<span>加入购物车</span>
		</div>
	</div>
</template>


<script>
	export default{
		data(){
			return {
				text:{}
			}
		},
		created(){
			// this.fun();
			var str = this.$route.query.index;
			this.text = JSON.parse(str);
			console.log(this.text)
			// console.log(typeof(this.text))
			// if(str==Object){
			// 	console.log(1111)
			// }else{
			// 	console.log(23232)
			// }
		}

	}
</script>



<style>
	.details{
		position: fixed;
		top: 0;
		width: 100%;
		bottom: 0;
		background: #fff;
		z-index: 1;
	}
	.details-header{
		position: fixed;
		top: 0;
		width: 100%;
		height: 1.333333rem
	}
	.details-header span{
		position: absolute;
		left: 0.298851rem;
		top:0.229885rem;
		display: block;
		width: 0.827586rem;
		height: 0.827586rem;
		background: #333333;
		border-radius: 50%;
	}
	.details-header span b{
		display: inline-block;
		width:0.229885rem;
		height: 0.229885rem;
		border-width: 4px 0 0 4px;
		border-style: solid;
		color: #fff;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin:auto;
		transform: rotate(-45deg);
	}
	.details-header i{
		position: absolute;
		right: 0.298851rem;
		top: 0.229885rem;
		width: 0.597701rem;
		height: 0.597701rem;
		background-image: url(../../../static/img/sprt.png);
		background-position: -6.7375rem -0.08rem;
		background-repeat: no-repeat;
	}
	.details-img img{
		width: 100%;
	}
	.details-main{
		padding:0 0.578704rem 0 0.231481rem;
	}
	.details-main h1{
		font-size: 0.462963rem;
	}
	.details-main p{
		font-size: 0.37037rem;
		color: #a3a3a3;
		margin:0.347222rem 0;
	}
	.details-main div{
		display: flex;
		justify-content: space-between;
		color: #ff7d3e;
	}
	.details-main div h3 span{
		font-size: 0.462963rem;
	}
	.details-main div h3{
		font-size: 0.231481rem;
	}
	.details-main div h3 s{
		font-size: 0.324074rem;
		color: #c8cdcd;
		display: inline-block;
		margin:0 0.347222rem 0 0.162037rem;
	}
	.details-main div h3 b{
		background: #ff706e;
		display: inline-block;
		padding: 0.046296rem 0.162037rem;
		font-size: 0.324074rem;
		color: #fff;
	}
	.details-main div h4{
		color: #a3a3a3;
	}
	sup{
		font-size: 0.231481rem;
	}
	.details-footer{
		position: fixed;
		bottom: 0;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.details-footer a{
		margin-left: 0.694444rem;
	    background-image: url(../../../static/img/sprt.png);
	    background-position: -2.88rem -6.9rem;
	    background-repeat: no-repeat;
	    width: 0.675rem;
	    height: 0.6rem;
	    display: inline-block;
	}
	.details-footer span{
		display: inline-block;
		width: 2.893519rem;
		height: 1.388889rem;
		background: #ff712b;
		line-height: 1.388889rem;
		text-align: center;
		font-size: 0.37037rem;
		color: #fff;
	}
</style>

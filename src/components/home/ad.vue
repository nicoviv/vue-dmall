<template>
	<div class="ad" v-if="adData.length>0">
		<!-- <ul>
			<li v-for="i of adData[2].dataList" v-if="adData.length>0">
				<img :src="i.imageUrl">
			</li>
		</ul> -->
		<ul class="weeks">
			<li class="week" v-for="i of adData[2].dataList">
				<img v-lazy="i.imageUrl">
			</li>
			<li class="ad-title" v-for="i of adData[3].dataList">
				<img v-lazy="i.imageUrl">
			</li>	
		</ul>
		<!-- <ul class="special">
			<li v-for="i in adData[3].dataList">
				<img :src="i.imageUrl">
				<div class="describe">
					<div class="promo-type">
						<span>{{i.data.promotionDisplayLable}}</span>
					</div>
					<div class="mouldnews">
						<span>{{i.data.name}}</span>
					</div>
					<div class="price">
						<span class="promo-price">￥{{i.data.price | num}}</span>
						<span class="worldoriginal">￥{{i.data.promotionPrice | num}}</span>
					</div>
					<div class="add-cart"></div>
				</div>
			</li>
			<li v-for="i in adData[4].dataList">
				<img :src="i.imageUrl">
				<div class="describe">
					<div class="promo-type">
						<span>{{i.data.promotionDisplayLable}}</span>
					</div>
					<div class="mouldnews">
						<span>{{i.data.name}}</span>
					</div>
					<div class="price">
						<span class="promo-price">￥{{i.data.price | num}}</span>
						<span class="worldoriginal">￥{{i.data.promotionPrice | num}}</span>
					</div>
					<div class="add-cart"></div>
				</div>
			</li>
		</ul> -->
	</div>
</template>

<style scoped>
	.ad img{
		width: 100%;
	}
	.weeks{
		display: flex;
		flex-wrap: wrap;
	}
	.week,.ad-title{
		width: 50%;	
	}
	 .special{
		display: flex;
		flex-wrap: wrap;
	}
	 .special li{
		width: 20%;
		border-right: 0.026667rem solid #f0f0f0;
		padding-left: 3%;
		position: relative;
		font-size: 14px;
	}
	 .special li:last-child{
		border-right:none;
	}
	.promo-type span {
		color: #fff;
	    border-radius: 2px;
	    background: #ff6161;
	    font-size: 0.32rem;
	    padding: 0.053333rem;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	}
	.promo-price{
		color: grey;
		text-decoration: line-through;
	}
	.worldoriginal{
		color: #ff712b;
		font-size: 0.373333rem;
	}
	.promo-price,.worldoriginal{
		display: block;
	}
	.add-cart{
		padding: 0.133333rem;
		width: .8rem;
		height: .8rem;
		position: absolute;
		bottom: 0;
		right:3%;
		background: url(/../../../static/sprt.png) -3.9rem -3.7rem;
		background-size: 1000%;
	}
</style>

<script>
	export default{
		data(){
			return{
				adData:[]
			}
		},
		methods: {
			request(){
				this.$http({
					url: 'http://127.0.0.1:8080',
					params: {
						hostname : "gatewx.dmall.com",
                        path : "/home/businessIndex?",
                        param : '{"reqUrl":"https://appapis.dmall.com/app/web/ysjson/1/318","pairs":"1-0-318","networkType":2}',
                        token: "0810D1ED941A406E3067EB45E10B1C7DA4F8F05512D27FCCBD6C9E3CC1AF80E8CF9326EED38CF8FF53C383A6CB45CE124080C63791A055AD1E707432A5D05A05E0EA592BD45B374ABDB9203B784E95AF69A0D79AF23CC749EF458E56B3385B854A556FAAC4A6C56C32199D57D9A4B1D1E95EADD3058FEB26BB9E8AD729284BE2",
                        source: '2',
                        tempid:"C78E8B6DF1800002EFA4212016731C5E",
                        pubParam: '{}'
					},
					method: "get"
				}).
				then(function(req){
					this.adData=req.data.data.pageModules;
				})
			}
		},
		mounted(){
			this.request();
		}
	}
</script>
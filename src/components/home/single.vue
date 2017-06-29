<template>
	<div class="single"  v-if="singleData.length>0">
		<ul>
			<li v-for="i in singHeaderData[0].dataList">
				<img v-lazy="i.imageUrl">
			</li>	
		</ul>
		<ul v-for="i in singleData" :class="i.dataList.length>2?'special':'slider-list'">
			<li v-for="value in i.dataList">
				<img v-lazy="value.imageUrl">
				<div class="describe"  v-if="value.data?'true':''">
					<div class="promo-type">
						<span v-for="k in value.data.promotionList">{{k.subTypeName}}</span>
					</div>
					<div class="mouldnews">
						<span>{{value.data.name}}</span>
					</div>
					<div class="price">
						<span class="promo-price">￥{{value.data.price | num}}</span>
						<span class="worldoriginal">￥{{value.data.promotionPrice | num}}</span>
					</div>
					<div class="add-cart" @click="getData(value,1)"></div>
				</div>
			</li>
			</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				singHeaderData:[],
				singleData: []
			}
		},
		methods:{
			request(){
				// self = this;
				this.$http({
					url: 'http://127.0.0.1:8080',
					method: "GET",
					params: {
						hostname : "gatewx.dmall.com",
                        path : "/home/businessIndex?",
                        param : '{"reqUrl":"https://appapis.dmall.com/app/web/ysjson/1/318","pairs":"1-0-318","networkType":2}',
                        token: "0810D1ED941A406E3067EB45E10B1C7DA4F8F05512D27FCCBD6C9E3CC1AF80E8CF9326EED38CF8FF53C383A6CB45CE124080C63791A055AD1E707432A5D05A05E0EA592BD45B374ABDB9203B784E95AF69A0D79AF23CC749EF458E56B3385B854A556FAAC4A6C56C32199D57D9A4B1D1E95EADD3058FEB26BB9E8AD729284BE2",
                        source: '2',
                        tempid:"C78E8B6DF1800002EFA4212016731C5E",
                        pubParam: '{}'
					}
				})
				.then(function(req){	
					this.singHeaderData=req.data.data.pageModules.slice(11,12);
					this.singleData=req.data.data.pageModules.slice(12);
				})
			},
			getData(value,num){
				this.$store.commit('getData',{
					data:value
					,num:num
				});
			}
		},
		mounted(){
			this.request();
		}
	}
</script>

<style scoped>
	.single img{
		width: 100%;
	}
	.special{
		border-top: 2px solid grey;
		display: flex;
		flex-wrap: wrap;
		border-bottom: 10px solid #f0f0f0;
	}
	.special li img{
		width: 100%;
	}
	.special li{
		width: 33%;
		border-right: 0.026667rem solid #f0f0f0;
		border-bottom: 0.026667rem solid #f0f0f0;
		padding:0 2% 2% 2%;
		position: relative;
	}
	.special li:last-child,li:nth-child(3){
		border-right:none;
	}
	.special li:nth-child(4),li:nth-child(5),,li:nth-child(6){
		border-bottom: none;
	}
	.mouldnews{	
	    overflow: hidden;
		color: #21292b;
	    font-size: 0.4rem;
		margin-bottom: 0.266667rem;
	}
	.mouldnews span{
		display: -webkit-box;
	    text-overflow: ellipsis;
	    -webkit-line-clamp: 2;
	    -webkit-box-orient: vertical;
	    height: 1.066667rem;
	}
	.promo-type{
		margin: 0.313333rem 0;
	}
	.promo-type span {
		color: #fff;
	    border-radius: 2px;
	    background: #ff6161;
	    padding: 5px;
	    font-size: 12px;
	    margin-right: 8px;
	}
	.promo-price{
		color: grey;
		text-decoration: line-through;
		font-size: 0.32rem;
	}
	.worldoriginal {
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
		bottom: 3%;
		right:2%;
		background: url(/../../../static/img/sprt.png) -3.9rem -3.7rem;
		background-size: 1000%;
	}
</style>


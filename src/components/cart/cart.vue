<template>
	<div class="cart">
		<div class="cart-header">
			购物车
		</div>
		<div class="address">
			<p>付 18231577479</p>
			<p>送至:北京站 昌平</p>
			<span>></span>
		</div>
		<div class="goshopping" v-if="dataList.length==0">
			<img src="https://img.dmall.com/common/b74146fb-d805-4829-8c4c-445e3f0b0a7b" alt="">
			<span>购物车还没有商品</span>
			<button>
				<router-link to="home" style="color:#fff">
					我要买买买
				</router-link>
			</button>	
		</div>
		<div class="shop-cart" v-if="dataList.length>0">
			<div class="tapActive">
				<label>
 					<input type="checkbox"  @change="selectAll(i)">
 					<p></p>
 				</label>
 				<p class="jingxuan">全球精选(北京会员店) <span class="goto">></span></p>
			</div>
			<ul class="goods" v-for="i in dataList" v-if="i.num>0">
				<label>
 					<input type="checkbox" v-model="i.states" @change="selectFun(i)" >
 					<p></p>
 				</label>
 				<li>
 					<div class="J_Link">
						<p v-if="i.data.data">[次日达]{{i.data.data.name}}</p>
						<p v-if="i.data.title">{{i.data.title}}</p>
						<span v-if="i.data.data" class="price">￥{{i.data.data.promotionPrice | num}}</span>
						<span v-if="i.data.promotionInfo" class="price">￥{{i.data.promotionInfo.promotionPrice | num}}</span>
 					</div>
 					<div class="J_Num">
 						<span class="add" @click="add(i,-1)"></span>
 						<span class="num">{{i.num}}</span>
 						<span class="del" @click="add(i,1)"></span>
 					</div>		
 				</li>
			</ul>
			<div class="makeup-order-list">
				<p style="color:#21292b">新人免费邮啦&nbsp;!&nbsp;满19元即可享受特权~</p>
			</div>	
			<div class="total">
				<div class="count">
					<div class="orange">合计:￥{{total | num}}(不含运费)</div>
					<div style="color:grey">促销已抵扣金额: ￥0.00</div>
				</div>
				<span>选好了</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				total:0
			}
		},
		methods: {
			add(i,num){
				i.num+=num;
				this.$store.commit('shuzi',num);
				if (i.num==0) {
					this.$store.commit("del",i);
				}
			},
			selectAll(state){
				this.$store.dispatch('selectAll');
			},
			selectFun(state,i){
				this.$store.dispatch('selectFun',i);
			}
		},
		computed: {
			dataList(){
				 // i = 0
				let money=0;
				for(var i in this.$store.state.shopData.data){
					if(this.$store.state.shopData.data[i].data.data){
							money+=this.$store.state.shopData.data[i].num*this.$store.state.shopData.data[i].data.data.promotionPrice;
					}else{
						money+=this.$store.state.shopData.data[i].num*(this.$store.state.shopData.data[i].data.promotionInfo.promotionPrice);
					}
				}
				this.total=money;
				return this.$store.state.shopData.data;
			}
		}
	}
</script>

<style scoped>
	.cart{
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		background: #f6f6f6;		
	}
	.cart-header{
		height: 1.066667rem;
		line-height: 1.066667rem;
		text-align: center;
		font-size: 0.426667rem;
		background:#fff;
		margin-bottom: 0.266667rem;
	}
	.address{
		font-size: 0.373333rem;
		padding: 3% 5%;
		position: relative;
		background: #fff url(https://static.dmall.com/kayak-project/cart/dist/cart/common/image/shoppingline.png);
		background-repeat: repeat-x;
	}
	.address span{
		position: absolute;
		color: #c8cccd;
		font-size: 0.64rem;
		right: 3%;
		bottom: 20%;
	}
	.goshopping{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.goshopping img{
		width:28%;
		margin: 1.333333rem 0;
	}
	.goshopping span{
		display: block;
		margin-bottom: 0.666667rem;
	    color: #979797;
	    font-size: 0.426667rem;
	}
	.goshopping button{
		display: block;
		padding: 0 0.586667rem;
		height: 1.066667rem;
		background: #ff712b;
	    border-radius: 4px;
	    border: none;
	    font-size: 0.373333rem;
	}
	.shop-cart{
		margin-top: 0.266667rem;
	}
	.shop-cart label{
		display: flex;
		align-items: center;
	}
	.shop-cart label input{
		display: none;
	}
	.shop-cart label p{
		width: 0.8rem;
		height: 0.8rem;
		background: url(/../../../static/img/sprt.png);
		background-position: -6.1rem -4.6rem;
		background-size: 1500%;
	}
	.shop-cart ul label{
		width: 10%;
	}
	.tapActive{
		display: flex;
		font-size: 0.373333rem;
		margin-top: 0.533333rem;
		background: #fff;
		padding:0 3%;
		position: relative;
	}
	.tapActive label input:checked+p{
		background: url(/../../../static/img/sprt.png);
		background-position: -7.55rem -4.6rem;
		background-size: 1500%;
	}
	.jingxuan{
		display: flex;
		align-items: center;
		height: 1.066667rem;
	}
	 .jingxuan:before{
		width:0.8rem;
		height:0.8rem;
		display: block;
		content: "";
		background: url(https://img.dmallcdn.com/bizItem/201610/1bf901f7-a57f-4176-ad53-16d709a10322) center center no-repeat;
		background-size: 100%;
	}
	.goto{
		font-size:.626667rem;
		color:#c8cccd;
		position: absolute;
		right: 3%;
		bottom: 8%;
	}
	.goods{
		background: #fff;
		margin-bottom: 0.08rem;
		margin-top: 0.08rem;
		display: flex;
		padding: 3%;
	}
	.goods label input:checked+p{
		background: url(/../../../static/img/sprt.png);
		background-position: -7.55rem -4.6rem;
		background-size: 1500%;
	}
	.goods li{
		width: 10rem;
		position: relative;
	}
	.J_Link{
		width:70%;
		font-size: 0.36rem;
	}
	.J_Link p{
		width: 6rem;
		overflow: hidden;
		text-overflow: ellipsis;
   		white-space: nowrap
	}
	.J_Link span{
		display: block;
		font-size: 0.426667rem;
		font-weight: bold;
		margin-top: 0.266667rem
	}
	.J_Num{
		display: flex;
		align-items: center;
		position: absolute;
		right: 0;
		bottom: 10%;
	}
	.add{
		display: block;
		padding: 0.133333rem;
		width: .8rem;
		height: .8rem;
		background: url(/../../../static/img/sprt.png) 0.133333rem -10.49rem;
		background-size: 1000%;
	}
	.del{
		display: block;
		padding: 0.133333rem;
		width: .8rem;
		height: .8rem;
		background: url(/../../../static/img/sprt.png) -3.9rem -3.83rem;
		background-size: 1000%;
	}
	.num{
		width: 0.533333rem;
		font-size: 0.373333rem;
		text-align: center;
	}
	.makeup-order-list{
		color: #21292b;
		display: flex;
		align-items: center;
		background: #fff7eb;
		padding:2% 3%;
	}
	.makeup-order-list:before{
		display: block;
		content: "";
		width:0.533333rem;
		height: 0.533333rem;
		background: url(/../../../static/img/sprt.png);
		background-position: -1.326667rem -6.133333rem;
		background-size: 2000%;
		margin-right: 0.533333rem;
	}
	.orange{
		color: #ff712b;
		font-size: 0.426667rem;
		margin: 0.213333rem 0;
	}
	.total{
		background: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding:2% 3%;
	}
	.total span{
		height: 1.066667rem;
		line-height: 1.066667rem;
		color: #fff;
		background:  #ff712b;
		font-size: 0.426667rem;
		padding:0 0.4rem;
		border-radius: 10px;
	}
</style>


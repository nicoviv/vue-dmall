<template>
	<footer class="footer">
		<ul>
			<li>
				<router-link to="home">
					首页
				</router-link>
			</li>
			<li>
				<router-link :to="{path:'ification',query:{item:this.$store.state.goods}}">
					分类
				</router-link>
			</li>
			<li>
				<router-link to="member">
					会员
				</router-link>
			</li>
			<li class="cartshop">
				<router-link to="cart">
					购物车
					<span v-if="shuzi>0">{{shuzi}}</span>
				</router-link>
			</li>
			<li>
				<router-link to="mine">
					我的
				</router-link>
			</li>
		</ul>	
	</footer>
</template>

<style scoped>
	.footer{
		height: 1.6rem;
		position: fixed;
		bottom: 0;
		border-top: 1px solid #f0f0f0;
		width: 100%;
		font-size: 0.38rem;
		color: grey;
		box-shadow: 0px -1px 1px rgba(0,0,0,0.3);
		background: #fff;
	}
	.footer ul{
		display: flex;
	}
	.footer ul li{
		width: 20%;
		text-align: center;
	}
	.footer ul li a:before{
		display: block;
		content: "";
		width: 0.8rem;
		height: 0.8rem;
		background-image: url(/../../../static/img/btm-bar-sprt.png);
		background-size: 800%;
		margin: 5px auto;
	}
	.footer ul li a{
		height: 100%;
		display: block;
	}
	.footer ul li:nth-child(2) a:before{
		background-position: -1.333333rem 0;
	}
	.footer ul li:nth-child(3) a:before{
		background-position: -2.533333rem 0;
	}
	.footer ul li:nth-last-child(2) a:before{
		background-position: -3.866667rem 0;
	}
	.footer ul li:last-child a:before{
		background-position: -5.1rem 0;
	}
	.footer ul li a.router-link-active:before{
		background-position-y:-1.333333rem; 
	}
	.footer ul li a.router-link-active{
		color: #ff712b;
	}
	.footer ul li a:hover:before{
		animation: abc .5s
	}
	@keyframes abc{
		25%{transform: scale(.8)}
		50%{transform:scale(1.2)}
		75%{transform: scale(.8)}
		100%{transform:scale(1)}
	}
	.cartshop{
		position: relative;
	}
	.cartshop span{
		width:0.533333rem;
		height: 0.533333rem;
		border-radius: 50%;
		background: #eb2243;
		position: absolute;
		top: 0;
		right: 10%;
		color: #fff;
	}
</style>

<script>
	export default{
			data(){
				return {
					shuzi:0,
					item:this.$store.state.goods
				}
			}
			,
			computed:{
				getShuzi(){
					return this.$store.state.shopData.countTotal;
				}
			},
			watch:{
				getShuzi(){
				this.shuzi=this.$store.state.shopData.countTotal;
			}
		}
	}
</script>
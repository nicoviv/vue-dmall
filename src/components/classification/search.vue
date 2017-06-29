<template>
	<div class="search">
		<div class="search-header">
			<router-link to="ification" >	
				<span>
					<b @click="$router.go(-1)"></b>
				</span>
			</router-link>
			<div>
				<input type="text" placeholder="搜索你想要的商品" v-model="text" @keyup.13="enter()">
			</div>
		</div>
		<div class="search-main">
			<p>热门搜索</p>
			<div class="search-bottom">
				<ul>
					<li>牛奶</li>
					<li>浩强</li>
					<li>酸奶</li>
					<li>大米</li>
					<li>卫生纸</li>
				</ul>
			</div>
			<p v-show="news!=''">历史记录</p>
			<div class="search-bottom">
				<ul ref="ul">
					<li v-for="i in news">{{i.text}}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style>
	.search{
		position: fixed;
		top: 0;
		bottom: 0;
		width: 100%;
		background: #fff;
		z-index: 1;
	}
	.search-header{
		height: 1.203704rem;
		display: flex;
		align-items: center;
		padding: 0 0.347222rem;
		box-shadow: 0 2px 10px rgba(0,0,0,.1);
	}
	.search-header span{
		display: block;
		width: 0.827586rem;
		height: 0.827586rem;
		background: #333333;
		border-radius: 50%;
		position: relative;
	}
	.search-header span b{
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
	.search-header div{
		margin-left: 0.277778rem;
		padding-left: 0.694444rem;
		border:1px solid #dee0e1;
		background: url(../../../static/img/sprt.png);
		background-position: -1.25rem -5.16rem;
		background-repeat: no-repeat;
	}
	.search-header div input{
		border: none;
		outline: none;
		width: 7.48148rem;
		height: 0.810185rem;
		font-size: 0.37037rem;
	}
	.search-main{
		padding:0 0.414747rem;
	}
	.search-main p{
		height: 1.198157rem;
		line-height: 1.198157rem;
		box-shadow: 0 2px 2px #e7e7e7;
		color: #cccccc;
		font-size: 0.368664rem;
	}
	.search-bottom ul{
		display: flex;
		padding-top: 0.345622rem;
		flex-wrap: wrap;
	}
	.search-bottom ul li{
		border-radius: 0.345622rem;
		border:1px solid #ccc;
		padding:0.184332rem 0.230415rem;
		margin: 0 0 0.230415rem 0.184332rem;
		font-size: 0.368664rem;

	}

</style>

<script>
	export default{
		data(){
			return {
				text : '',
				news : []

			}
		},
		methods:{
			enter(){
				var newstext = {
					text :this.text
				}
				if(this.text!=''){
					this.news.push(newstext);
					this.text = "";
				}
			}
		},
	}
	
</script>
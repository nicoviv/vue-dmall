 <template>
	<div class="nav" v-if="navData.length>0">
		<ul class="ad-list">
			<!-- <li v-for="i in navData[3].dataList">
				<img :src="i.imageUrl">
			</li> -->
			<li v-for="j in navData[4].dataList">
				<img v-lazy="j.imageUrl">
			</li>
		</ul>
		<ul class="nav-list">
			<li v-for="k of navData[5].dataList">
				<img v-lazy="k.imageUrl">
				<p>{{k.remark}}</p>
			</li>
			<li v-for="l of navData[6].dataList">
				<img v-lazy="l.imageUrl">
				<p>{{l.remark}}</p>
			</li>
		</ul>
		<!-- <ul>
			<li v-for="l of navData[7].dataList">
				<img v-lazy="l.imageUrl">
			</li>
		</ul> -->
		<ul class="clearfix">
			<li v-for="i of navData[7].dataList">
				<img v-lazy="i.imageUrl">
			</li>
		</ul>
		<ul>
			<li v-for="i of navData[8].dataList">
				<img v-lazy="i.imageUrl" alt="">
			</li>
		</ul>
		<ul class="tuiian">
			<li v-for="i of navData[9].dataList"><img v-lazy="i.imageUrl"></li>
			<li v-for="i of navData[10].dataList"><img v-lazy="i.imageUrl"></li>
		</ul>
	</div>
</template>
	
<style scoped>
	.nav{
		margin-top: 0.266667rem;
	}
	.nav .ad-list{
		display: flex;
		width: 100%;
		flex-wrap: wrap;
	}
	.nav img{
		width: 100%;
	}
	.nav .ad-list li{
		width: 50%;
	}
	.nav-list{
		display: flex;
		width: 100%;
		flex-wrap: wrap;
	}
	.nav-list li{	
		width: 20%;
		margin: 0.133333rem 0;
	}
	.nav-list li p{
		text-align: center;
	}
	.nav-list li img{
		width: 90%;
	}
	.clearfix {
		overflow: hidden;
	}
	.clearfix li{
		float: left;
		width: 50%;
	}
	.tuiian{
		display: flex;
		flex-wrap: wrap;
	}
	.tuiian li{
		width: 33%;
	}
</style>

<script>
	export default{
		data(){
			return{
				navData: []
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
					this.navData=req.data.data.pageModules;
					console.log(this.navData)
				})
			}
		},
		mounted(){
			this.request();
		}
	}
</script>
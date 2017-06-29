<template>
	<transition name="fade">
	<div class="propup" v-if="show">
		<div class="propup-top">
			<h1>
				<span><img src="../../../static/img/all.png" alt=""></span>
				<span>全部分类</span>
			</h1>
			<h3 @click="state()">取消</h3>
		</div>
		<div class="propup-bottom">
			<div class="propup-meun" v-for="(value,index) in text">
				<div>
					<p @click="change(index)" :id="num==index?'active':''">{{value.catName}}</p>
				</div>
				<div v-show="num==index">
					<p v-for="(val,idx) in value.childCmCategories" @click="shuju(value.childCmCategories,idx)" :class="value.childCmCategories[idx].cmCatId==TextId?'color':''">
						{{val.catName}}
					</p>
				</div>
			</div>
		</div>
	</div>
	</transition>
</template>

<style>
	.color{
		color: #fd8950!important;
	}
	.fade-enter-active{
		transform: translate3d(-100%,0,0);
	}
	.fade-enter-active,.fade-leave-active{
		transform: translate3d(0,0,0);
		transition: all 2s;
	}
	.fade-leave-active{
		transform: translate3d(-100%,0,0);
	}
	.propup{
		position: fixed;
		top: 8%;
		width: 100%;
		height: 92%;
		background: #fff;
		overflow: scroll;
		font-size: 0.36036rem;
	}
	.propup-top{
		height: 1.126126rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 0.225225rem;
		box-shadow: 0 2px 8px #f0f0f0;
	}
	.propup-top h1 span,.propup-top h3{
		display: inline-block;
		font-size: 0.405405rem;
	}
	.propup-top h3{
		color: #fd8950;
	}
	.propup-top h1{
		display: flex;
		align-items: center;
	}
	.propup-meun div{

		width: 50%;
		height: 1.171171rem;
	}
	.propup-meun div:last-child{
		position: absolute;
		top: 1.126126rem;
		right: 0;
		height: 14.065067rem;
		background: #f6f6f6;
	}
	.propup-meun div p{
		height: 1.171171rem;
		line-height: 1.171171rem;
		padding-left: 0.405405rem;

		font-size: 0.405405rem;
		color: #858585;
	}
	#active{
		color: #fd8950;
		border-left: 0.112613rem solid #fd8950;
		background: #f6f6f6;
		padding-left: 0.292793rem;
	}
</style>

<script>
	export default{
		data(){
			return {
				text : [],
				num:0,
				TextId : this.$store.state.catId
			}
		},
		methods : {
			change(index){
				this.num = index;
			},
			state(){
				this.$store.commit('changeState');
			},
			shuju(catName,idx){

				this.$store.state.goods = catName;

				this.TextId = catName[idx].cmCatId;
				this.$store.state.catId = this.TextId;
				// console.log(this.$store.state.goods)
				this.$store.commit('changeState');
				this.$store.commit('emitCat',true);
			},
			fenlei(){
				this.$http({
					url:"http://127.0.0.1:8080",
					params:{
						hostname:"gatewx.dmall.com",
						path :"/customersite/index?",
						param : '{"pairs":"1-0-318","bizType":"2"}',
						token :"530901FA2EFEAD8CF04466A35DB55B9B1B7F232B74D8703788748D874F6155AEFA8163325A891ABBA6B3C8E919F02C9AC440E2EACDB39E6E8942F7D98A6627ABDFCB2AAF5F78810E51818ABC4C656ACBF8CF58A66FB54BD61D42E683B888A4B0BCB1EBA3B21A20FAB63561416FB3D3D119105DE81E52BAE83F817A2FF70A2B4B",
						source:"2",
						tempid:"C78E8C0DB0700002B3D81609D6C219F5",
						pubParam:"{}",
						_:"1496816625328"
					},
					method:"GET"
				}).then(function(req){
					this.$store.state.yh = req.body.data.pageModules[0].dataList[0].resource;
					this.text = req.body.data.categoryInfo.categorys;
					this.$store.state.goods = req.body.data.categoryInfo.categorys[1].childCmCategories;
				})
			}
		},
		mounted(){
			this.fenlei()
		},
		computed : {
			show(){
				return this.$store.state.showState;
				console.log(this.$store.state.showState)
			}
		}
	
	}
</script>
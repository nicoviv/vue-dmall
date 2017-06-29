<template>
	<swiper :options="swiperOption" ref="mySwiper" class="banner" v-if="bannerData.length>0">
	    <swiper-slide v-for="i of bannerData[0].dataList" :key="i.imageUrl">
	    	 <img  :src="i.imageUrl">		
	     </swiper-slide>
	    <div class="swiper-pagination"  slot="pagination"></div>
	</swiper>
</template>

<style>
	.banner{
		margin-top: 1.334333rem;
	}
	.banner img{
		width: 100%;
		height: 4.0rem;
	}
	.swiper-pagination-bullet{
		width:0.266667rem;
		height: 0.266667rem;
	}
</style>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper';
	export default{
		data(){
			return{
				bannerData: {},
				swiperOption: {　　　　　　
		        notNextTick: true,
		        autoplay: 3000,
		        pagination : '.swiper-pagination',
		        paginationClickable :true,
		        observeParents:true,
		        debugger: true,
		        autoplayDisableOnInteraction: false,
		        loop:true
		        }
			}
		},
		components:{
			swiper,
			swiperSlide
		},
		methods: {
			request(){
				// self = this;
				this.$http({
					url: "http://127.0.0.1:8080",
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
				}).then(function(req){
					this.bannerData=req.data.data.pageModules;
					// console.log(req.data.data.pageModules)
				})
			}
		},
		mounted(){
			this.request();
		}
	}
</script>
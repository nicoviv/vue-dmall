import flexible from './assets/js/flexible';
import Vue from 'vue';
import App from './App';
import css from './assets/css/reset.css';
import resource from 'vue-resource';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Vuex from 'vuex'
import router from './router'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'

Vue.use(VueAwesomeSwiper);
Vue.use(resource);
Vue.use(Vuex);
Vue.prototype.$sce=axios;
Vue.use(VueLazyload,{
	loading:'./../../static/img/jiazai.jpg'
});	

//过滤器
Vue.filter('num',function(e){
	let num,result;
	num = e/100;
	result = num.toFixed(2);
	return result;
})

//滚动条
Vue.directive('scrollo',{
	bind(el){
		var h1Parent = el.querySelector('.classification-wumei');
		var div = el.querySelector('.classification-top');
		var h1 = el.querySelector('#default');
		el.addEventListener('scroll',function(){
			if(el.scrollTop>=div.offsetHeight){//seletion/有滚动条才有滚动事件
				// 滚动条的高度大于等于他父元素的高度就触发
				h1.className = 'scrollh1';
			}else{
				h1.className = 'default';
			}
		})
	}
})

const store = new Vuex.Store({
	state: {//存储状态
		showState:false,
		catEmitStatus : false,//是否出发cat方法
		goods:[],
		catId:'10807',
		shopData: {
			data:[],
			countTotal:0,
		}
	},
	mutations: {//行为,对状态进行改变,是静态行为
		getData(state,opt){
			let skuId; 
			console.log(opt)
			if(opt.data.data){
				skuId = opt.data.data.skus.skuId;
			}else{
				skuId = opt.data.skuId;
			}
			let count=opt.num;
			if(opt.num){
				for(var i=0; i< state.shopData.data.length;i++){
					if(state.shopData.data[i].data.data){
						if (state.shopData.data[i].data.data.skus.skuId==skuId) {
							state.shopData.data[i].num+=count;
							var changestate=true;
						}
					}else{
						if (state.shopData.data[i].data.skuId==skuId) {
							state.shopData.data[i].num+=count;
							var changestate=true;
						}
					}
					
				}
				if (!changestate) {
					opt.num=count;
				 	state.shopData.data.push(opt);
				}
			} else{
				state.shopData.data.push(opt);
				opt.num+=1;
			}
			state.shopData.countTotal+=opt.num;
		},
		del(state,opt){
				state.shopData.data.splice(state.shopData.data.indexOf(opt),1)
		},
		shuzi(state,num){
			state.shopData.countTotal+=num;
		},
		SELECTALL(state){
			for(var i in state.shopData.data){
				state.shopData.data[i].state=state
			}
			console.log(1)
		},
		SELECTFN(state,opt){
			let _state=false;
			for(var i in state.shopData.data){
				if (state.shopData.data[i].state) {
					_state=true
				}
			}
			console.log(state.shopData.data[i].state);
			return _state;
		},
		changeState(state){
			state.showState= !state.showState
		},
		emitCat(state,val){
			state.catEmitStatus = val;
		}
	},
	actions: {//行为,对状态进行改变,是动态行为
		selectAll({commit},i){
			commit('SELECTALL',i);
		},
		selectFun({commit},i){
			commit('SELECTFN',i);
		}
	}
});
new Vue({
	el: '#app',
	render:h=>h(App),
	resource,
	router,
	store,
	VueLazyload
});
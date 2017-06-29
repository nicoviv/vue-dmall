<template>
	<div id="app">
		<v-header></v-header>
		<v-banner></v-banner>
		<v-ad></v-ad>
		<v-nav></v-nav>
		<v-single></v-single>
	</div>
</template>

<style scoped>
</style>

<script>
  	import vHeader from './header';
  	import vBanner from './banner';
  	import vAd from './ad';
  	import vNav from './nav';
  	import vSingle from './single'
	export default{
		components: {
			vHeader,
			vBanner,
			vAd,
			vNav,
			vSingle
		},
		mounted(){
			
		}
	}
</script>
<template>
	<div id="app">
		<v-content></v-content>
		<v-footer></v-footer>	
	</div>
</template>

<style>
	
</style>

<script>
	import vFooter from './components/footer/footer';
	import vContent from './components/content/content';
	export default{
		components:{
			vFooter,vContent
		}
	}
</script>

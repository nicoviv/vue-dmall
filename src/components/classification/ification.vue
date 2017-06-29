<template>
	<div id="app">
		<v-classification></v-classification>
		<v-propup></v-propup>
	</div>
</template>

<style>
	
</style>

<script>
	import vClassification from './classification';
	import vPropup from './propup';
	export default{
		components:{
			vClassification,vPropup
			
		}
	}
	
</script>
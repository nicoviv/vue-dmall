<template>
	<div class="loading">
		<lheader></lheader>
		<div class="image"><img src="/../../../static/img/load.jpg" alt=""></div>
		<tel></tel>	
		<div class="full"></div>
	</div>
</template>

<script>
	import lheader from './lheader';
	import tel from './tel';
	
	export default{
		components:{
			lheader,tel
		}
	}
</script>

<style scoped>
	.loading{
		background: #eee;
	}
	.image{
		width: 100%;
	}
	.image img{
		width: 100%;
	}
	.full{
		background: #eee;
		height: 5.6rem;
	}
</style>
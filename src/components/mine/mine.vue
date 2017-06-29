<template>
	<div>
		<m-header></m-header>
		<aline></aline>
		<m-order></m-order>
		<aline></aline>
		<member></member>
		<div class="fff"></div>
		<mload></mload>
	</div>
</template>

<script>
	import mHeader from './mheader';
	import order from './morder';
	import aline from './area';
	import member from './member';
	import mload from './mload';
	export default{
		components:{
			mHeader,mOrder:order,aline,member,mload
		}

	}
</script>

<style>

</style>
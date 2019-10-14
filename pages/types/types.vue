<template>
	<view>
		<scroll-header></scroll-header>
	</view>
</template>

<script>
	import scrollHeader from "../../components/scrollHeader.vue"
	export default {
		components:{
			scrollHeader
		},
		data() {
			return {
				
			}
		},
		onLoad:function(option){
			console.log(option.id)
		},
		methods: {
			
		}
	}
</script>

<style>

</style>

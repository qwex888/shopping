<template>
	<view>
		<view class="qrimg">
				<tki-qrcode v-if="ifShow" cid="qrcode1" ref="qrcode" :val="val" :size="size" :unit="unit" :background="background" :foreground="foreground" :pdground="pdground" :icon="icon" :iconSize="iconsize" :lv="lv" :onval="onval" :loadMake="loadMake" :usingComponents="true" @result="qrR" />
		</view>
	</view>
</template>

<script>
	import tkiQrcode from "@/components/tki-qrcode/tki-qrcode.vue"
	export default {
		components: {tkiQrcode},
		data() {
			return {
				val:'',
				
			}
		},
		onReady:function(){
			this.getVal()
		},
		onShow:function(option){
			
		},
		methods: {
			getVal(){
				this.val = 12312321
			},
			_makeCode(){
				
			},
			qrR(){
				this.src = res
			}
		}
	}
</script>

<style>

</style>

<template>
	<view class="content">
		<view class="user-header">
			<view class="my-jf">
				<view class="jf-num">{{itegral.useNum}}</view>
				<text class="jf-tit">可用积分</text>
			</view>
			<view class="my-jf">
				<view class="jf-num">{{itegral.stopNum}}</view>
				<text class="jf-tit">冻结积分</text>
			</view>
		</view>
		<view class="user-order">
			<view class="no-data">没有更多了</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				itegral:{
					useNum:0,
					stopNum:0
				}
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.content{
		width: 100%;
	}
	.user-header{
		width: 100%;
		height: 350upx;
		background-color: #fb824f;
		border-radius: 0 0 40upx 40upx;
		color: #FFFFFF;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.my-jf{
		width: 260upx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.jf-num{
		font-size: 62upx;
	}
	.jf-tit{
		font-size: 30upx;
	}
	.user-order{
		background-color: #FFFFFF;
		width: 710upx;
		margin: 0 20upx;
		height: 900upx;
		border-radius: 30upx;
		transform: translate(0,-80upx);
		display: flex;
		justify-content: center;
	}
	.no-data{
		margin-top: 60upx;
		font-size: 30upx;
		color: #B7B7B7;
	}
</style>

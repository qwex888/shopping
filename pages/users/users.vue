<template>
	<view class="content">
		<view class="user-header">
			<view class="my-jf">
				<view class="jf-tit">我的积分</view>
				<text class="jf">{{itegral.useNum}}</text>
			</view>
			<view class="jf-cotrol">
				<navigator url="../integral/integral" class="jfmx">积分明细</navigator>
				<navigator url="../integral/integral" class="dhdd">兑换订单</navigator>
				<view class="jfgz">积分规则</view>
			</view>
			<navigator url="../index/index" class="back">商城首页</navigator>
		</view>
		<view class="user-order">
			<view class="order-header" @click="goMyOrder(0)">
				<text>我的订单</text>
				<text class="all-order">全部 ></text>
			</view>
			<view class="show-order">
				<view class="order-item" @click="goMyOrder(1)">
					<img src="/static/images/order_01.png" alt="">
					<text>待付款</text>
				</view>
				<view class="order-item" @click="goMyOrder(2)">
					<img src="/static/images/order_02.png" alt="">
					<text>待发货</text>
				</view>
				<view class="order-item" @click="goMyOrder(3)">
					<img src="/static/images/order_03.png" alt="">
					<text>待收货</text>
				</view>
				<view class="order-item" @click="goMyOrder(4)">
					<img src="/static/images/order_04.png" alt="">
					<text>评价</text>
				</view>
			</view>
		</view>
		<navigator url="../myaddr/myaddr" class="user-addr">
			<text>我的收货地址</text>
			<text class="goaddr"> ></text>
		</navigator>
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
			goMyOrder(id){
				uni.navigateTo({
				    url: `/pages/myorder/myorder?id=${id}`
				});
			}
		}
	}
</script>

<style>
	.content{
		width: 100%;
	}
	.back{
		width: 180rpx;
		height: 60rpx;
		text-align: center;
		line-height: 60rpx;
		position: absolute;
		right: 0;
		top:30rpx;
		border-radius: 40rpx 0 0 40rpx;
		background-color: #fff;
		color:#f3a57e;
		font-size: 28rpx;
		z-index: 99999;
	}
	.user-header{
		width: 100%;
		height: 350upx;
		background-color: #fb824f;
		border-radius: 0 0 40upx 40upx;
		color: #FFFFFF;
	}
	.my-jf{
		padding-top: 40upx;
		margin-left: 60upx;
		overflow: hidden;
		font-size: 30upx;
	}
	.jf{
		font-size: 72upx;
	}
	.user-order{
		background-color: #FFFFFF;
		width: 710upx;
		margin: 0 20upx;
		height: 230upx;
		border-radius: 30upx;
		transform: translate(0,-10%);
	}
	.jf-cotrol{
		padding: 0 40upx;
		padding-top: 20upx;
		display: flex;
		justify-content: space-between;
		margin-top: 60upx;
		border-top: 1upx solid #fceee8;
		font-size: 32upx;
	}
	.order-header{
		border-bottom:1upx solid #FCEEE8;
		display: flex;
		justify-content: space-between;
		padding: 20upx 40upx;
		font-size: 30upx;
	}
	.all-order{
		color: #969696;
	}
	.show-order{
		display: flex;
		justify-content: center;
		align-items: center;
		
	}
	.order-item{
		width: 160upx;
		height: 160upx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 28upx;
	}
	.order-item img{
		margin-bottom: 10upx;
		width: 64upx;
		height: 64upx;
	}
	.user-addr{
		margin-top: 80upx;
		width: 650upx;
		margin: 0 20upx;
		height: 80upx;
		background-color: #FFFFFF;
		border-radius: 20upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 30upx;
		padding: 0 30upx;
	}
	.goaddr{
		font-size: 38upx;
	}
</style>

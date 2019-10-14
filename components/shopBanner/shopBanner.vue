<template>
	<view class="banner-box">
		<view class="user-btn">个人中心</view>
		<swiper class="baaner" :indicator-dots="true" :autoplay="true" :interval="3000" :circular="true" :duration="1000">
			<swiper-item>
				<view class="swiper-item">
					<view class="uni-bg-red"></view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<view class="uni-bg-green"></view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<view class="uni-bg-blue"></view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.banner-box{
		height: 350rpx;
	}
	.user-btn{
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
	}
	.banner{
		/* height: 500rpx; */
	}
	.swiper-item view{
		width: 100%;
		height: 100%;
		background-color: #007AFF;
	}
</style>

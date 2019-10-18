<template>
	<view class="banner-box">
		<navigator url="../../pages/users/users" class="user-btn">个人中心</navigator>
		<swiper class="baaner" :indicator-dots="true" :autoplay="true" :interval="5000" :circular="true" :duration="1000">
			<swiper-item v-for="(item,index) in banner" :key="index">
				<view class="swiper-item">
					<image class="swiper-item-img" :src="item.imgPic" mode="scaleToFill"></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				banner:[]
			}
		},
		created() {
			this.getBanner()
		},
		methods: {
			getBanner(){
				try {
				    const value = uni.getStorageSync('banner');
				    if (value) {
						this.banner = value
				        console.log(value);
				    }
				} catch (e) {
				    // error
				}
			}
		}
	}
</script>

<style>
	.banner-box{
		width: 100%;
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
		z-index: 99999;
	}
	.banner{
		height: 350rpx;
	}
	.swiper-item{	
		display: block;
		line-height: 350upx;
	}
	.swiper-item-img{
		width: 100%;
		height: 350upx;
	}
</style>

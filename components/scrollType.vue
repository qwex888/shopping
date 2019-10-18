<template>
	<view class="content">
		<image class="no-exist" v-show="isExist" src="../../static/images/none.jpg" mode="widthFix"></image>
		<swiper class="swiper" vertical="false" @change="changeType">
			<swiper-item>
				<view class="swiper-item uni-bg-red">A</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-green">B</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-blue">C</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isExist:true
			};
		},
		methods:{
			changeType(event){
				console.log(event.detail)
			}
		}
	}
</script>

<style>
	.no-exist{
		width: 280upx;
		height: 326upx;
		margin-top: 200upx;
	}
	.content{
		height: 88vh;
		background-color: #FFFFFF;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}
</style>

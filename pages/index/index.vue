<template>
	<view class="content">
		 <view class="body">
			<shop-banner></shop-banner>
			<view class="types">
				<navigator url="'/pages/types/types" class="type-item" v-for="(item,index) in type" :key="index">
					<image :src="item.icon" alt=""></image>
					<text>{{item.name}}</text>
				</navigator>
			</view>
			<view class="gifts">
				<view class="gift-header">
					<view class="gift-icon"></view>
					<view class="gift-tit">优惠礼包</view>
					<view class="gift-more">更多 ></view>
				</view>
				<view class="gift-content">
					<view class="gift-item">
						<image src="/static/images/gift-item_01.jpg" mode=""></image>
						<view class="gift-item-tit">福鼎白茶</view>
						<view class="gift-item-price">1积分+339元</view>
					</view>
				</view>

			</view>
			<view class="goods">
				<view class="goods-header">
					<view class="goods-tit">
						新品推荐
					</view>
					<view class="goods-more">更多 ></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import shopBanner from "../../components/shopBanner/shopBanner.vue"
	export default {
		components:{
			shopBanner
		},
		data() {
			return {
				type:[
						{	
							id:1,
							name:"家居家用",
							icon:'/static/images/types_01.png'
						},
										{
							id:2,
							name:"数码生活",
							icon:'/static/images/types_02.png'
						},
										{
							id:3,
							name:"休闲零食",
							icon:'/static/images/types_03.png'
						},
										{
							id:4,
							name:"母婴亲子",
							icon:'/static/images/types_04.png'
						},
										{
							id:5,
							name:"箱包手袋",
							icon:'/static/images/types_05.png'
						},
										{
							id:6,
							name:"轻奢优选",
							icon:'/static/images/types_06.png'
						},
										{
							id:7,
							name:"个护时尚",
							icon:'/static/images/types_07.png'
						},
										{
							id:8,
							name:"更多",
							icon:'/static/images/types_08.png'
						}
					]
			}
		},
		onLoad() {
			
		},
		methods: {
			//请求链接
			uni.request({
				url: '',
				method: 'GET',
				data: {},
				success: res => {},
			});
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.body{
		width: 100%;
	}
	.types{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 30rpx;
	}
	.types .type-item{
		width: 177.5rpx;
		height: 177.5rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 5rpx;
	}
	.types .type-item image{
		width: 80rpx;
		height: 80rpx;
		margin-bottom: 10rpx;
	}
	.types .type-item text{
		font-size: 18rpx;
		color: #969696; 
	}
	.gifts{
		background-color: #fff;
		margin-bottom: 20rpx;
	}
	.gift-header,.goods-header{
		width: 100%;
		height: 80rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		padding-bottom: 20rpx;
		font-size: 28rpx;
		font-weight: bold;
	}
	.gift-icon{
		width: 60rpx;
		height: 50rpx;
		background: url('/static/images/icon_01.png') no-repeat;
		background-size: cover;
	}
	.gift-more,.goods-more{
		position: absolute;
		right: 2%;
		top: 21%;
		font-size: 24rpx;
		color: #969696;
	}
	.gift-item{
		width: 275rpx;
		height: 350rpx;
		font-size: 24rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin:10rpx;
	}  
	.gift-item image{
		width: 204rpx;
		height: 201rpx;
	}
	.gift-item-tit{
		color: #6e6d72;
	}
	.gift-item-price{
		color: #9b524b;
	}
</style>

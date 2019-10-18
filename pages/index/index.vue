<template>
	<view class="content">
		 <view class="body">
			<shop-banner></shop-banner>
			<view class="types">
				<view class="type-item" @click="goTypes(index)" v-for="(item,index) in types" :key="index">
					<image :src="item.logoPic" alt=""></image>
					<text>{{item.name}}</text>
				</view>
			</view>
			<view class="gifts">
				<view class="gift-header">
					<view class="gift-icon"></view>
					<view class="gift-tit">优惠礼包</view>
					<view class="gift-more" @click="goTypes(7)">更多 ></view>
				</view>
				<view class="gift-content">
					<view class="gift-item"  @click="goDetail(item.id)" v-for="(item,index) in gifts" :key="index">
						<image :src="item.smallPic" mode=""></image>
						<view class="gift-item-tit">{{item.goodsName}}</view>
						<view class="gift-item-price">{{item.integral}}积分+{{item.price}}元</view>
					</view>
				</view>

			</view>
			<view class="goods">
				<view class="goods-header">
					<view class="goods-icon"></view>
					<view class="goods-tit">
						新品推荐
					</view>
					<view class="goods-more" @click="goTypes(8)">更多 ></view>
				</view>
				<view class="gift-content">
					<view class="gift-item" @click="goDetail(item.id)" v-for="(item,index) in goods" :key="index">
						<image :src="item.smallPic" mode=""></image>
						<view class="gift-item-tit">{{item.goodsName}}</view>
						<view class="gift-item-price">{{item.integral}}积分+{{item.price}}元</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import shopBanner from "../../components/shopBanner/shopBanner.vue"
	// import {getType,getGift} from "../../service/getData.js"
	export default {
		components:{
			shopBanner
		},
		data() {
			return {
				banner:[],
				types:[],
				gifts:[],
				goods:[]
			}
		},
		created(){
			this.getUserAddress()
			this.getBanner()
			let p1 = new Promise((resolve, reject) => {
				this.getType();
				resolve()
			})
			
			let p2 = new Promise((resolve, reject) => {
			  this.getGift();
			  resolve()
			})
			Promise.all([p1, p2]).then((result) => {
			  console.log(result)       
			  uni.stopPullDownRefresh();
			}).catch((error) => {
			  console.log(error)
			})
			 uni.removeStorageSync('chooseOrderIndex');
			
			// this.onPullDownRefresh()
		},
		onLoad: function (options) {
			uni.startPullDownRefresh();
		},
		methods: {
			getBanner(){
				let baseURL = getApp().globalData.baseURL
				let token = getApp().globalData.token
				uni.request({
					url:`${baseURL}/v1.0/good/carousel/findNeed`,
					success:(res) => {
						// console.log(res.data.result)
						this.banner = res.data.result
						uni.setStorageSync('banner', res.data.result);
					},
				})
			},
			//获取用户列表
			getUserAddress(){
				let baseURL = getApp().globalData.baseURL
				let token = getApp().globalData.token
				uni.request({
					url:`${baseURL}/v1.0/good/address/findByUserId/${token}`,
					success:(res) => {
						console.log(res.data.result)
						getApp().globalData.userAddr = res.data.result
					}
				})
			},
			onPullDownRefresh() {
				setTimeout(function () {
					uni.stopPullDownRefresh();
				}, 1000);
			},
			//跳分类页
			goTypes(id){
				uni.navigateTo({
				    url: `/pages/types/types?id=${id + 1}`
				});
			},
			goDetail(id){
				uni.navigateTo({
				    url: `/pages/detail/detail?id=${id}`
				});
				
			},
			getType(){
				let baseURL = getApp().globalData.baseURL
				uni.request({
					url:`${baseURL}/v1.0/good/itemCat/findAll`,
					success:(res) => {
						// console.log(res.data.result)
						this.types = res.data.result
					}
				})
			},
			getGift(){
				let baseURL = getApp().globalData.baseURL
				uni.request({
					url:`${baseURL}/v1.0/good/goods/findAll`,
					success:(res) => {
						// console.log(res.data.result)
						this.gifts = res.data.result
					}
				})
			},
		}
	}
</script>

<style>
	.content {
		width: 100%;
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
		height: 370upx;
		overflow: hidden;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin: 30rpx 0;
	}
	.types .type-item{
		width: 178rpx;
		height: 178rpx;
		display: flex;
		background-color: #FFFFFF;
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
		background-color: #FFFFFF;
		align-items: center;
		position: relative;
		/* padding-bottom: 20rpx; */
		font-size: 28rpx;
		font-weight: bold;
	}
	.gift-icon{
		width: 60rpx;
		height: 50rpx;
		background: url('/static/images/icon_01.png') no-repeat;
		background-size: cover;
	}
	.goods-icon{
		width: 60rpx;
		height: 50rpx;
		background: url('/static/images/icon_02.png') no-repeat;
		background-size: contain;
	}
	.gift-more,.goods-more{
		position: absolute;
		right: 2%;
		top: 21%;
		font-size: 24rpx;
		color: #969696;
	}
	.gift-content{
		display: flex;
		flex-wrap: wrap;
	}
	.gift-item{
		width: 225rpx;
		height: 320rpx;
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
		margin: 10upx 0;
	}
	.gift-item-price{
		color: #9b524b;
	}
</style>

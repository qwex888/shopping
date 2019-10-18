<template>
	<view class="content">
		<swiper class="baaner" :autoplay="true" :interval="3000" :circular="true" :duration="1000">
			<swiper-item>
				<view class="swiper-item">
					<image class="swiper-item-img"  :src="detail.smallPic" mode="scaleToFill"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="detail-content">
			<text class="content-text">{{detail.goodsName}}</text>
			<view class="content-price">
				<text class="content-now-price">{{detail.integral}}积分+{{detail.price}}元</text>
				<text class="content-old-price">市场价:{{detail.marketPrice}}元</text>
			</view>
			<view class="content-cover">
				<text class="content-freight">运费：免运费</text>
				<text class="content-store">库存数量：{{detail.inventory}}</text>
			</view>
			<text>商品详情</text>
		</view>
		<view class="detail-main">
			<image class="detail-main-img" :src="detail.details" mode="widthFix"></image>
		</view>
		<view class="footer">
			<view class="kf">
				<view class="kf-icon"></view>
				<view class="kf-text">客服</view>
			</view>
			<view class="ljdh" @click="goOrder()">立即兑换</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				detail:{
					caption:"补水保湿玻尿酸清洁控油收缩毛孔提亮肤色男女士学生贴化妆品套装",
					category1Id:7,
					category2Id:null,
					details:"商品详情",
					goodsName:"WIS隐形水润面膜",
					id:1001,
					integral:99,
					inventory:1000,
					isDelete:"0",
					isMarketable:"0",
					marketPrice:119,
					price:339,
					smallPic:"http://img11.360buyimg.com/n1/jfs/t1/20133/25/2192/383055/5c1a243bE442f881f/309d58df07cc768d.jpg"
				},
			}
		},
		// props:{
		// 	detail_id:String
		// },
		onLoad(option) {
			this.getDetial(option.id)
		},
		methods: {
			getDetial(id){
				let baseURL = getApp().globalData.baseURL
				uni.request({
					url:`${baseURL}/v1.0/good/goods/findById/${id}`,
					success: (res) => {
						console.log(res.data.result)
						this.detail = res.data.result
						try {
						    uni.setStorageSync('transmit', res.data.result);
						} catch (e) {
						    // error
						}
					}
				})
				
			},
			goOrder(){
				uni.navigateTo({
				    url: `../order/order`
				});

			}
		}
	}
</script>

<style>
	.content{
		margin-bottom: 120upx;
		background-color: #FFFFFF;
	}
	.detail-content{
		width: 100%;
		padding:30upx;
		font-size: 32upx;
	}
	.content-text{
		display: block;
		margin: 15upx 0;
	}
	.content-price{
		display: flex;
		margin: 30upx 0;
	}
	.content-now-price{
		width: 300upx;
		display: block;
		color: #f23031;
	}
	.content-old-price{
		color: #C0C0C0;
		text-decoration:line-through;
	}
	.content-cover{
		font-size: 30upx;
		border-top:1upx solid #F8F8F8;
		border-bottom:1upx solid #F8F8F8;
		padding: 15upx 0;
		display: flex;
		margin-bottom: 15upx;
	}
	.content-freight{
		width: 300upx;
	}
	.detail-main-img{
		width: 100%;
	}
	.swiper-item-img{
		width: 100%;
		height: 350upx;
	}
	.footer{
		width: 100%;
		height: 120upx;
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-around;
		align-items: center;
		position: fixed;
		bottom: 0;
		left: 0;
	}
	.kf{
		width: 50upx;
		height: 70upx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: #7f8082;
		background-color: #fffff;
		font-size: 24upx;
	}
	.kf .kf-icon{
		width: 50upx;
		height: 70upx;
		background: url(../../static/images/msg.png) no-repeat;
		background-size: contain;
	}
	.ljdh{
		width: 600upx;
		height: 90upx;
		line-height: 90upx;
		background-color: #fb4e30;
		color: #FFFFFF;
		text-align: center;
		font-size: 24upx;
		border-radius: 56upx;
	}
</style>

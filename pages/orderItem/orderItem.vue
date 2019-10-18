<template>
	<view class="content">
		<view class="user-header">
			<view class="my-jf">

			</view>
			<view class="jf-cotrol">
				<view class="wait-pay"></view>
				<view class="jfgz">{{order.status}}</view>
				
			</view>
			<navigator url="../index/index" class="back">商城首页</navigator>
		</view>
		<view class="user-order">
			<view class="user-name">{{user.contact}} <text>{{returnPhone}}</text></view>
			<view class="user-address">{{user.provinceAndCity}}{{user.address}}</view>
		</view>
			<view class="goods-item">
				<view class="goods-header">
					<text>积分商城</text>
				</view>
				<view class="goods-main">
					<view class="goods-img"><image :src="order.imgUrl"></image></view>
					<view class="goods-content">
						<view class="goods-tit">{{order.content}}</view>
						<view class="goods-price">
							<text class="good-price">{{order.integral}}积分+{{order.price}}元</text>
							<text class="goods-num">x {{order.number}}</text>
						</view>
					</view>
				</view>
				<view class="goods-all-price"><text></text>合计：￥{{order.number * order.price}}</view>
			</view>
			<view class="order-msg">
				<view class="order-code">订单编号：{{order.code}}</view>
				<view class="order-create">下单时间：{{order.createTime}}</view>
				<view class="order-pay">支付方式：{{order.paymentMethod}}</view>
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				order:{
					content:"白茶",
					price:339,
					integral:10,
					number:1,
					status:'待支付',
					imgUrl:'/static/images/gift-item_01.jpg',
					code:'2019101517010805159487724525',
					createTime:'2019-10-15 17:01:09'
				},
				user:{
					contact:'张伟',
					mobile:'15517717021',
					provinceAndCity:'浙江省-安徽市-平安县',
					notes:'',
					address:'上阵街道',
					isDefault:false
				}
			}
		},
		computed:{
			returnPhone:function(){
				let phone = this.user.mobile
				return phone.substr(0, 3) + '****' + phone.substr(7)
				
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
	.order-msg{
		margin-top: 30upx;
		width: 710upx;
		height: 150upx;
		padding: 20upx;
		border-radius: 20upx;
		background: #FFFFFF;
		font-size: 28upx;
		color: #808080;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.wait-pay{
		width: 64upx;
		height: 64upx;
		background: url(../../static/images/wait-pay.png) no-repeat;
		background-size: contain;
		margin-right: 20upx;
	}
	.jfgz{
		font-size: 36upx;
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
	.user-address{
		margin-top: 30upx;
		font-size: 30upx;
		color: #808080;
	}
	.user-name text{
		margin-left: 15upx;
		font-size: 28upx;
		color: #7F8082;
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
		width: 650upx;
		padding: 30upx;
		margin: 0 20upx;
		border-radius: 30upx;
		transform: translate(0,-10%);
	}
	.jf-cotrol{
		padding: 0 40upx;
		padding-top: 20upx;
		display: flex;
		justify-content: flex-start;
		margin-top: 60upx;
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
	.goods-all-price{
		font-size: 32upx;
		display: flex;
		justify-content: space-between;
	}
	.goods-price{
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.good-price{
		width: 400upx;
		margin-bottom: 30upx;
		color: #DD524D;
	}
	.goods-content{
		font-size: 30upx;
		margin-left: 50upx;
		margin-top: 50upx;
	}
	.goods-main{
		margin-top: 30upx;
		display: flex;
	}
	.goods-img{
		margin-left: 30upx;
	}
	.goods-img image{
		width: 150upx;
		height: 200upx;
	}
	.goods-header{
		display: flex;
		justify-content: space-between;
		font-size: 30upx;
	}
	.goods-status{
		font-size: 38upx;
	}
	.goods-status>text{
		font-size: 30upx;
		color: #DD524D;
		margin-right: 15upx;
	}
	.goods-item{
		width: 710upx;
		background: #FFFFFF;
		border-radius: 20upx;
		padding: 20upx;
	}
	.user-addr{
		
	}
	.goaddr{
		font-size: 38upx;
	}
</style>

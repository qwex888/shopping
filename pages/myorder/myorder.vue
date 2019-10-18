<template>
	<view class="content">
		<view class="header">
			<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" show-scrollbar="true">
				<view :class="[actived === item.id ? 'actived-type' : '', 'scroll-view-item_H']" :id="index" v-for="(item,index) in types" :key="index" @click="swtichs(item.id)">{{item.name}}</view>
			</scroll-view>
		</view>
		<view class="main">
			<view class="scroll-type">
				<view class="list">
					<view class="notype"  v-if="noData">
						<image class="no-exist" src="../../static/images/none.jpg" mode="widthFix"></image>
					</view>
					<view class="goods-list" v-else>
						<view class="goods-item" v-for="(item,index) in orderList" :key="index">
							<view class="goods-header">
								<text>积分商城</text>
								<view class="goods-status"><text>{{item.status}}</text> > </view>
							</view>
							<view class="goods-main" @click="goOrderItem()">
								<view class="goods-img"><image :src="item.imgUrl"></image></view>
								<view class="goods-content">
									<view class="goods-tit">{{item.content}}</view>
									<view class="goods-price">
										<text class="good-price">{{item.integral}}积分+{{item.price}}元</text>
										<text class="goods-num">x {{item.number}}</text>
									</view>
								</view>
							</view>
							<view class="goods-all-price"><text></text>合计：￥{{item.number * item.price}}</view>
							<view class="goods-footer">
								<view class="is-cancel" v-show="item.status == '待支付'">取消订单</view>
								<view class="is-del" v-show="item.status == '已完成'">删除订单</view>
								<view class="is-pay" v-show="item.status == '待支付'">去支付</view>
								<view class="is-evaluate" v-show="item.status == '已完成'">去评价</view>
								<view class="is-confirm" v-show="item.status == '发货中'">确认收货</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				actived:1,
				noData:false,
				types:[
					{
						id:1,
						name:"全部"
					},
					{
						id:2,
						name:"待付款"
					},
					{
						id:3,
						name:"待发货"
					},
					{
						id:4,
						name:"待收货"
					},
					{
						id:5,
						name:"待评价"
					},
				],
				orderList:[
					{	
						content:"白茶",
						price:339,
						integral:10,
						number:1,
						status:'待支付',
						imgUrl:'/static/images/gift-item_01.jpg'
					}
				]
			}
		},
		created() {
			// this.swtichs(this.actived)
		},
		onLoad:function(option){
			uni.startPullDownRefresh();
			// console.log(option)
			// console.log(option.id)
			// if(option.id){
			// 	console.log('jin')
			if(option.id !== undefined){
				console.log("acitved:"+this.actived,'option.id:'+option.id)
				this.actived = option.id
				this.swtichs(option.id)
			}
			
		},
		computed:{
// 			retrunStatus:function(){
// 
// 			}
		},
		methods: {
			goOrderItem(){
				uni.navigateTo({
				    url: '/pages/orderItem/orderItem'
				});
			},
			getOrder(){
				let token = getApp().globalData.token
				let baseURL = getApp().globalData.baseURL
				uni.request({
					url: `${baseURL}`,
					method: 'GET',
					data: {},
					success: res => {
						console.log(res.data)
					},
					fail: () => {},
					complete: () => {}
				});
			},
			onPullDownRefresh() {
				setTimeout(function () {
					uni.stopPullDownRefresh();
				}, 1000);
			},
			swtichs: function(id) {
				console.log("acitved:"+this.actived,'id:'+id)
				this.actived = id
			},
			upper: function(e) {
				console.log(e)
			},
			lower: function(e) {
				console.log(e)
			},
			scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			goTop: function(e) {
				// 解决view层不同步的问题
				this.scrollTop = this.old.scrollTop
				this.$nextTick(function() {
					this.scrollTop = 0
				});
				uni.showToast({
					icon:"none",
					title:"纵向滚动 scrollTop 值已被修改为 0"
				})
			}
		}
	}
</script>

<style>
	.goods-footer{
		margin-top: 30upx;
		display: flex;
		justify-content: flex-end;
		font-size: 30upx;
	}

	.goods-footer view{
		padding: 10upx;
		border-radius: 30upx;
		margin:0 10upx;
		border: 2upx solid #F1F1F1;
	}
	.goods-footer .is-pay,.goods-footer .is-evaluate,.goods-footer .is-confirm{
		border: 2upx solid #DD524D;
		color: #DD524D;
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
	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
		-webkit-scrollbar:none;
	}

	.scroll-view-item {
		height: 80upx;
		line-height: 80upx;
		text-align: center;
		font-size: 24upx;
	}

	.scroll-view-item_H {
		display: inline-block;
		width: 150upx;
		height: 80upx;
		line-height: 80upx;
		text-align: center;
		font-size: 28upx;
	}
	.actived-type{
		color: #F0AD4E;
	}
	.notype{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.no-exist{
		width: 280upx;
		height: 326upx;
		margin-top: 200upx;
		/* padding-bottom: 300upx; */
	}
</style>

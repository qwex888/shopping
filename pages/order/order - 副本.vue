<template>
	<view class="content">
		<view class="content-box">
		<view class="address">
			<view class="no-addr" v-if="!userAddr"  @click="goAddress()">
				<text class="addr">添加默认地址</text>
				<text class="arrow">></text>
			</view>
			<view class="choose-addr" v-else @click="goMyaddr()">
				<view class="user-addr">
					<text>{{userAddr.contact}} {{userAddr.mobile}}</text>
					<text> > </text>
				</view>
				<text class="user-area">{{userAddr.provinceAndCity}},{{userAddr.address}}</text>
			</view>
		</view>
		<view class="detail-content">
			<view class="detail-main">
				<image class="detail-img" :src="detail.smallPic" mode=""></image>
				<view class="detail-title">
					<view class="detail-tit">{{detail.goodsName}}</view>
					<view class="detail-price">{{detail.integral}}积分+{{detail.price}}元</view>
				</view>
  
			</view>
			<view class="detail-num">
				<text>数量</text>
				<view class="detail-number">
					<view class="number-sub" @click="subDetail()">-</view>
					<input type="number" maxlength="2"  class="numbers" :value="returnNum" />
					<view class="number-add" @click="addDetail()">+</view>
				</view>
			</view>
			<view class="detail-integral">
				<text>可用积分</text>
				<text>{{detail.inventory}}</text>
			</view>
		</view>
		<view class="detail-allprice">
			<view class="allprice">
				<text>商品总额</text>
				<text class="price">{{detail.integral}}积分+{{detail.price}}元</text>
			</view>
			<view class="allfreight">
				<text>运费</text>
				<text class="freight">免运费</text>
			</view>
		</view>
		<view class="footer">
			<view class="math-price">合计：<text>￥ {{nums}}</text></view>
			<view class="submit" @click="submitOrder()">提交订单</view>
		</view>
		</view>
			<uni-popup ref="popup" type="bottom">
				<view class="pay-header">
					<text class="pay-exit" @click="closePopup()">取消</text>
					<text class="pay-tit">支付方式</text>
					<text class="pay-submit"></text>
				</view>
				<view class="pay-choose">
					<view class="pay-list">
						<view class="pay-item">
							<view class="pay-yue"><text></text>余额支付</view>
							<text> > </text>
						</view>
						<view class="pay-item">
							<view class="pay-yinlian"><text></text>银联支付</view>
							<text> > </text>
						</view>
						<view class="pay-item" @click="goAliPay()">
							<!-- <view class="pay-ali" @click="goPay()"><text></text>支付宝支付</view> -->
							<view class="pay-ali"><text></text>支付宝支付</view>
							<text> > </text>
						</view>
					</view>
				</view>
			</uni-popup>

	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		components: {uniPopup},
		data() {
			return {
				isSubmit:false,
				animationData: {},
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
				userAddr:{},
				orderInfo:'alipay_sdk=alipay-sdk-java-dynamicVersionNo&app_id=2019093067917773&biz_content=%7B%22body%22%3A%22%E8%B4%AD%E4%B9%B0%E5%95%86%E5%93%81%22%2C%22out_trade_no%22%3A%227f2e54d4e4bb459ba3dcb1b90f6354%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22subject%22%3A%22%E8%B4%AD%E4%B9%B0%E5%95%86%E5%93%81%22%2C%22timeout_express%22%3A%2230m%22%2C%22total_amount%22%3A%221.0%22%7D&charset=UTF-8&format=json&method=alipay.trade.app.pay&notify_url=http%3A%2F%2Flocalhost%2Fv1.0%2Fpaymentchannel%2Ftopup%2Falipay%2Fnotify_call&return_url=http%3A%2F%2Flocalhost%2Fv1.0%2Fpaymentchannel%2Ftopup%2Fsdjpaysuccess&sign=Lm0cq9N3O4yR8VMj8LOgFFWwKqY%2BmxhDo7xTsGAtsqPSA0TRtSA2vTM5hmhBZ6L%2BRFYZ9hMaZuEqez4fSkLlOZX5fylIHUGO3EAgsN63W%2FRMZHXlmMAYfiLddlkrG%2BRF2rB16lgsT%2FedGXNHUdnSN8%2FRE4UHciLiOlAx6AvTaIOXs85D1bXlmczecn0cuPYrs%2FFGWky7tImg3sL5loSHGc9kmkRGmoHrFEOe4cps6DPtKTsMvnkMx9uwo1%2F%2Bfwh%2BpO96U8BUPViGJjNhJWV1yT3VDKnSGGeuXyOzZMsq8811ShH1Zzp0IOqBu5OqDliU2EqUnYYLW3Vms3htGHwq1w%3D%3D&sign_type=RSA2&timestamp=2019-10-17+13%3A55%3A07&version=1.0',
				num:1,
			}
		},
		onShow:function(option){
			
			console.log('option:'+option)
			if(option){
				console.log(1)

				this.userAddr = getApp().globalData.userAddr[option.index]
			}else{
				let addr = getApp().globalData.userAddr
				let newAddr = addr.find(item => item.isDefault)
				// console.log(newAddr)
				this.userAddr = newAddr
			}
			getApp().globalData.isOrder = true

		},
		onReady:function() {
			// this.userAddr = getApp().globalData.userAddr[0]
			// this.getUserAddress()
			this.getDetail()
		},
		computed:{
			returnNum:function(){
				if(this.num >= 1){
					return this.num
				}else{
					let numm = 1
					return this.num = numm 
				}
			},
			nums:function(){
				if(this.num >= 1){
					return parseFloat(this.num * this.detail.price)
				}else{
					return parseFloat(this.detail.price)
				}
			}
		},
		methods: {

			//获取商品信息
			getDetail(){
				try {
				    const value = uni.getStorageSync('transmit');
				    if (value) {
						this.detail = value
				        // console.log(value);
				    }
				} catch (e) {
				    // error
				}
			},
			goAddress(){
				uni.navigateTo({
				    url: `/pages/address/address`
				});
			},
			goMyaddr(){
				uni.navigateTo({
				    url: `/pages/myaddr/myaddr`
				});
			},
			subDetail(){
				this.num--
			},
			addDetail(){
				this.num++
			},
			goAliPay(){
				// @RequestParam("goodsId") Long goodsId, // 商品id
				// @RequestParam("addressId") Long addressId, //地址id
				// @RequestParam("number") Long number, // 数量
				console.log(this.userAddr)
				let token = getApp().globalData.token
				const goodsId = this.detail.id
				const addressId = this.userAddr.id
				let number = this.num
				console.log(token,goodsId,addressId,number)
				uni.request({
					url: `http://192.168.124.10/v1.0/good/order/save/${token}?goodsId=${goodsId}&addressId=${addressId}&number=${number}&paymentMethod=3`,
					// url: `http://192.168.124.10/v1.0/good/order/save/${token}`,
					method: 'POST',
					// data: {
					// 	// 'token':token,
					// 	'goodsId':goodsId,
					// 	'addressId':addressId,
					// 	'number':number,
					// 	'paymentMethod':3
					// },
					success: res => {
						
						console.log(res.data)
					},
					fail: () => {},
					complete: () => {}
				});
			},
			openAliPay(){
				let orderInfo = this.orderInfo
				uni.requestPayment({
				    provider: 'alipay',
				    orderInfo: orderInfo , //微信、支付宝订单数据
				    success: function (res) {
				        console.log('success:' + JSON.stringify(res));
				    },
				    fail: function (err) {
				        console.log('fail:' + JSON.stringify(err));
				    }
				});

			},
			submitOrder(){
				if(this.userAddr){
					// this.isSubmit = true
					// console.log('提交订单')
					// this.goPay()
					this.$refs.popup.open()
				}else{
					uni.showToast({
					    title: '请选择地址',
						icon:'none',
					    duration: 1000
					});
					setTimeout(()=>{
						uni.hideToast();
					},2000)
				}

			},
			closePopup(){
				this.$refs.popup.close()
			}
		}
	}
</script>

<style>
	.html{
		background-color: #F1F1F1;
	}
	.content-box{
		/* padding: 0 20upx; */
	}
	.address{

	}
	.no-addr{
		border-top: 1upx solid #F8F8F8;
		width: 710upx;
		height: 85upx;
		font-size: 30upx;
		background-color: #FFFFFF;
		padding: 0 20upx;
		margin-bottom: 20upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.choose-addr{
		border-top: 1upx solid #F8F8F8;
		width: 710upx;
		height: 85upx;
		font-size: 30upx;
		background-color: #FFFFFF;
		padding: 20upx 20upx;
		margin-bottom: 20upx;
	}
	.user-addr{
		display: flex;
		justify-content: space-between;
		margin-bottom: 10upx;
	}
	.user-area{

		font-size: 28upx;
		color: #999999;
	}
	.addr{
		
	}
	.arrow{
		font-size: 38upx;
		color: #999999;
	}
	.detail-num{
		display: flex;
		justify-content: space-between;
	}
	.detail-number{
		width: 200upx;
		display: flex;
		justify-content: space-between;
	}
	.number-sub, .number-add, .numbers{
		width: 60upx;
		height: 60upx;
		background-color: #f7f8fa;
		font-size: 33upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.numbers{
		color: #333333;
	}
	.detail-content{
		width: 710upx;
		background-color: #FFFFFF;
		padding: 20upx;
	}
	.detail-main{
		width: 100%;
		display: flex;
	}
	.detail-img{
		width: 207upx;
		height: 202upx;
	}
	.detail-title{
		margin-left: 50upx;
		display: flex;
		flex-direction: column;
		
	}
	.detail-tit{
		font-size: 30upx;
		margin-bottom: 30upx;
	}
	.detail-price{
		color: #fb4e30;
		font-size: 28upx;
	}
	.detail-num{
		color: #b7b7b7;
		font-size: 29upx;
		margin-bottom: 20upx;
	}
	.detail-number{
		
	}
	.detail-integral{
		display: flex;
		justify-content: space-between;
		font-size: 29upx;
		color: #b7b7b7;
		margin-bottom: 50upx;
	}
	.detail-allprice{
		margin-top: 20upx;
		background-color: #FFFFFF;
		width: 710upx;
		padding: 20upx;
	}
	.price{
		color: #fb4e30;
	}
	.allprice, .allfreight{
		display: flex;
		justify-content: space-between;
		color: #636363;
		font-size: 29upx;
		margin-bottom: 20upx;
	}
	.pay-box{
		border-top: 4upx solid #F7F7F7;
		width: 750upx;
		height: 600upx;
		background-color: #F5F5F5;
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 10;
	}
	.pay-header{
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 80upx;
		background-color: #FFFFFF;
		color: #DD524D;
		font-size: 30upx;
	}
	.pay-tit{
		font-weight: bold;
		color: #333333;
	}
	.pay-exit{
		width: 120upx;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 10upx;
		color: #969696;
	}
	.pay-submit{
		width: 120upx;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 10upx;
	}
	.pay-list{
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		background: #F8F8F8;
	}
	.pay-item{
		display: flex;
		padding: 20upx 0;
		margin: 15upx 0;
		background-color: #FFFFFF;
		justify-content: space-between;
	}
	.pay-item>view{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.pay-yue text{
		width: 64upx;
		height: 64upx;
		background: url(../../static/images/yue.png) no-repeat;
		background-size: contain;
		display: block;
		margin-right: 15upx;
	}
	.pay-yinlian text{
		width: 64upx;
		height: 64upx;
		background: url(../../static/images/yinlian.png) no-repeat;
		background-size: contain;
		display: block;		
		margin-right: 15upx;
	}
	.pay-ali text{
		width: 64upx;
		height: 64upx;
		background: url(../../static/images/alipay.png) no-repeat;
		background-size: contain;
		display: block;
		margin-right: 15upx;
	}
	.freight{
		
	}
	.footer{
		width: 100%;		
		height: 120upx;
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		background: #FFFFFF;
		z-index: 5;
	}

	.math-price{
		font-size: 24upx;
		margin-right: 20upx;
	}
	.math-price text{
		font-size: 32upx;
		color: #fb4e30;
		font-weight: bold;
	}
	.submit{
		width: 220upx;
		height: 120upx;
		line-height: 120upx;
		background-color: #fb4e30;
		color: #FFFFFF;
		text-align: center;
		font-size: 28upx;
	}
</style>

<template>
	<view class="content">
		<button class="goaddr" @click="goAddr()">添加地址</button>
		<view class="addr-box">
			<view class="noaddr" v-if="isExist">
				<image src="../../static/images/noaddr.jpg" mode=""></image>
			</view>
			<view class="addr-list" v-else>
				<view class="addr-item" v-for="(item,index) in addr" :key="index">
					<view @click="backOrder(index)">
						<view class="shr">
							<text>收货人：{{item.contact}}</text>
							<text>{{item.mobile}}</text>
						</view>
						<text class="addr-area">{{item.address}}</text>
					</view>
					<view class="moren">
						 <label class="radio"><radio value="r1" @change="switchChange"  :checked="item.isDefault" disabled />默认地址</label>
						 <view class="goEdit" @click="goEdit(index)">修改</view>
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
				isExist:false,
				addr:[]
			}
		},
		onShow:function(){
			this.getUserAddress()
		},
		created() {
			// if(getApp().globalData.userAddr[0]){
			// 	this.addr = getApp().globalData.userAddr
			// }else{
			// 	this.getUserAddress()
			// }
			
		},
		methods: {
			//获取用户列表
			getUserAddress(){
				let token = getApp().globalData.token
				let baseURL = getApp().globalData.baseURL

				uni.request({
					url:`${baseURL}/v1.0/good/address/findByUserId/${token}`,
					method:'GET',
					success:(res) => {
						console.log(res.data.result)
						getApp().globalData.userAddr = res.data.result
						this.addr = res.data.result
					}
				})
			},
			switchChange(e){
				 console.log('switch 发生 change 事件，携带值为', e.target.value)
			},
			backOrder(index){
				console.log('addrIndex:'+ index)
				let isOrder = getApp().globalData.isOrder
				console.log('isOrder:'+isOrder)
				if(isOrder){
					//如果有生成订单返回订单页，并传选中的地址返回
					try {
					    uni.setStorageSync('chooseOrderIndex', index);
					} catch (e) {
					    // error
					}
					uni.navigateTo({
						url: `../order/order?ip=${1}`,
					});
					getApp().globalData.isOrder = false
				}else{
					// 没有则不执行操作
				}

			},
			goAddr(){
				uni.navigateTo({
				    url: `/pages/address/address`
				});
			},
			goEdit(index){
				uni.navigateTo({
				    url: `/pages/address/address?index=${index}`
				});
			}
		}
	}
</script>

<style>
	.content{
		width: 100%;
	}
	.addr-box{
		margin-top: 50upx;
	}
	.goaddr{
		margin-top: 30upx;
		width: 95%;
	}
	.noaddr{
		width: 700upx;
		height: 780upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.addr-list{
		margin-top: 30upx;
	}
	.addr-item{
		width: 670upx;
		padding: 20upx;
		margin: 0 20upx;
		margin-top: 30upx;
		background-color: #FFFFFF;
		border-radius: 20upx;
	}
	.shr{
		display: flex;
		justify-content: space-between;
		font-size: 28upx;
	}
	.addr-area{
		font-size: 26upx;
		color: #808080;
	}
	.moren{
		margin-top: 30upx;
		padding-top: 10upx;
		border-top: 1upx solid #FCEEE8;
		font-size: 28upx;
		display: flex;
		justify-content: space-between;
	}
</style>

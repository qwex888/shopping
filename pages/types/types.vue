<template>
	<view>
		<scroll-view class="scroll-view_H" scroll-x="true" show-scrollbar="true">
			<view :class="[actived === item.id ? 'actived-type' : '', 'scroll-view-item_H']" :id="index" v-for="(item,index) in types" :key="index" @click="swtichs(item.id)">{{item.name}}</view>
		</scroll-view>
		<view :class="noData ? 'content' : ''">
			<view class="scroll-type">
				<view class="list">
					<view class="notype"  v-if="noData">
						<image class="no-exist" src="../../static/images/none.jpg" mode="widthFix"></image>
					</view>
					<view class="goods-list" v-else>
						<view class="goods-item" v-for="(item,index) in goodList" @click="goDetail(item.id)" :key="index">
							<view class="goods-img"><image :src="item.smallPic" mode="scaleToFill"></image></view>
							<view class="goods-content">
								<text class="goods-tit">{{item.goodsName}}</text>
								<text class="goods-guige">规格:</text>
								<text class="good-out">已售:{{item.inventory}}</text>
								<text class="good-price">{{item.integral}}积分+{{item.marketPrice}}元</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	// import scrollHeader from "../../components/scrollHeader.vue"
	// import scrollType from "../../components/scrollType.vue"
	export default {
		// components:{
		// 	scrollHeader,
		// 	scrollType
		// },
		data() {
			return {
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				actived:1,
				noData:true,
				types:[
					{
						name:'家居日用',
						id:'1'
					},
					{
						name:'数码生活',
						id:'2'
					},
					{
						name:'休闲零食',
						id:'3'
					},
					{
						name:'母婴亲子',
						id:'4'
					},
					{
						name:'箱包手袋',
						id:'5'
					},
					{
						name:'轻奢优选',
						id:'6'
					},
					{
						name:'个护时尚',
						id:'7'
					},
					{
						name:'优惠礼包',
						id:'8'
					},
					{
						name:'新品推荐',
						id:'9'
					},
				],
				goodList:[]
			}
		},
		computed:{
			
		},
		onLoad:function(option){


			uni.startPullDownRefresh();
			// console.log(option)
			// this.typeId = option.id
			if(option.id){
				this.actived = option.id
			}	
		},
		onReady() {
		},
		created() {
			const p1 = new Promise((resolve,reject) => {
				this.getGoods(1,1,'push')
				resolve()
			})
			const p2 = new Promise((resolve,reject) => {
				uni.stopPullDownRefresh();
				resolve()
			})
			Promise.all([p1, p2]).then((result) => {
			  console.log(result) 
			}).catch((error) => {
			  console.log(error)
			})
			// this.getGoods(1,1,'push')
		},
		methods: {
			onPullDownRefresh() {
				setTimeout(function () {
					uni.stopPullDownRefresh();
				}, 1000);
			},
			goDetail(id){
				uni.navigateTo({
				    url: `/pages/detail/detail?id=${id}`
				});
			},
			// typeId(id){
			// 	uni.$emit('typeId',{id})
			// },
			swtichs(id){
				if(id){
					this.actived = id
				}
					console.log(this.actived)
					let tyId = this.actived
					this.getGoods(tyId,1,'replace')
					uni.pageScrollTo({
						scrollTop: 0,
						duration: 0
					});
				},
			getGoods(id,page,type){
				let baseURL = getApp().globalData.baseURL
				uni.request({
					url:`${baseURL}/v1.0/good/goods/searchGoods?typeId=${id}`,
					method:"POST",
					dataType:"JSON",
					header: {
						"Content-Type":"application/x-www-form-urlencoded"
					},
					success:(res)=>{
						console.log(res.data)
						if(res.data.result.content.length){
							this.noData = false
							if(type === 'push'){
								let goodList = this.goodList.concat(res.data.result.content)
								this.goodList = goodList
							}else if(type === 'replace'){
								this.goodList = res.data.result.content
							}
						}else{
							this.noData = true
						}
					}
				})
			},
			upper: function(e) {
				// console.log(e)
			},
			lower: function(e) {
				// console.log(e)
			},
			scroll: function(e) {
				// console.log(e)
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

	.content{
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		/* background-color: #FFFFFF; */
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
		padding-bottom: 300upx;
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
	.scroll-type{
		width:750upx;
		
	}
		
	.swiper{
		width: 100%;
		height: 800upx;
	}
	.swiper-item{
		width: 100%;
		display: block;
		height: 800upx;
	}
	.goods-item{
		width: 620upx;
		/* height: 0upx; */
		margin: 0 15upx;
		padding: 30upx 50upx;
		display: flex;
		justify-content: flex-start;
		background-color: #FFFFFF;
		border-radius: 20upx;
		margin-top: 20upx;
	}
	.goods-img image{
		width: 150upx;
		height: 200upx;
	}
	.goods-content{
		margin-left: 30upx;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-around;
		font-size: 30upx;
	}
	.goods-guige, .good-out{
		color: #969696;
	}
	.good-price{
		color: #F23031;
	}
</style>

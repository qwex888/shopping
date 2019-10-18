<template>
	<view class="content">
		<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" show-scrollbar="true">
			<view :class="[actived === item.id ? 'actived-type' : '', 'scroll-view-item_H']" :id="index" v-for="(item,index) in types" :key="index" @click="swtichs(item.id)">{{item.name}}</view>
		</scroll-view>
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
				]
			};
		},
		props:{
			// typeId:String
		},
		created() {
			this.swtichs(this.typeId)
		},
		methods:{
			swtichs(id){
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
	.content{
		background-color: #FFFFFF;
		border-bottom: 1upx solid #F7F7F7;
		/* border-top: 1upx solid #999999; */
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
</style>

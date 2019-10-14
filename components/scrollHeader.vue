<template>
	<view>
		<scroll-view class="scroll-view_W" scroll-x="true" @scroll="scroll" scroll-left="120">
			<view class="scroll-view-item_H uni-bg-red" v-for="(item,index) in types" :key="index" >{{item.name}}</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
						name:'数码生活',
						id:'3'
					},
					{
						name:'休闲零食',
						id:'4'
					},
					{
						name:'母婴亲子',
						id:'5'
					},
					{
						name:'箱包手袋',
						id:'6'
					},
					{
						name:'轻奢优选',
						id:'7'
					},
					{
						name:'个护时尚',
						id:'8'
					},
					{
						name:'优惠礼包',
						id:'9'
					},
					{
						name:'新品推荐',
						id:'10'
					},
				]
			};
		},
		methods:{
			scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
		}
	}
</script>

<style>

</style>

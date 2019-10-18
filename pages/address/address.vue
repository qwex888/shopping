<template>
	<view class="content">
		<form class="form-box" @submit="formSubmit" @reset="formReset">
			<view class="form-backbround">
				<view class="form-name">
					<text>姓名</text>
					<input type="text" name="contact" :value="userAddr.contact" placeholder="收货人姓名" />
				</view>
				<view class="form-phone">
					<text>电话</text>
					<input type="number" maxlength="11" name="mobile" :value="userAddr.mobile" placeholder="收货人手机号" />
				</view>
				<view class="form-address">
					<text>地区</text>
					<input class="result" name="provinceAndCity" type="text" @tap="toggleTab(tabList[9],9)" :value="resultInfoC" placeholder="省/市/区" disabled />
					<w-picker 
						mode="region"
						:defaultVal="['浙江省','杭州市','滨江区']"
						:areaCode="['33','3301','330108']"
						:hideArea="false"
						@confirm="onConfirm" 
						ref="region" 
						themeColor="#f00">
					</w-picker>
				</view>
				<view class="form-addr">
					<text>详细地址</text>
					<input type="text" name="address" :value="userAddr.address" placeholder="街道门牌 楼层房间号等信息" />
				</view>
				<view class="form-code">
					<text>邮政编码</text>
					<input type="number" maxlength="6"  name="notes" :value="userAddr.notes" placeholder="邮政编码" />
				</view>
				<view class="form-switch">
					<text>设为默认收货地址</text>
					<switch  name="isDefault" :checked="userAddr.isDefault" @change="switch1Change" />
				</view>
			</view>
			<view class="submit-box">
				<button class="submit" form-type="submit">保存</button>
			</view>
		</form>

	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
	export default {
		 components:{
		        wPicker
		},
		data() {
			return {
				isEmpty:true,
				mode:"range",
				defaultVal:[0,0,0,0,0,0,0],
				userAddr:{
					contact:'',
					mobile:'',
					provinceAndCity:'',
					notes:'',
					address:'',
					isDefault:false
				},
				tabList:[{
					mode:"linkage",
					name:"多级联动"
				},{
					mode:"half",
					name:"选择上午下午"
				},{
					mode:"range",
					name:"选择区间的日期"
				},{
					mode:"limitHour",
					name:"选择短期的日期上下午"
				},{
					mode:"limit",
					name:"选择短期的日期时间"
				},{
					mode:"date",
					name:"日期选择"
				},
				{
					mode:"yearMonth",
					name:"年月"
				},{
					mode:"dateTime",
					name:"日期时间选择"
				},{
					mode:"time",
					name:"时间选择"
				},
				{
					mode:"region",
					name:"省市区"
				},
				{
					mode:"selector",
					name:"单列选择"
				}],
				tabIndex:0,
				selectList:[{
					label:"男",
					value:0
				},{
					label:"女",
					value:1
				}],
				resultInfo:[],
				linkList:[],
				addrIndex:-1,
				change:true,
			}
		},
		created() {
			
		},
		onLoad(option) {
			console.log('option:'+option.index)
			if(option.index !== undefined){
				this.addrIndex = option.index
				// console.log(getApp().globalData.userAddr[option.index])	
				this.userAddr = getApp().globalData.userAddr[option.index]
			}else{

			}
		},
		computed:{
			resultInfoC:function(){
				if(this.resultInfo.length > 1){
					return this.resultInfo[0] + '-' + this.resultInfo[1] + '-' + this.resultInfo[2]
				}else if(this.userAddr){
					return this.userAddr.provinceAndCity
				}else{
					return ''
				}
			}
		},
		methods: {

			switch1Change(e){
				console.log(e.detail)
				if(e.detail.value){
					let addrList = getApp().globalData.userAddr.forEach(item => {
						// console.log(item)
						//可能问题改变默认后，遍历的所有都变味false
						item.isDefault = false
					})
					console.log(getApp().globalData.userAddr)
				}
			},
			toggleTab(item,index){
					this.tabIndex=index;
					this.mode=item.mode;
					this.defaultVal=item.value;
					this.$refs[item.mode].show();
				},
				onConfirm(val){
					// console.log(val);
					//如果页面需要调用多个mode类型，可以根据mode处理结果渲染到哪里;
					// switch(this.mode){
					// 	case "date":
					// 		break;
					// }
					// console.log(val.checkArr)
					this.resultInfo = val.checkArr
					
				},
			// 请求添加地址
			addOrder(data){
				console.log('添加地址')
				let baseURL = getApp().globalData.baseURL
				let token = getApp().globalData.token
				uni.request({
				    url: `${baseURL}/v1.0/good/address/save/${token}`,
					
					method:'POST',
					// header: {
					// 	"Content-Type":"application/x-www-form-urlencoded"
					// },
				    data: data,
				    success: (res) => {
						console.log(res.data)
				    },
				})
			},
			//更新地址
			updateOrder(data){
				console.log('更新地址')
				let baseURL = getApp().globalData.baseURL
				let token = getApp().globalData.token
				uni.request({
				    url: `${baseURL}/v1.0/good/address/update/${token}`,
					method:'POST',
					// header: {
					// 	"Content-Type":"application/x-www-form-urlencoded"
					// },
				    data: data,
				    success: (res) => {
						console.log(res.data)
				    },
				})
				console.log(getApp().globalData.userAddr)
			},
			//提交表单
			formSubmit(e){
				console.log(e.detail.value,this.addrIndex)
				
				let value = e.detail.value
				let n = 0
				for(var i in value) {
					if(value[i] === '' ){
						uni.showToast({
							title: '不能为空，请完整填写',
							icon:'none'
						});
						
						setTimeout(()=>{
							uni.hideToast();
						},3000)
						console.log("为空："+i+value[i])

					}else{
						n++
						// this.isEmpty = false
						// console.log('满足条件:'+value[i])
						
					}
				}
				// console.log('n：'+n)
				if(n > 5){
					console.log('提交')
					if(this.addrIndex === -1){
						//-1 等于新增地址
						getApp().globalData.userAddr.push(e.detail.value)
						this.addOrder(e.detail.value)
					}else{
						//替换地址
						
						let editAddr = e.detail.value
						editAddr.id = getApp().globalData.userAddr[this.addrIndex].id
						getApp().globalData.userAddr.splice(this.addrIndex,1,editAddr)
						this.updateOrder(editAddr)
					}
					
					//提交数据并跳转到myaddr页
					// uni.redirectTo({
					//     url: '../myaddr/myaddr'
					// });
					uni.navigateBack({
					    delta: 1
					});
				}

					
			}

		}
	}
</script>

<style>
.content{
	width: 100%;
}
.form-box{
	background-color: #FFFFFF;
}
.form-name, .form-phone,.form-addr, .form-code, .form-switch, .form-address{
	padding: 30upx;
	border-top: 1upx solid #F7F7F7;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 28upx;
}
.form-name input, .form-phone input, .form-addr input, .form-code input{
	width: 520upx;
}
.result{
	width: 400upx;
	height: 100%;
}
.submit-box{
	margin-top: 80upx;
}
.form-backbround{
	background-color: #FFFFFF;
}
.submit{
	width: 600upx;
	background-color: #fe6c3e;
	color: #FFFFFF;
}
</style>

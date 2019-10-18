const baseURL = 'http://192.168.124.10'
 
 //优惠礼包
export const getGift = () => {
				uni.request({
					url: `baseURL+ /v1.0/good/goods/findAll`,
					method: 'GET',
					data: {},
					success: res => {
						console.log(res)
					},
				});
			}
			
//分类查询
export const getType = () => {
				uni.request({
					url: `baseURL+ /v1.0/good/itemCat/findAll`,
					method: 'GET',
					data: {},
					success: res => {
						console.log(res)
					},
				});
			}
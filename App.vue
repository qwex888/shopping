<script>
	export default {
		// {
		// 	contact:'张三',
		// 	mobile:1551731222,
		// 	provinceAndCity:'上海市-市辖区-宝山区',
		// 	notes:21000,
		// 	address:'某某路22号',
		// 	isdefault:false,
		// 	id:2019101620504920582,
		// 	alias:'',
		// }
		 globalData: {  
		        userAddr:[],
				isOrder:false,
				token:'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJKdUhlaSIsImV4cCI6MTU3MTQwNzUwMywidXNlcklkIjoyOTEyMTY0NDQsImJyYW5kSWQiOjEwMDE5NSwicGhvbmUiOiIxNzYyMDA0MDgwOCJ9.2PKBxIU64xjTeL7EVbcqMiMFCE9MC97A_H1FsEHwiz4zAjQMh37MQ7sq3L3NxixcbfZWAXM1BlKniyXKn7Xc_g',
				baseURL:'http://192.168.124.10'
		},  
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	page{
		background-color: #f5f5f5;
	}
</style>

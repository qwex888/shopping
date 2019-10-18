import Request from '../plugins/request/js/index';

export default {
    // 获取 模拟token
    getMockToken (id) {
        // return Request().get('/test/token/get?id=' + id);
		return 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJKdUhlaSIsImV4cCI6MTU3MTQwNzUwMywidXNlcklkIjoyOTEyMTY0NDQsImJyYW5kSWQiOjEwMDE5NSwicGhvbmUiOiIxNzYyMDA0MDgwOCJ9.2PKBxIU64xjTeL7EVbcqMiMFCE9MC97A_H1FsEHwiz4zAjQMh37MQ7sq3L3NxixcbfZWAXM1BlKniyXKn7Xc_g'
    },

    // 验证 模拟token，id为 2460392754 则 success，code 200， 否则 fail code 为 401
    // checkMockToken (token) {
    //     return Request().request({
    //         url: '/test/token/check',
    //         method: 'get',
    //         params: { name: 'xxx' },
    //         header: { token, uid: 'ux' },
    //         count: 0 // 用来记录 每个实例请求的 请求次数（可以用来判断 重新发送请求的次数）
    //     });
    // }
}
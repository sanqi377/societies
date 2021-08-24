"use strict";
var ajaxHttp = function (url, data) {
    var token = wx.getStorageSync('token');
    return new Promise(function (resolve, reject) {
        wx.request({
            url: url,
            method: 'POST',
            data: data,
            header: {
                token: token
            },
            success: function (res) {
                resolve(res);
            },
            fail: function (err) {
                reject(err);
            }
        });
    });
};
var checkLogin = function () {
    var token = wx.getStorageSync('token');
    if (!token)
        return false;
    return true;
};
var getFont = function () {
    return new Promise(function (resolve) {
        wx.loadFontFace({
            family: 'PingFang',
            source: 'url("http://localhost:3000/index/index/getFont")',
            success: function () {
                resolve(true);
            }
        });
    });
};
module.exports = {
    ajax: ajaxHttp,
    checkLogin: checkLogin,
    getFont: getFont
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUtBLElBQUksUUFBUSxHQUFHLFVBQUMsR0FBVyxFQUFFLElBQVk7SUFDdkMsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUN0QyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07UUFDakMsRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUNULEdBQUcsRUFBRSxHQUFHO1lBQ1IsTUFBTSxFQUFFLE1BQU07WUFDZCxJQUFJLEVBQUUsSUFBSTtZQUNWLE1BQU0sRUFBRTtnQkFDTixLQUFLLE9BQUE7YUFDTjtZQUNELE9BQU8sWUFBQyxHQUFHO2dCQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNkLENBQUM7WUFDRCxJQUFJLEVBQUUsVUFBQyxHQUFRO2dCQUNiLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNiLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQTtBQU1ELElBQUksVUFBVSxHQUFRO0lBQ3BCLElBQUksS0FBSyxHQUFXLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDOUMsSUFBSSxDQUFDLEtBQUs7UUFBRSxPQUFPLEtBQUssQ0FBQTtJQUN4QixPQUFPLElBQUksQ0FBQTtBQUNiLENBQUMsQ0FBQTtBQU1ELElBQUksT0FBTyxHQUFHO0lBQ1osT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU87UUFDekIsRUFBRSxDQUFDLFlBQVksQ0FBQztZQUNkLE1BQU0sRUFBRSxVQUFVO1lBQ2xCLE1BQU0sRUFBRSxrREFBa0Q7WUFDMUQsT0FBTyxFQUFFO2dCQUNQLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNmLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQTtBQUVELE1BQU0sQ0FBQyxPQUFPLEdBQUc7SUFDZixJQUFJLEVBQUUsUUFBUTtJQUNkLFVBQVUsWUFBQTtJQUNWLE9BQU8sU0FBQTtDQUNSLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogd3gucmVxdWVzdCDlsIHoo4VcclxuICogQHBhcmFtIHVybCDor7fmsYIgdXJsXHJcbiAqIEBwYXJhbSBkYXRhIOivt+axguaVsOaNrlxyXG4gKi9cclxudmFyIGFqYXhIdHRwID0gKHVybDogc3RyaW5nLCBkYXRhOiBvYmplY3QpID0+IHtcclxuICBsZXQgdG9rZW4gPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKVxyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiB1cmwsXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICBoZWFkZXI6IHtcclxuICAgICAgICB0b2tlblxyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgIHJlc29sdmUocmVzKVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiAoZXJyOiBhbnkpID0+IHtcclxuICAgICAgICByZWplY3QoZXJyKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4DmtYvmmK/lkKbnmbvlvZVcclxuICogQHJldHVybnMgXHJcbiAqL1xyXG52YXIgY2hlY2tMb2dpbjogYW55ID0gKCkgPT4ge1xyXG4gIHZhciB0b2tlbjogc3RyaW5nID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJylcclxuICBpZiAoIXRva2VuKSByZXR1cm4gZmFsc2VcclxuICByZXR1cm4gdHJ1ZVxyXG59XHJcblxyXG4vKipcclxuICog5Yqg6L29572R57uc5a2X5L2TXHJcbiAqIEByZXR1cm5zIFxyXG4gKi9cclxudmFyIGdldEZvbnQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICB3eC5sb2FkRm9udEZhY2Uoe1xyXG4gICAgICBmYW1pbHk6ICdQaW5nRmFuZycsXHJcbiAgICAgIHNvdXJjZTogJ3VybChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9pbmRleC9pbmRleC9nZXRGb250XCIpJyxcclxuICAgICAgc3VjY2VzczogKCkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUodHJ1ZSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9KVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBhamF4OiBhamF4SHR0cCxcclxuICBjaGVja0xvZ2luLFxyXG4gIGdldEZvbnRcclxufSJdfQ==
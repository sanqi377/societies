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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUtBLElBQUksUUFBUSxHQUFHLFVBQUMsR0FBVyxFQUFFLElBQVk7SUFDdkMsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUN0QyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07UUFDakMsRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUNULEdBQUcsRUFBRSxHQUFHO1lBQ1IsTUFBTSxFQUFFLE1BQU07WUFDZCxJQUFJLEVBQUUsSUFBSTtZQUNWLE1BQU0sRUFBRTtnQkFDTixLQUFLLE9BQUE7YUFDTjtZQUNELE9BQU8sWUFBQyxHQUFHO2dCQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNkLENBQUM7WUFDRCxJQUFJLEVBQUUsVUFBQyxHQUFRO2dCQUNiLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNiLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQTtBQUVELElBQUksVUFBVSxHQUFRO0lBQ3BCLElBQUksS0FBSyxHQUFXLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDOUMsSUFBSSxDQUFDLEtBQUs7UUFBRSxPQUFPLEtBQUssQ0FBQTtJQUN4QixPQUFPLElBQUksQ0FBQTtBQUNiLENBQUMsQ0FBQTtBQUVELElBQUksT0FBTyxHQUFHO0lBQ1osT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU87UUFDekIsRUFBRSxDQUFDLFlBQVksQ0FBQztZQUNkLE1BQU0sRUFBRSxVQUFVO1lBQ2xCLE1BQU0sRUFBRSxrREFBa0Q7WUFDMUQsT0FBTyxFQUFFO2dCQUNQLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNmLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQTtBQUVELE1BQU0sQ0FBQyxPQUFPLEdBQUc7SUFDZixJQUFJLEVBQUUsUUFBUTtJQUNkLFVBQVUsWUFBQTtJQUNWLE9BQU8sU0FBQTtDQUNSLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogd3gucmVxdWVzdCDlsIHoo4VcclxuICogQHBhcmFtIHVybCDor7fmsYIgdXJsXHJcbiAqIEBwYXJhbSBkYXRhIOivt+axguaVsOaNrlxyXG4gKi9cclxudmFyIGFqYXhIdHRwID0gKHVybDogc3RyaW5nLCBkYXRhOiBvYmplY3QpID0+IHtcclxuICBsZXQgdG9rZW4gPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKVxyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiB1cmwsXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICBoZWFkZXI6IHtcclxuICAgICAgICB0b2tlblxyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgIHJlc29sdmUocmVzKVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiAoZXJyOiBhbnkpID0+IHtcclxuICAgICAgICByZWplY3QoZXJyKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0pXHJcbn1cclxuXHJcbnZhciBjaGVja0xvZ2luOiBhbnkgPSAoKSA9PiB7XHJcbiAgdmFyIHRva2VuOiBzdHJpbmcgPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKVxyXG4gIGlmICghdG9rZW4pIHJldHVybiBmYWxzZVxyXG4gIHJldHVybiB0cnVlXHJcbn1cclxuXHJcbnZhciBnZXRGb250ID0gKCkgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgd3gubG9hZEZvbnRGYWNlKHtcclxuICAgICAgZmFtaWx5OiAnUGluZ0ZhbmcnLFxyXG4gICAgICBzb3VyY2U6ICd1cmwoXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvaW5kZXgvaW5kZXgvZ2V0Rm9udFwiKScsXHJcbiAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcclxuICAgICAgICByZXNvbHZlKHRydWUpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSlcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgYWpheDogYWpheEh0dHAsXHJcbiAgY2hlY2tMb2dpbixcclxuICBnZXRGb250XHJcbn0iXX0=
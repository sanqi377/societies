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
module.exports = {
    ajax: ajaxHttp
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUtBLElBQUksUUFBUSxHQUFHLFVBQUMsR0FBVyxFQUFFLElBQVk7SUFDdkMsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUN0QyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07UUFDakMsRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUNULEdBQUcsRUFBRSxHQUFHO1lBQ1IsTUFBTSxFQUFFLE1BQU07WUFDZCxJQUFJLEVBQUUsSUFBSTtZQUNWLE1BQU0sRUFBRTtnQkFDTixLQUFLLE9BQUE7YUFDTjtZQUNELE9BQU8sWUFBQyxHQUFHO2dCQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNkLENBQUM7WUFDRCxJQUFJLEVBQUUsVUFBQyxHQUFRO2dCQUNiLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNiLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQTtBQUVELE1BQU0sQ0FBQyxPQUFPLEdBQUc7SUFDZixJQUFJLEVBQUUsUUFBUTtDQUNmLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIHd4LnJlcXVlc3Qg5bCB6KOFXG4gKiBAcGFyYW0gdXJsIOivt+axgiB1cmxcbiAqIEBwYXJhbSBkYXRhIOivt+axguaVsOaNrlxuICovXG52YXIgYWpheEh0dHAgPSAodXJsOiBzdHJpbmcsIGRhdGE6IG9iamVjdCkgPT4ge1xuICBsZXQgdG9rZW4gPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKVxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgdXJsOiB1cmwsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICBoZWFkZXI6IHtcbiAgICAgICAgdG9rZW5cbiAgICAgIH0sXG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgIH0sXG4gICAgICBmYWlsOiAoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgcmVqZWN0KGVycilcbiAgICAgIH1cbiAgICB9KVxuICB9KVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYWpheDogYWpheEh0dHBcbn0iXX0=
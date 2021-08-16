"use strict";
var ajax = require('../../utils/util').ajax;
Page({
    data: {},
    login: function () {
        wx.getUserProfile({
            desc: '用于完善会员资料',
            success: function (res) {
                var userInfo = res.userInfo;
                wx.setStorage({
                    key: "userInfo",
                    data: userInfo
                });
                wx.login({
                    success: function (res) {
                        if (res.code) {
                            ajax('http://localhost:3000/index/user/login', { code: res.code }).then(function (res) {
                                var code = res.data.code;
                                if (code === 201)
                                    wx.reLaunch({ url: '/pages/user/reg' });
                            });
                        }
                        else {
                            console.log('登录失败！' + res.errMsg);
                        }
                    }
                });
            },
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQU0sSUFBQSxJQUFJLEdBQUssT0FBTyxDQUFDLGtCQUFrQixDQUFDLEtBQWhDLENBQWdDO0FBQzFDLElBQUksQ0FBQztJQUNILElBQUksRUFBRSxFQUFFO0lBS1IsS0FBSyxFQUFMO1FBQ0UsRUFBRSxDQUFDLGNBQWMsQ0FBQztZQUNoQixJQUFJLEVBQUUsVUFBVTtZQUNoQixPQUFPLEVBQUUsVUFBQyxHQUFHO2dCQUNYLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUE7Z0JBQzNCLEVBQUUsQ0FBQyxVQUFVLENBQUM7b0JBQ1osR0FBRyxFQUFFLFVBQVU7b0JBQ2YsSUFBSSxFQUFFLFFBQVE7aUJBQ2YsQ0FBQyxDQUFBO2dCQUNGLEVBQUUsQ0FBQyxLQUFLLENBQUM7b0JBQ1AsT0FBTyxFQUFQLFVBQVEsR0FBRzt3QkFDVCxJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUU7NEJBQ1osSUFBSSxDQUFDLHdDQUF3QyxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVE7Z0NBQy9FLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFBO2dDQUN4QixJQUFJLElBQUksS0FBSyxHQUFHO29DQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxDQUFBOzRCQUMzRCxDQUFDLENBQUMsQ0FBQTt5QkFDSDs2QkFBTTs0QkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7eUJBQ2xDO29CQUNILENBQUM7aUJBQ0YsQ0FBQyxDQUFBO1lBQ0osQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgeyBhamF4IH0gPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsJylcclxuUGFnZSh7XHJcbiAgZGF0YToge30sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeZu+W9lSBhbmQg5rOo5YaMXHJcbiAgICovXHJcbiAgbG9naW4oKSB7XHJcbiAgICB3eC5nZXRVc2VyUHJvZmlsZSh7XHJcbiAgICAgIGRlc2M6ICfnlKjkuo7lrozlloTkvJrlkZjotYTmlpknLFxyXG4gICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgbGV0IHVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXHJcbiAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICBrZXk6IFwidXNlckluZm9cIixcclxuICAgICAgICAgIGRhdGE6IHVzZXJJbmZvXHJcbiAgICAgICAgfSlcclxuICAgICAgICB3eC5sb2dpbih7XHJcbiAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLmNvZGUpIHtcclxuICAgICAgICAgICAgICBhamF4KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvaW5kZXgvdXNlci9sb2dpbicsIHsgY29kZTogcmVzLmNvZGUgfSkudGhlbigocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBjb2RlID0gcmVzLmRhdGEuY29kZVxyXG4gICAgICAgICAgICAgICAgaWYgKGNvZGUgPT09IDIwMSkgd3gucmVMYXVuY2goeyB1cmw6ICcvcGFnZXMvdXNlci9yZWcnIH0pXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygn55m75b2V5aSx6LSl77yBJyArIHJlcy5lcnJNc2cpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICB9XHJcbn0pIl19
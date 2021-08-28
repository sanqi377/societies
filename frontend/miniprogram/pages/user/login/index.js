"use strict";
var ajax = require('../../../utils/util').ajax;
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
                                    wx.reLaunch({ url: '/pages/user/reg/index' });
                                if (code === 200) {
                                    wx.showToast({
                                        title: res.data.msg,
                                        icon: 'success',
                                        duration: 2000,
                                        success: function () {
                                            wx.setStorage({
                                                key: "token",
                                                data: res.data.token,
                                                success: function () {
                                                    wx.setStorage({
                                                        key: "uid",
                                                        data: res.data.uid,
                                                        success: function () {
                                                            setTimeout(function () {
                                                                wx.reLaunch({ url: '/pages/index/index/index' });
                                                            }, 2000);
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                        else {
                            console.log('登录失败！' + res.errMsg);
                        }
                    }
                });
            },
        });
    },
    back: function () {
        wx.switchTab({
            url: '/pages/index/index'
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQU0sSUFBQSxJQUFJLEdBQUssT0FBTyxDQUFDLHFCQUFxQixDQUFDLEtBQW5DLENBQW1DO0FBQzdDLElBQUksQ0FBQztJQUNILElBQUksRUFBRSxFQUFFO0lBS1IsS0FBSyxFQUFMO1FBQ0UsRUFBRSxDQUFDLGNBQWMsQ0FBQztZQUNoQixJQUFJLEVBQUUsVUFBVTtZQUNoQixPQUFPLEVBQUUsVUFBQyxHQUFHO2dCQUNYLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUE7Z0JBQzNCLEVBQUUsQ0FBQyxVQUFVLENBQUM7b0JBQ1osR0FBRyxFQUFFLFVBQVU7b0JBQ2YsSUFBSSxFQUFFLFFBQVE7aUJBQ2YsQ0FBQyxDQUFBO2dCQUNGLEVBQUUsQ0FBQyxLQUFLLENBQUM7b0JBQ1AsT0FBTyxFQUFQLFVBQVEsR0FBRzt3QkFDVCxJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUU7NEJBQ1osSUFBSSxDQUFDLHdDQUF3QyxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVE7Z0NBQy9FLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFBO2dDQUN4QixJQUFJLElBQUksS0FBSyxHQUFHO29DQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLEVBQUUsdUJBQXVCLEVBQUUsQ0FBQyxDQUFBO2dDQUMvRCxJQUFJLElBQUksS0FBSyxHQUFHLEVBQUU7b0NBQ2hCLEVBQUUsQ0FBQyxTQUFTLENBQUM7d0NBQ1gsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRzt3Q0FDbkIsSUFBSSxFQUFFLFNBQVM7d0NBQ2YsUUFBUSxFQUFFLElBQUk7d0NBQ2QsT0FBTyxFQUFFOzRDQUNQLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0RBQ1osR0FBRyxFQUFFLE9BQU87Z0RBQ1osSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSztnREFDcEIsT0FBTyxFQUFFO29EQUNQLEVBQUUsQ0FBQyxVQUFVLENBQUM7d0RBQ1osR0FBRyxFQUFFLEtBQUs7d0RBQ1YsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRzt3REFDbEIsT0FBTyxFQUFFOzREQUNQLFVBQVUsQ0FBQztnRUFDVCxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxFQUFFLDBCQUEwQixFQUFFLENBQUMsQ0FBQTs0REFDbEQsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO3dEQUNWLENBQUM7cURBQ0YsQ0FBQyxDQUFBO2dEQUNKLENBQUM7NkNBQ0YsQ0FBQyxDQUFBO3dDQUNKLENBQUM7cUNBQ0YsQ0FBQyxDQUFBO2lDQUNIOzRCQUNILENBQUMsQ0FBQyxDQUFBO3lCQUNIOzZCQUFNOzRCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTt5QkFDbEM7b0JBQ0gsQ0FBQztpQkFDRixDQUFDLENBQUE7WUFDSixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUtELElBQUk7UUFDRixFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ1gsR0FBRyxFQUFFLG9CQUFvQjtTQUMxQixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHsgYWpheCB9ID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbHMvdXRpbCcpXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHt9LFxyXG5cclxuICAvKipcclxuICAgKiDnmbvlvZUgYW5kIOazqOWGjFxyXG4gICAqL1xyXG4gIGxvZ2luKCkge1xyXG4gICAgd3guZ2V0VXNlclByb2ZpbGUoe1xyXG4gICAgICBkZXNjOiAn55So5LqO5a6M5ZaE5Lya5ZGY6LWE5paZJyxcclxuICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgIGxldCB1c2VySW5mbyA9IHJlcy51c2VySW5mb1xyXG4gICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAga2V5OiBcInVzZXJJbmZvXCIsXHJcbiAgICAgICAgICBkYXRhOiB1c2VySW5mb1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgd3gubG9naW4oe1xyXG4gICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5jb2RlKSB7XHJcbiAgICAgICAgICAgICAgYWpheCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2luZGV4L3VzZXIvbG9naW4nLCB7IGNvZGU6IHJlcy5jb2RlIH0pLnRoZW4oKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29kZSA9IHJlcy5kYXRhLmNvZGVcclxuICAgICAgICAgICAgICAgIGlmIChjb2RlID09PSAyMDEpIHd4LnJlTGF1bmNoKHsgdXJsOiAnL3BhZ2VzL3VzZXIvcmVnL2luZGV4JyB9KVxyXG4gICAgICAgICAgICAgICAgaWYgKGNvZGUgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXMuZGF0YS5tc2csXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwidG9rZW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVzLmRhdGEudG9rZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJ1aWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHJlcy5kYXRhLnVpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3gucmVMYXVuY2goeyB1cmw6ICcvcGFnZXMvaW5kZXgvaW5kZXgvaW5kZXgnIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIwMDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygn55m75b2V5aSx6LSl77yBJyArIHJlcy5lcnJNc2cpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDmmoLkuI3nmbvlvZVcclxuICAgKi9cclxuICBiYWNrKCkge1xyXG4gICAgd3guc3dpdGNoVGFiKHtcclxuICAgICAgdXJsOiAnL3BhZ2VzL2luZGV4L2luZGV4J1xyXG4gICAgfSlcclxuICB9XHJcbn0pIl19
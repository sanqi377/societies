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
                            ajax('user/login', { code: res.code }).then(function (res) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQU0sSUFBQSxJQUFJLEdBQUssT0FBTyxDQUFDLHFCQUFxQixDQUFDLEtBQW5DLENBQW1DO0FBQzdDLElBQUksQ0FBQztJQUNILElBQUksRUFBRSxFQUFFO0lBS1IsS0FBSyxFQUFMO1FBQ0UsRUFBRSxDQUFDLGNBQWMsQ0FBQztZQUNoQixJQUFJLEVBQUUsVUFBVTtZQUNoQixPQUFPLEVBQUUsVUFBQyxHQUFHO2dCQUNYLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUE7Z0JBQzNCLEVBQUUsQ0FBQyxVQUFVLENBQUM7b0JBQ1osR0FBRyxFQUFFLFVBQVU7b0JBQ2YsSUFBSSxFQUFFLFFBQVE7aUJBQ2YsQ0FBQyxDQUFBO2dCQUNGLEVBQUUsQ0FBQyxLQUFLLENBQUM7b0JBQ1AsT0FBTyxFQUFQLFVBQVEsR0FBRzt3QkFDVCxJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUU7NEJBQ1osSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFRO2dDQUNuRCxJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQTtnQ0FDeEIsSUFBSSxJQUFJLEtBQUssR0FBRztvQ0FBRSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxFQUFFLHVCQUF1QixFQUFFLENBQUMsQ0FBQTtnQ0FDL0QsSUFBSSxJQUFJLEtBQUssR0FBRyxFQUFFO29DQUNoQixFQUFFLENBQUMsU0FBUyxDQUFDO3dDQUNYLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUc7d0NBQ25CLElBQUksRUFBRSxTQUFTO3dDQUNmLFFBQVEsRUFBRSxJQUFJO3dDQUNkLE9BQU8sRUFBRTs0Q0FDUCxFQUFFLENBQUMsVUFBVSxDQUFDO2dEQUNaLEdBQUcsRUFBRSxPQUFPO2dEQUNaLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUs7Z0RBQ3BCLE9BQU8sRUFBRTtvREFDUCxFQUFFLENBQUMsVUFBVSxDQUFDO3dEQUNaLEdBQUcsRUFBRSxLQUFLO3dEQUNWLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUc7d0RBQ2xCLE9BQU8sRUFBRTs0REFDUCxVQUFVLENBQUM7Z0VBQ1QsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsRUFBRSwwQkFBMEIsRUFBRSxDQUFDLENBQUE7NERBQ2xELENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTt3REFDVixDQUFDO3FEQUNGLENBQUMsQ0FBQTtnREFDSixDQUFDOzZDQUNGLENBQUMsQ0FBQTt3Q0FDSixDQUFDO3FDQUNGLENBQUMsQ0FBQTtpQ0FDSDs0QkFDSCxDQUFDLENBQUMsQ0FBQTt5QkFDSDs2QkFBTTs0QkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7eUJBQ2xDO29CQUNILENBQUM7aUJBQ0YsQ0FBQyxDQUFBO1lBQ0osQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFLRCxJQUFJO1FBQ0YsRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUNYLEdBQUcsRUFBRSxvQkFBb0I7U0FDMUIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbInZhciB7IGFqYXggfSA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxzL3V0aWwnKVxyXG5QYWdlKHtcclxuICBkYXRhOiB7fSxcclxuXHJcbiAgLyoqXHJcbiAgICog55m75b2VIGFuZCDms6jlhoxcclxuICAgKi9cclxuICBsb2dpbigpIHtcclxuICAgIHd4LmdldFVzZXJQcm9maWxlKHtcclxuICAgICAgZGVzYzogJ+eUqOS6juWujOWWhOS8muWRmOi1hOaWmScsXHJcbiAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICBsZXQgdXNlckluZm8gPSByZXMudXNlckluZm9cclxuICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgIGtleTogXCJ1c2VySW5mb1wiLFxyXG4gICAgICAgICAgZGF0YTogdXNlckluZm9cclxuICAgICAgICB9KVxyXG4gICAgICAgIHd4LmxvZ2luKHtcclxuICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXMuY29kZSkge1xyXG4gICAgICAgICAgICAgIGFqYXgoJ3VzZXIvbG9naW4nLCB7IGNvZGU6IHJlcy5jb2RlIH0pLnRoZW4oKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29kZSA9IHJlcy5kYXRhLmNvZGVcclxuICAgICAgICAgICAgICAgIGlmIChjb2RlID09PSAyMDEpIHd4LnJlTGF1bmNoKHsgdXJsOiAnL3BhZ2VzL3VzZXIvcmVnL2luZGV4JyB9KVxyXG4gICAgICAgICAgICAgICAgaWYgKGNvZGUgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXMuZGF0YS5tc2csXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwidG9rZW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVzLmRhdGEudG9rZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJ1aWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHJlcy5kYXRhLnVpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3gucmVMYXVuY2goeyB1cmw6ICcvcGFnZXMvaW5kZXgvaW5kZXgvaW5kZXgnIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIwMDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygn55m75b2V5aSx6LSl77yBJyArIHJlcy5lcnJNc2cpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDmmoLkuI3nmbvlvZVcclxuICAgKi9cclxuICBiYWNrKCkge1xyXG4gICAgd3guc3dpdGNoVGFiKHtcclxuICAgICAgdXJsOiAnL3BhZ2VzL2luZGV4L2luZGV4J1xyXG4gICAgfSlcclxuICB9XHJcbn0pIl19
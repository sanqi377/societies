"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io = wx.connectSocket({
    url: 'ws://localhost:3001',
    success: function () {
        console.log('socket 连接成功');
    }
});
var hostId = 0;
var $Notify = require('@sanqi377/qui/s-notify/notify').$Notify;
var $Dialog = require('@sanqi377/qui/s-dialog/dialog').$Dialog;
var ajax = require('./utils/util').ajax;
App({
    globalData: {
        io: io,
        monitor: function (callback) {
            io.onMessage(function (res) {
                callback(res.data);
            });
        },
        wlecome: function (info) {
            io.send({
                data: JSON.stringify(info),
                success: function () {
                    hostId = info.send;
                    console.log("\u7ED1\u5B9A\u4E3B\u673A\u4FE1\u606F\u6210\u529F\uFF1A\u4E3B\u673A\u53F7\u4E3A" + info.send);
                }
            });
        },
        uid: wx.getStorageSync('uid'),
        subscribe: function (data) {
            return new Promise(function (resolve) {
                ajax('user/subscribe', data).then(function (res) {
                    if (res.data.ret === 200) {
                        resolve(res);
                        $Notify({
                            type: 'success',
                            content: res.data.msg
                        });
                    }
                    else {
                        $Notify({
                            type: 'error',
                            content: res.data.msg
                        });
                    }
                });
            });
        },
        unSubscribe: function (_a) {
            var data = _a.data, success = _a.success, error = _a.error;
            $Dialog({
                title: '温馨提示',
                message: '你确定要取消关注吗？',
                showCancelButton: true
            }).then(function () {
                ajax('user/cancelSubscribe', data).then(function (res) {
                    if (res.data.ret === 200) {
                        $Notify({
                            type: 'warning',
                            content: res.data.msg
                        });
                    }
                    else {
                        $Notify({
                            type: 'error',
                            content: res.data.msg
                        });
                    }
                    success();
                });
            }).catch(function () {
                if (error)
                    error();
            });
        }
    },
    onLaunch: function () {
        var _this = this;
        wx.onSocketOpen(function () {
            console.log('监听到 WebSocket 连接已打开！');
        });
        io.onOpen(function () {
            _this.globalData.wlecome({ send: _this.globalData.uid, type: 'welcome' });
            console.log('连接打开成功');
        });
    },
    onHide: function () {
        io.send({
            data: JSON.stringify({ type: 'offLine', hostId: hostId }),
            success: function () {
                io.close({});
                console.log("\u4E3B\u673A\u4E0B\u7EBF\u6210\u529F\uFF1A\u4E3B\u673A\u53F7\u4E3A" + hostId);
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztJQUV4QixHQUFHLEVBQUUscUJBQXFCO0lBQzFCLE9BQU8sRUFBRTtRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7SUFDNUIsQ0FBQztDQUNGLENBQUMsQ0FBQTtBQUVGLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQTtBQUVOLElBQUEsT0FBTyxHQUFLLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxRQUE3QyxDQUE2QztBQUNwRCxJQUFBLE9BQU8sR0FBSyxPQUFPLENBQUMsK0JBQStCLENBQUMsUUFBN0MsQ0FBNkM7QUFDcEQsSUFBQSxJQUFJLEdBQUssT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUE1QixDQUE0QjtBQUV4QyxHQUFHLENBQWE7SUFDZCxVQUFVLEVBQUU7UUFDVixFQUFFLElBQUE7UUFDRixPQUFPLEVBQVAsVUFBUSxRQUFhO1lBQ25CLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHO2dCQUNkLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDcEIsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDO1FBQ0QsT0FBTyxFQUFQLFVBQVEsSUFBUztZQUNmLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0JBQ04sSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO2dCQUMxQixPQUFPLEVBQUU7b0JBQ1AsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUE7b0JBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUZBQWdCLElBQUksQ0FBQyxJQUFNLENBQUMsQ0FBQTtnQkFDMUMsQ0FBQzthQUNGLENBQUMsQ0FBQTtRQUNKLENBQUM7UUFDRCxHQUFHLEVBQUUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7UUFLN0IsU0FBUyxFQUFULFVBQVUsSUFBWTtZQUNwQixPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTztnQkFDekIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVE7b0JBQ3pDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFFO3dCQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7d0JBQ1osT0FBTyxDQUFDOzRCQUNOLElBQUksRUFBRSxTQUFTOzRCQUNmLE9BQU8sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUc7eUJBQ3RCLENBQUMsQ0FBQTtxQkFDSDt5QkFBTTt3QkFDTCxPQUFPLENBQUM7NEJBQ04sSUFBSSxFQUFFLE9BQU87NEJBQ2IsT0FBTyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRzt5QkFDdEIsQ0FBQyxDQUFBO3FCQUNIO2dCQUNILENBQUMsQ0FBQyxDQUFBO1lBQ0osQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDO1FBSUQsV0FBVyxFQUFYLFVBQVksRUFBcUM7Z0JBQW5DLElBQUksVUFBQSxFQUFFLE9BQU8sYUFBQSxFQUFFLEtBQUssV0FBQTtZQUNoQyxPQUFPLENBQUM7Z0JBQ04sS0FBSyxFQUFFLE1BQU07Z0JBQ2IsT0FBTyxFQUFFLFlBQVk7Z0JBQ3JCLGdCQUFnQixFQUFFLElBQUk7YUFDdkIsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDTixJQUFJLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBUTtvQkFDL0MsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQUU7d0JBQ3hCLE9BQU8sQ0FBQzs0QkFDTixJQUFJLEVBQUUsU0FBUzs0QkFDZixPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHO3lCQUN0QixDQUFDLENBQUE7cUJBQ0g7eUJBQU07d0JBQ0wsT0FBTyxDQUFDOzRCQUNOLElBQUksRUFBRSxPQUFPOzRCQUNiLE9BQU8sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUc7eUJBQ3RCLENBQUMsQ0FBQTtxQkFDSDtvQkFDRCxPQUFPLEVBQUUsQ0FBQTtnQkFDWCxDQUFDLENBQUMsQ0FBQTtZQUNKLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDUCxJQUFJLEtBQUs7b0JBQUUsS0FBSyxFQUFFLENBQUE7WUFDcEIsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDO0tBQ0Y7SUFDRCxRQUFRO1FBQVIsaUJBUUM7UUFQQyxFQUFFLENBQUMsWUFBWSxDQUFDO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUNSLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFBO1lBQ3ZFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsTUFBTTtRQUNKLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDTixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQztZQUNqRCxPQUFPLEVBQUU7Z0JBQ1AsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQTtnQkFDWixPQUFPLENBQUMsR0FBRyxDQUFDLHVFQUFjLE1BQVEsQ0FBQyxDQUFBO1lBQ3JDLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgfVxyXG5sZXQgaW8gPSB3eC5jb25uZWN0U29ja2V0KHtcclxuICAvLyB1cmw6ICd3c3M6Ly93c3MuemhvdXdhaXphaS5jbHViL3dzcycsXHJcbiAgdXJsOiAnd3M6Ly9sb2NhbGhvc3Q6MzAwMScsXHJcbiAgc3VjY2VzczogKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ3NvY2tldCDov57mjqXmiJDlip8nKVxyXG4gIH1cclxufSlcclxuXHJcbmxldCBob3N0SWQgPSAwXHJcblxyXG5jb25zdCB7ICROb3RpZnkgfSA9IHJlcXVpcmUoJ0BzYW5xaTM3Ny9xdWkvcy1ub3RpZnkvbm90aWZ5JylcclxuY29uc3QgeyAkRGlhbG9nIH0gPSByZXF1aXJlKCdAc2FucWkzNzcvcXVpL3MtZGlhbG9nL2RpYWxvZycpXHJcbmNvbnN0IHsgYWpheCB9ID0gcmVxdWlyZSgnLi91dGlscy91dGlsJylcclxuXHJcbkFwcDxJQXBwT3B0aW9uPih7XHJcbiAgZ2xvYmFsRGF0YToge1xyXG4gICAgaW8sXHJcbiAgICBtb25pdG9yKGNhbGxiYWNrOiBhbnkpIHtcclxuICAgICAgaW8ub25NZXNzYWdlKHJlcyA9PiB7XHJcbiAgICAgICAgY2FsbGJhY2socmVzLmRhdGEpXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgd2xlY29tZShpbmZvOiBhbnkpIHtcclxuICAgICAgaW8uc2VuZCh7XHJcbiAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoaW5mbyksXHJcbiAgICAgICAgc3VjY2VzczogKCkgPT4ge1xyXG4gICAgICAgICAgaG9zdElkID0gaW5mby5zZW5kXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhg57uR5a6a5Li75py65L+h5oGv5oiQ5Yqf77ya5Li75py65Y+35Li6JHtpbmZvLnNlbmR9YClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgdWlkOiB3eC5nZXRTdG9yYWdlU3luYygndWlkJyksXHJcbiAgICAvKipcclxuICAgICAqIOWFqOWxgOWFs+azqFxyXG4gICAgICogQHBhcmFtIGRhdGEgXHJcbiAgICAgKi9cclxuICAgIHN1YnNjcmliZShkYXRhOiBvYmplY3QpIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgYWpheCgndXNlci9zdWJzY3JpYmUnLCBkYXRhKS50aGVuKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlcy5kYXRhLnJldCA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzKVxyXG4gICAgICAgICAgICAkTm90aWZ5KHtcclxuICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgY29udGVudDogcmVzLmRhdGEubXNnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkTm90aWZ5KHtcclxuICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IHJlcy5kYXRhLm1zZ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiDlhajlsYDlj5bmtojlhbPms6hcclxuICAgICAqL1xyXG4gICAgdW5TdWJzY3JpYmUoeyBkYXRhLCBzdWNjZXNzLCBlcnJvciB9OiB1blN1YnNjcmliZSkge1xyXG4gICAgICAkRGlhbG9nKHtcclxuICAgICAgICB0aXRsZTogJ+a4qemmqOaPkOekuicsXHJcbiAgICAgICAgbWVzc2FnZTogJ+S9oOehruWumuimgeWPlua2iOWFs+azqOWQl++8nycsXHJcbiAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZVxyXG4gICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICBhamF4KCd1c2VyL2NhbmNlbFN1YnNjcmliZScsIGRhdGEpLnRoZW4oKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzLmRhdGEucmV0ID09PSAyMDApIHtcclxuICAgICAgICAgICAgJE5vdGlmeSh7XHJcbiAgICAgICAgICAgICAgdHlwZTogJ3dhcm5pbmcnLFxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IHJlcy5kYXRhLm1zZ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJE5vdGlmeSh7XHJcbiAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICBjb250ZW50OiByZXMuZGF0YS5tc2dcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN1Y2Nlc3MoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICBpZiAoZXJyb3IpIGVycm9yKClcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIG9uTGF1bmNoKCkge1xyXG4gICAgd3gub25Tb2NrZXRPcGVuKCgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ+ebkeWQrOWIsCBXZWJTb2NrZXQg6L+e5o6l5bey5omT5byA77yBJyk7XHJcbiAgICB9KVxyXG4gICAgaW8ub25PcGVuKCgpID0+IHtcclxuICAgICAgdGhpcy5nbG9iYWxEYXRhLndsZWNvbWUoeyBzZW5kOiB0aGlzLmdsb2JhbERhdGEudWlkLCB0eXBlOiAnd2VsY29tZScgfSlcclxuICAgICAgY29uc29sZS5sb2coJ+i/nuaOpeaJk+W8gOaIkOWKnycpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBvbkhpZGUoKSB7XHJcbiAgICBpby5zZW5kKHtcclxuICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoeyB0eXBlOiAnb2ZmTGluZScsIGhvc3RJZCB9KSxcclxuICAgICAgc3VjY2VzczogKCkgPT4ge1xyXG4gICAgICAgIGlvLmNsb3NlKHt9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGDkuLvmnLrkuIvnur/miJDlip/vvJrkuLvmnLrlj7fkuLoke2hvc3RJZH1gKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufSkiXX0=
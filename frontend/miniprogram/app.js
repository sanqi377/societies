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
                    resolve(res);
                    if (res.data.ret === 200) {
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
                error();
            });
        }
    },
    onLaunch: function () {
        wx.onSocketOpen(function () {
            console.log('监听到 WebSocket 连接已打开！');
        });
        io.onOpen(function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztJQUV4QixHQUFHLEVBQUUscUJBQXFCO0lBQzFCLE9BQU8sRUFBRTtRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7SUFDNUIsQ0FBQztDQUNGLENBQUMsQ0FBQTtBQUVGLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQTtBQUVOLElBQUEsT0FBTyxHQUFLLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxRQUE3QyxDQUE2QztBQUNwRCxJQUFBLE9BQU8sR0FBSyxPQUFPLENBQUMsK0JBQStCLENBQUMsUUFBN0MsQ0FBNkM7QUFDcEQsSUFBQSxJQUFJLEdBQUssT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUE1QixDQUE0QjtBQUV4QyxHQUFHLENBQWE7SUFDZCxVQUFVLEVBQUU7UUFDVixFQUFFLElBQUE7UUFDRixPQUFPLEVBQVAsVUFBUSxRQUFhO1lBQ25CLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHO2dCQUNkLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDcEIsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDO1FBQ0QsT0FBTyxFQUFQLFVBQVEsSUFBUztZQUNmLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0JBQ04sSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO2dCQUMxQixPQUFPLEVBQUU7b0JBQ1AsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUE7b0JBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUZBQWdCLElBQUksQ0FBQyxJQUFNLENBQUMsQ0FBQTtnQkFDMUMsQ0FBQzthQUNGLENBQUMsQ0FBQTtRQUNKLENBQUM7UUFDRCxHQUFHLEVBQUUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7UUFLN0IsU0FBUyxFQUFULFVBQVUsSUFBWTtZQUNwQixPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTztnQkFDekIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVE7b0JBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQTtvQkFDWixJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRTt3QkFDeEIsT0FBTyxDQUFDOzRCQUNOLElBQUksRUFBRSxTQUFTOzRCQUNmLE9BQU8sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUc7eUJBQ3RCLENBQUMsQ0FBQTtxQkFDSDt5QkFBTTt3QkFDTCxPQUFPLENBQUM7NEJBQ04sSUFBSSxFQUFFLE9BQU87NEJBQ2IsT0FBTyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRzt5QkFDdEIsQ0FBQyxDQUFBO3FCQUNIO2dCQUNILENBQUMsQ0FBQyxDQUFBO1lBQ0osQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDO1FBSUQsV0FBVyxFQUFYLFVBQVksRUFBcUM7Z0JBQW5DLElBQUksVUFBQSxFQUFFLE9BQU8sYUFBQSxFQUFFLEtBQUssV0FBQTtZQUNoQyxPQUFPLENBQUM7Z0JBQ04sS0FBSyxFQUFFLE1BQU07Z0JBQ2IsT0FBTyxFQUFFLFlBQVk7Z0JBQ3JCLGdCQUFnQixFQUFFLElBQUk7YUFDdkIsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDTixJQUFJLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBUTtvQkFDL0MsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQUU7d0JBQ3hCLE9BQU8sQ0FBQzs0QkFDTixJQUFJLEVBQUUsU0FBUzs0QkFDZixPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHO3lCQUN0QixDQUFDLENBQUE7cUJBQ0g7eUJBQU07d0JBQ0wsT0FBTyxDQUFDOzRCQUNOLElBQUksRUFBRSxPQUFPOzRCQUNiLE9BQU8sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUc7eUJBQ3RCLENBQUMsQ0FBQTtxQkFDSDtvQkFDRCxPQUFPLEVBQUUsQ0FBQTtnQkFDWCxDQUFDLENBQUMsQ0FBQTtZQUNKLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDUCxLQUFLLEVBQUUsQ0FBQTtZQUNULENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQztLQUNGO0lBQ0QsUUFBUTtRQUNOLEVBQUUsQ0FBQyxZQUFZLENBQUM7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUE7UUFDRixFQUFFLENBQUMsTUFBTSxDQUFDO1lBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxNQUFNO1FBQ0osRUFBRSxDQUFDLElBQUksQ0FBQztZQUNOLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDO1lBQ2pELE9BQU8sRUFBRTtnQkFDUCxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFBO2dCQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUVBQWMsTUFBUSxDQUFDLENBQUE7WUFDckMsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyB9XHJcbmxldCBpbyA9IHd4LmNvbm5lY3RTb2NrZXQoe1xyXG4gIC8vIHVybDogJ3dzczovL3dzcy56aG91d2FpemFpLmNsdWIvd3NzJyxcclxuICB1cmw6ICd3czovL2xvY2FsaG9zdDozMDAxJyxcclxuICBzdWNjZXNzOiAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnc29ja2V0IOi/nuaOpeaIkOWKnycpXHJcbiAgfVxyXG59KVxyXG5cclxubGV0IGhvc3RJZCA9IDBcclxuXHJcbmNvbnN0IHsgJE5vdGlmeSB9ID0gcmVxdWlyZSgnQHNhbnFpMzc3L3F1aS9zLW5vdGlmeS9ub3RpZnknKVxyXG5jb25zdCB7ICREaWFsb2cgfSA9IHJlcXVpcmUoJ0BzYW5xaTM3Ny9xdWkvcy1kaWFsb2cvZGlhbG9nJylcclxuY29uc3QgeyBhamF4IH0gPSByZXF1aXJlKCcuL3V0aWxzL3V0aWwnKVxyXG5cclxuQXBwPElBcHBPcHRpb24+KHtcclxuICBnbG9iYWxEYXRhOiB7XHJcbiAgICBpbyxcclxuICAgIG1vbml0b3IoY2FsbGJhY2s6IGFueSkge1xyXG4gICAgICBpby5vbk1lc3NhZ2UocmVzID0+IHtcclxuICAgICAgICBjYWxsYmFjayhyZXMuZGF0YSlcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICB3bGVjb21lKGluZm86IGFueSkge1xyXG4gICAgICBpby5zZW5kKHtcclxuICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShpbmZvKSxcclxuICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgICBob3N0SWQgPSBpbmZvLnNlbmRcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGDnu5HlrprkuLvmnLrkv6Hmga/miJDlip/vvJrkuLvmnLrlj7fkuLoke2luZm8uc2VuZH1gKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICB1aWQ6IHd4LmdldFN0b3JhZ2VTeW5jKCd1aWQnKSxcclxuICAgIC8qKlxyXG4gICAgICog5YWo5bGA5YWz5rOoXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBcclxuICAgICAqL1xyXG4gICAgc3Vic2NyaWJlKGRhdGE6IG9iamVjdCkge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICBhamF4KCd1c2VyL3N1YnNjcmliZScsIGRhdGEpLnRoZW4oKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKHJlcylcclxuICAgICAgICAgIGlmIChyZXMuZGF0YS5yZXQgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAkTm90aWZ5KHtcclxuICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgY29udGVudDogcmVzLmRhdGEubXNnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkTm90aWZ5KHtcclxuICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IHJlcy5kYXRhLm1zZ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiDlhajlsYDlj5bmtojlhbPms6hcclxuICAgICAqL1xyXG4gICAgdW5TdWJzY3JpYmUoeyBkYXRhLCBzdWNjZXNzLCBlcnJvciB9OiB1blN1YnNjcmliZSkge1xyXG4gICAgICAkRGlhbG9nKHtcclxuICAgICAgICB0aXRsZTogJ+a4qemmqOaPkOekuicsXHJcbiAgICAgICAgbWVzc2FnZTogJ+S9oOehruWumuimgeWPlua2iOWFs+azqOWQl++8nycsXHJcbiAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZVxyXG4gICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICBhamF4KCd1c2VyL2NhbmNlbFN1YnNjcmliZScsIGRhdGEpLnRoZW4oKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzLmRhdGEucmV0ID09PSAyMDApIHtcclxuICAgICAgICAgICAgJE5vdGlmeSh7XHJcbiAgICAgICAgICAgICAgdHlwZTogJ3dhcm5pbmcnLFxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IHJlcy5kYXRhLm1zZ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJE5vdGlmeSh7XHJcbiAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICBjb250ZW50OiByZXMuZGF0YS5tc2dcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN1Y2Nlc3MoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICBlcnJvcigpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBvbkxhdW5jaCgpIHtcclxuICAgIHd4Lm9uU29ja2V0T3BlbigoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfnm5HlkKzliLAgV2ViU29ja2V0IOi/nuaOpeW3suaJk+W8gO+8gScpO1xyXG4gICAgfSlcclxuICAgIGlvLm9uT3BlbigoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfov57mjqXmiZPlvIDmiJDlip8nKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgb25IaWRlKCkge1xyXG4gICAgaW8uc2VuZCh7XHJcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHsgdHlwZTogJ29mZkxpbmUnLCBob3N0SWQgfSksXHJcbiAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcclxuICAgICAgICBpby5jbG9zZSh7fSlcclxuICAgICAgICBjb25zb2xlLmxvZyhg5Li75py65LiL57q/5oiQ5Yqf77ya5Li75py65Y+35Li6JHtob3N0SWR9YClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn0pIl19
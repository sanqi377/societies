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
            console.log(wx.getMenuButtonBoundingClientRect().top);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztJQUV4QixHQUFHLEVBQUUscUJBQXFCO0lBQzFCLE9BQU8sRUFBRTtRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7SUFDNUIsQ0FBQztDQUNGLENBQUMsQ0FBQTtBQUVGLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQTtBQUVOLElBQUEsT0FBTyxHQUFLLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxRQUE3QyxDQUE2QztBQUNwRCxJQUFBLE9BQU8sR0FBSyxPQUFPLENBQUMsK0JBQStCLENBQUMsUUFBN0MsQ0FBNkM7QUFDcEQsSUFBQSxJQUFJLEdBQUssT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUE1QixDQUE0QjtBQUV4QyxHQUFHLENBQWE7SUFDZCxVQUFVLEVBQUU7UUFDVixFQUFFLElBQUE7UUFDRixPQUFPLEVBQVAsVUFBUSxRQUFhO1lBQ25CLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHO2dCQUNkLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDcEIsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDO1FBQ0QsT0FBTyxFQUFQLFVBQVEsSUFBUztZQUNmLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0JBQ04sSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO2dCQUMxQixPQUFPLEVBQUU7b0JBQ1AsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUE7b0JBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUZBQWdCLElBQUksQ0FBQyxJQUFNLENBQUMsQ0FBQTtnQkFDMUMsQ0FBQzthQUNGLENBQUMsQ0FBQTtRQUNKLENBQUM7UUFDRCxHQUFHLEVBQUUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7UUFLN0IsU0FBUyxFQUFULFVBQVUsSUFBWTtZQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQywrQkFBK0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ3JELE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPO2dCQUN6QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBUTtvQkFDekMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQUU7d0JBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQTt3QkFDWixPQUFPLENBQUM7NEJBQ04sSUFBSSxFQUFFLFNBQVM7NEJBQ2YsT0FBTyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRzt5QkFDdEIsQ0FBQyxDQUFBO3FCQUNIO3lCQUFNO3dCQUNMLE9BQU8sQ0FBQzs0QkFDTixJQUFJLEVBQUUsT0FBTzs0QkFDYixPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHO3lCQUN0QixDQUFDLENBQUE7cUJBQ0g7Z0JBQ0gsQ0FBQyxDQUFDLENBQUE7WUFDSixDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUM7UUFJRCxXQUFXLEVBQVgsVUFBWSxFQUFxQztnQkFBbkMsSUFBSSxVQUFBLEVBQUUsT0FBTyxhQUFBLEVBQUUsS0FBSyxXQUFBO1lBQ2hDLE9BQU8sQ0FBQztnQkFDTixLQUFLLEVBQUUsTUFBTTtnQkFDYixPQUFPLEVBQUUsWUFBWTtnQkFDckIsZ0JBQWdCLEVBQUUsSUFBSTthQUN2QixDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNOLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFRO29CQUMvQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRTt3QkFDeEIsT0FBTyxDQUFDOzRCQUNOLElBQUksRUFBRSxTQUFTOzRCQUNmLE9BQU8sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUc7eUJBQ3RCLENBQUMsQ0FBQTtxQkFDSDt5QkFBTTt3QkFDTCxPQUFPLENBQUM7NEJBQ04sSUFBSSxFQUFFLE9BQU87NEJBQ2IsT0FBTyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRzt5QkFDdEIsQ0FBQyxDQUFBO3FCQUNIO29CQUNELE9BQU8sRUFBRSxDQUFBO2dCQUNYLENBQUMsQ0FBQyxDQUFBO1lBQ0osQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUNQLEtBQUssRUFBRSxDQUFBO1lBQ1QsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDO0tBQ0Y7SUFDRCxRQUFRO1FBQ04sRUFBRSxDQUFDLFlBQVksQ0FBQztZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQTtRQUNGLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELE1BQU07UUFDSixFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ04sSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUM7WUFDakQsT0FBTyxFQUFFO2dCQUNQLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUE7Z0JBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyx1RUFBYyxNQUFRLENBQUMsQ0FBQTtZQUNyQyxDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IH1cclxubGV0IGlvID0gd3guY29ubmVjdFNvY2tldCh7XHJcbiAgLy8gdXJsOiAnd3NzOi8vd3NzLnpob3V3YWl6YWkuY2x1Yi93c3MnLFxyXG4gIHVybDogJ3dzOi8vbG9jYWxob3N0OjMwMDEnLFxyXG4gIHN1Y2Nlc3M6ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdzb2NrZXQg6L+e5o6l5oiQ5YqfJylcclxuICB9XHJcbn0pXHJcblxyXG5sZXQgaG9zdElkID0gMFxyXG5cclxuY29uc3QgeyAkTm90aWZ5IH0gPSByZXF1aXJlKCdAc2FucWkzNzcvcXVpL3Mtbm90aWZ5L25vdGlmeScpXHJcbmNvbnN0IHsgJERpYWxvZyB9ID0gcmVxdWlyZSgnQHNhbnFpMzc3L3F1aS9zLWRpYWxvZy9kaWFsb2cnKVxyXG5jb25zdCB7IGFqYXggfSA9IHJlcXVpcmUoJy4vdXRpbHMvdXRpbCcpXHJcblxyXG5BcHA8SUFwcE9wdGlvbj4oe1xyXG4gIGdsb2JhbERhdGE6IHtcclxuICAgIGlvLFxyXG4gICAgbW9uaXRvcihjYWxsYmFjazogYW55KSB7XHJcbiAgICAgIGlvLm9uTWVzc2FnZShyZXMgPT4ge1xyXG4gICAgICAgIGNhbGxiYWNrKHJlcy5kYXRhKVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIHdsZWNvbWUoaW5mbzogYW55KSB7XHJcbiAgICAgIGlvLnNlbmQoe1xyXG4gICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KGluZm8pLFxyXG4gICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcclxuICAgICAgICAgIGhvc3RJZCA9IGluZm8uc2VuZFxyXG4gICAgICAgICAgY29uc29sZS5sb2coYOe7keWumuS4u+acuuS/oeaBr+aIkOWKn++8muS4u+acuuWPt+S4uiR7aW5mby5zZW5kfWApXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIHVpZDogd3guZ2V0U3RvcmFnZVN5bmMoJ3VpZCcpLFxyXG4gICAgLyoqXHJcbiAgICAgKiDlhajlsYDlhbPms6hcclxuICAgICAqIEBwYXJhbSBkYXRhIFxyXG4gICAgICovXHJcbiAgICBzdWJzY3JpYmUoZGF0YTogb2JqZWN0KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHd4LmdldE1lbnVCdXR0b25Cb3VuZGluZ0NsaWVudFJlY3QoKS50b3ApXHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgIGFqYXgoJ3VzZXIvc3Vic2NyaWJlJywgZGF0YSkudGhlbigocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgIGlmIChyZXMuZGF0YS5yZXQgPT09IDIwMCkge1xyXG4gICAgICAgICAgICByZXNvbHZlKHJlcylcclxuICAgICAgICAgICAgJE5vdGlmeSh7XHJcbiAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IHJlcy5kYXRhLm1zZ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJE5vdGlmeSh7XHJcbiAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICBjb250ZW50OiByZXMuZGF0YS5tc2dcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog5YWo5bGA5Y+W5raI5YWz5rOoXHJcbiAgICAgKi9cclxuICAgIHVuU3Vic2NyaWJlKHsgZGF0YSwgc3VjY2VzcywgZXJyb3IgfTogdW5TdWJzY3JpYmUpIHtcclxuICAgICAgJERpYWxvZyh7XHJcbiAgICAgICAgdGl0bGU6ICfmuKnppqjmj5DnpLonLFxyXG4gICAgICAgIG1lc3NhZ2U6ICfkvaDnoa7lrpropoHlj5bmtojlhbPms6jlkJfvvJ8nLFxyXG4gICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWVcclxuICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgYWpheCgndXNlci9jYW5jZWxTdWJzY3JpYmUnLCBkYXRhKS50aGVuKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlcy5kYXRhLnJldCA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICROb3RpZnkoe1xyXG4gICAgICAgICAgICAgIHR5cGU6ICd3YXJuaW5nJyxcclxuICAgICAgICAgICAgICBjb250ZW50OiByZXMuZGF0YS5tc2dcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICROb3RpZnkoe1xyXG4gICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgY29udGVudDogcmVzLmRhdGEubXNnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzdWNjZXNzKClcclxuICAgICAgICB9KVxyXG4gICAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgZXJyb3IoKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgb25MYXVuY2goKSB7XHJcbiAgICB3eC5vblNvY2tldE9wZW4oKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygn55uR5ZCs5YiwIFdlYlNvY2tldCDov57mjqXlt7LmiZPlvIDvvIEnKTtcclxuICAgIH0pXHJcbiAgICBpby5vbk9wZW4oKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygn6L+e5o6l5omT5byA5oiQ5YqfJyk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIG9uSGlkZSgpIHtcclxuICAgIGlvLnNlbmQoe1xyXG4gICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7IHR5cGU6ICdvZmZMaW5lJywgaG9zdElkIH0pLFxyXG4gICAgICBzdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgaW8uY2xvc2Uoe30pXHJcbiAgICAgICAgY29uc29sZS5sb2coYOS4u+acuuS4i+e6v+aIkOWKn++8muS4u+acuuWPt+S4uiR7aG9zdElkfWApXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG59KSJdfQ==
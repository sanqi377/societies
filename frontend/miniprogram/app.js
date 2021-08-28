"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io = wx.connectSocket({
    url: 'ws://127.0.0.1:3001',
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
                ajax('http://localhost:3000/index/user/subscribe', data).then(function (res) {
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
        }
    },
    onLaunch: function () {
        wx.onSocketOpen(function () {
            console.log('监听到 WebSocket 连接已打开！');
        });
        console.log(this);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztJQUN4QixHQUFHLEVBQUUscUJBQXFCO0lBQzFCLE9BQU8sRUFBRTtRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7SUFDNUIsQ0FBQztDQUNGLENBQUMsQ0FBQTtBQUVGLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQTtBQUVOLElBQUEsT0FBTyxHQUFLLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxRQUE3QyxDQUE2QztBQUNwRCxJQUFBLE9BQU8sR0FBSyxPQUFPLENBQUMsK0JBQStCLENBQUMsUUFBN0MsQ0FBNkM7QUFDcEQsSUFBQSxJQUFJLEdBQUssT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUE1QixDQUE0QjtBQUV4QyxHQUFHLENBQWE7SUFDZCxVQUFVLEVBQUU7UUFDVixFQUFFLElBQUE7UUFDRixPQUFPLEVBQVAsVUFBUSxRQUFhO1lBQ25CLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHO2dCQUNkLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDcEIsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDO1FBQ0QsT0FBTyxFQUFQLFVBQVEsSUFBUztZQUNmLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0JBQ04sSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO2dCQUMxQixPQUFPLEVBQUU7b0JBQ1AsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUE7b0JBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUZBQWdCLElBQUksQ0FBQyxJQUFNLENBQUMsQ0FBQTtnQkFDMUMsQ0FBQzthQUNGLENBQUMsQ0FBQTtRQUNKLENBQUM7UUFDRCxHQUFHLEVBQUUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7UUFLN0IsU0FBUyxFQUFULFVBQVUsSUFBWTtZQUNwQixPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTztnQkFDekIsSUFBSSxDQUFDLDRDQUE0QyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVE7b0JBQ3JFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQTtvQkFDWixJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRTt3QkFDeEIsT0FBTyxDQUFDOzRCQUNOLElBQUksRUFBRSxTQUFTOzRCQUNmLE9BQU8sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUc7eUJBQ3RCLENBQUMsQ0FBQTtxQkFDSDt5QkFBTTt3QkFDTCxPQUFPLENBQUM7NEJBQ04sSUFBSSxFQUFFLE9BQU87NEJBQ2IsT0FBTyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRzt5QkFDdEIsQ0FBQyxDQUFBO3FCQUNIO2dCQUNILENBQUMsQ0FBQyxDQUFBO1lBQ0osQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDO0tBQ0Y7SUFDRCxRQUFRO1FBQ04sRUFBRSxDQUFDLFlBQVksQ0FBQztZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQTtRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDakIsRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsTUFBTTtRQUNKLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDTixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQztZQUNqRCxPQUFPLEVBQUU7Z0JBQ1AsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQTtnQkFDWixPQUFPLENBQUMsR0FBRyxDQUFDLHVFQUFjLE1BQVEsQ0FBQyxDQUFBO1lBQ3JDLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgfVxyXG5sZXQgaW8gPSB3eC5jb25uZWN0U29ja2V0KHtcclxuICB1cmw6ICd3czovLzEyNy4wLjAuMTozMDAxJyxcclxuICBzdWNjZXNzOiAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnc29ja2V0IOi/nuaOpeaIkOWKnycpXHJcbiAgfVxyXG59KVxyXG5cclxubGV0IGhvc3RJZCA9IDBcclxuXHJcbmNvbnN0IHsgJE5vdGlmeSB9ID0gcmVxdWlyZSgnQHNhbnFpMzc3L3F1aS9zLW5vdGlmeS9ub3RpZnknKVxyXG5jb25zdCB7ICREaWFsb2cgfSA9IHJlcXVpcmUoJ0BzYW5xaTM3Ny9xdWkvcy1kaWFsb2cvZGlhbG9nJylcclxuY29uc3QgeyBhamF4IH0gPSByZXF1aXJlKCcuL3V0aWxzL3V0aWwnKVxyXG5cclxuQXBwPElBcHBPcHRpb24+KHtcclxuICBnbG9iYWxEYXRhOiB7XHJcbiAgICBpbyxcclxuICAgIG1vbml0b3IoY2FsbGJhY2s6IGFueSkge1xyXG4gICAgICBpby5vbk1lc3NhZ2UocmVzID0+IHtcclxuICAgICAgICBjYWxsYmFjayhyZXMuZGF0YSlcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICB3bGVjb21lKGluZm86IGFueSkge1xyXG4gICAgICBpby5zZW5kKHtcclxuICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShpbmZvKSxcclxuICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgICBob3N0SWQgPSBpbmZvLnNlbmRcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGDnu5HlrprkuLvmnLrkv6Hmga/miJDlip/vvJrkuLvmnLrlj7fkuLoke2luZm8uc2VuZH1gKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICB1aWQ6IHd4LmdldFN0b3JhZ2VTeW5jKCd1aWQnKSxcclxuICAgIC8qKlxyXG4gICAgICog5YWz5rOoXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBcclxuICAgICAqL1xyXG4gICAgc3Vic2NyaWJlKGRhdGE6IG9iamVjdCkge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICBhamF4KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvaW5kZXgvdXNlci9zdWJzY3JpYmUnLCBkYXRhKS50aGVuKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZShyZXMpXHJcbiAgICAgICAgICBpZiAocmVzLmRhdGEucmV0ID09PSAyMDApIHtcclxuICAgICAgICAgICAgJE5vdGlmeSh7XHJcbiAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IHJlcy5kYXRhLm1zZ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJE5vdGlmeSh7XHJcbiAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICBjb250ZW50OiByZXMuZGF0YS5tc2dcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgb25MYXVuY2goKSB7XHJcbiAgICB3eC5vblNvY2tldE9wZW4oKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygn55uR5ZCs5YiwIFdlYlNvY2tldCDov57mjqXlt7LmiZPlvIDvvIEnKTtcclxuICAgIH0pXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzKVxyXG4gICAgaW8ub25PcGVuKCgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ+i/nuaOpeaJk+W8gOaIkOWKnycpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBvbkhpZGUoKSB7XHJcbiAgICBpby5zZW5kKHtcclxuICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoeyB0eXBlOiAnb2ZmTGluZScsIGhvc3RJZCB9KSxcclxuICAgICAgc3VjY2VzczogKCkgPT4ge1xyXG4gICAgICAgIGlvLmNsb3NlKHt9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGDkuLvmnLrkuIvnur/miJDlip/vvJrkuLvmnLrlj7fkuLoke2hvc3RJZH1gKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufSkiXX0=
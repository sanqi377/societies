"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io = wx.connectSocket({
    url: 'ws://127.0.0.1:3001',
    success: function () {
        console.log('socket 连接成功');
    }
});
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
                    console.log("\u7ED1\u5B9A\u4E3B\u673A\u4FE1\u606F\u6210\u529F\uFF1A\u4E3B\u673A\u53F7\u4E3A" + info.send);
                }
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztJQUN4QixHQUFHLEVBQUUscUJBQXFCO0lBQzFCLE9BQU8sRUFBRTtRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7SUFDNUIsQ0FBQztDQUNGLENBQUMsQ0FBQTtBQUVGLEdBQUcsQ0FBYTtJQUNkLFVBQVUsRUFBRTtRQUNWLEVBQUUsSUFBQTtRQUNGLE9BQU8sRUFBUCxVQUFRLFFBQWE7WUFDbkIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLEdBQUc7Z0JBQ2QsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNwQixDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUM7UUFDRCxPQUFPLEVBQVAsVUFBUSxJQUFTO1lBQ2YsRUFBRSxDQUFDLElBQUksQ0FBQztnQkFDTixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7Z0JBQzFCLE9BQU8sRUFBRTtvQkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLG1GQUFnQixJQUFJLENBQUMsSUFBTSxDQUFDLENBQUE7Z0JBQzFDLENBQUM7YUFDRixDQUFDLENBQUE7UUFDSixDQUFDO0tBQ0Y7SUFDRCxRQUFRO1FBQ04sRUFBRSxDQUFDLFlBQVksQ0FBQztZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQTtRQUVGLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IH1cclxubGV0IGlvID0gd3guY29ubmVjdFNvY2tldCh7XHJcbiAgdXJsOiAnd3M6Ly8xMjcuMC4wLjE6MzAwMScsXHJcbiAgc3VjY2VzczogKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ3NvY2tldCDov57mjqXmiJDlip8nKVxyXG4gIH1cclxufSlcclxuXHJcbkFwcDxJQXBwT3B0aW9uPih7XHJcbiAgZ2xvYmFsRGF0YToge1xyXG4gICAgaW8sXHJcbiAgICBtb25pdG9yKGNhbGxiYWNrOiBhbnkpIHtcclxuICAgICAgaW8ub25NZXNzYWdlKHJlcyA9PiB7XHJcbiAgICAgICAgY2FsbGJhY2socmVzLmRhdGEpXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgd2xlY29tZShpbmZvOiBhbnkpIHtcclxuICAgICAgaW8uc2VuZCh7XHJcbiAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoaW5mbyksXHJcbiAgICAgICAgc3VjY2VzczogKCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYOe7keWumuS4u+acuuS/oeaBr+aIkOWKn++8muS4u+acuuWPt+S4uiR7aW5mby5zZW5kfWApXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgb25MYXVuY2goKSB7XHJcbiAgICB3eC5vblNvY2tldE9wZW4oKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygn55uR5ZCs5YiwIFdlYlNvY2tldCDov57mjqXlt7LmiZPlvIDvvIEnKTtcclxuICAgIH0pXHJcblxyXG4gICAgaW8ub25PcGVuKCgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ+i/nuaOpeaJk+W8gOaIkOWKnycpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxufSkiXX0=
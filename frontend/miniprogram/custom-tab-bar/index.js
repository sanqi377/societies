"use strict";
Component({
    data: {
        selected: 0,
        color: "#7A7E83",
        selectedColor: "#3cc51f",
        list: [
            {
                "pagePath": "/pages/index/index/index",
                "text": "首页",
                "iconPath": "/public/image/index.svg",
                "selectedIconPath": "/public/image/index-active.svg"
            },
            {
                "pagePath": "/pages/societies/index/index",
                "text": "社团",
                "iconPath": "/public/image/societies.svg",
                "selectedIconPath": "/public/image/societies-active.svg"
            },
            {
                "pagePath": "/pages/message/index/index",
                "text": "消息",
                "iconPath": "/public/image/message.svg",
                "selectedIconPath": "/public/image/message-active.svg"
            },
            {
                "pagePath": "/pages/user/my/index",
                "text": "我的",
                "iconPath": "/public/image/my.svg",
                "selectedIconPath": "/public/image/my-active.svg"
            }
        ]
    },
    attached: function () {
    },
    methods: {
        switchTab: function (e) {
            var data = e.currentTarget.dataset;
            var url = data.path;
            if (url === '/pages/user/my/index') {
                var token = wx.getStorageSync('token');
                if (!token)
                    wx.navigateTo({ url: '/pages/user/login/index' });
            }
            wx.switchTab({ url: url });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBQ1IsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLENBQUM7UUFDWCxLQUFLLEVBQUUsU0FBUztRQUNoQixhQUFhLEVBQUUsU0FBUztRQUN4QixJQUFJLEVBQUU7WUFDSjtnQkFDRSxVQUFVLEVBQUUsMEJBQTBCO2dCQUN0QyxNQUFNLEVBQUUsSUFBSTtnQkFDWixVQUFVLEVBQUUseUJBQXlCO2dCQUNyQyxrQkFBa0IsRUFBRSxnQ0FBZ0M7YUFDckQ7WUFDRDtnQkFDRSxVQUFVLEVBQUUsOEJBQThCO2dCQUMxQyxNQUFNLEVBQUUsSUFBSTtnQkFDWixVQUFVLEVBQUUsNkJBQTZCO2dCQUN6QyxrQkFBa0IsRUFBRSxvQ0FBb0M7YUFDekQ7WUFDRDtnQkFDRSxVQUFVLEVBQUUsNEJBQTRCO2dCQUN4QyxNQUFNLEVBQUUsSUFBSTtnQkFDWixVQUFVLEVBQUUsMkJBQTJCO2dCQUN2QyxrQkFBa0IsRUFBRSxrQ0FBa0M7YUFDdkQ7WUFDRDtnQkFDRSxVQUFVLEVBQUUsc0JBQXNCO2dCQUNsQyxNQUFNLEVBQUUsSUFBSTtnQkFDWixVQUFVLEVBQUUsc0JBQXNCO2dCQUNsQyxrQkFBa0IsRUFBRSw2QkFBNkI7YUFDbEQ7U0FDRjtLQUNGO0lBQ0QsUUFBUTtJQUNSLENBQUM7SUFDRCxPQUFPLEVBQUU7UUFDUCxTQUFTLEVBQVQsVUFBVSxDQUFNO1lBQ2QsSUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUE7WUFDcEMsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQTtZQUNyQixJQUFJLEdBQUcsS0FBSyxzQkFBc0IsRUFBRTtnQkFDbEMsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtnQkFDdEMsSUFBSSxDQUFDLEtBQUs7b0JBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEdBQUcsRUFBRSx5QkFBeUIsRUFBRSxDQUFDLENBQUE7YUFDOUQ7WUFDRCxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxLQUFBLEVBQUUsQ0FBQyxDQUFBO1FBQ3ZCLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XHJcbiAgZGF0YToge1xyXG4gICAgc2VsZWN0ZWQ6IDAsXHJcbiAgICBjb2xvcjogXCIjN0E3RTgzXCIsXHJcbiAgICBzZWxlY3RlZENvbG9yOiBcIiMzY2M1MWZcIixcclxuICAgIGxpc3Q6IFtcclxuICAgICAge1xyXG4gICAgICAgIFwicGFnZVBhdGhcIjogXCIvcGFnZXMvaW5kZXgvaW5kZXgvaW5kZXhcIixcclxuICAgICAgICBcInRleHRcIjogXCLpppbpobVcIixcclxuICAgICAgICBcImljb25QYXRoXCI6IFwiL3B1YmxpYy9pbWFnZS9pbmRleC5zdmdcIixcclxuICAgICAgICBcInNlbGVjdGVkSWNvblBhdGhcIjogXCIvcHVibGljL2ltYWdlL2luZGV4LWFjdGl2ZS5zdmdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJwYWdlUGF0aFwiOiBcIi9wYWdlcy9zb2NpZXRpZXMvaW5kZXgvaW5kZXhcIixcclxuICAgICAgICBcInRleHRcIjogXCLnpL7lm6JcIixcclxuICAgICAgICBcImljb25QYXRoXCI6IFwiL3B1YmxpYy9pbWFnZS9zb2NpZXRpZXMuc3ZnXCIsXHJcbiAgICAgICAgXCJzZWxlY3RlZEljb25QYXRoXCI6IFwiL3B1YmxpYy9pbWFnZS9zb2NpZXRpZXMtYWN0aXZlLnN2Z1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcInBhZ2VQYXRoXCI6IFwiL3BhZ2VzL21lc3NhZ2UvaW5kZXgvaW5kZXhcIixcclxuICAgICAgICBcInRleHRcIjogXCLmtojmga9cIixcclxuICAgICAgICBcImljb25QYXRoXCI6IFwiL3B1YmxpYy9pbWFnZS9tZXNzYWdlLnN2Z1wiLFxyXG4gICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcIi9wdWJsaWMvaW1hZ2UvbWVzc2FnZS1hY3RpdmUuc3ZnXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwicGFnZVBhdGhcIjogXCIvcGFnZXMvdXNlci9teS9pbmRleFwiLFxyXG4gICAgICAgIFwidGV4dFwiOiBcIuaIkeeahFwiLFxyXG4gICAgICAgIFwiaWNvblBhdGhcIjogXCIvcHVibGljL2ltYWdlL215LnN2Z1wiLFxyXG4gICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcIi9wdWJsaWMvaW1hZ2UvbXktYWN0aXZlLnN2Z1wiXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIGF0dGFjaGVkKCkge1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgc3dpdGNoVGFiKGU6IGFueSkge1xyXG4gICAgICBjb25zdCBkYXRhID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXRcclxuICAgICAgY29uc3QgdXJsID0gZGF0YS5wYXRoXHJcbiAgICAgIGlmICh1cmwgPT09ICcvcGFnZXMvdXNlci9teS9pbmRleCcpIHtcclxuICAgICAgICB2YXIgdG9rZW4gPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKVxyXG4gICAgICAgIGlmICghdG9rZW4pIHd4Lm5hdmlnYXRlVG8oeyB1cmw6ICcvcGFnZXMvdXNlci9sb2dpbi9pbmRleCcgfSlcclxuICAgICAgfVxyXG4gICAgICB3eC5zd2l0Y2hUYWIoeyB1cmwgfSlcclxuICAgIH1cclxuICB9XHJcbn0pIl19
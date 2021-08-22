"use strict";
Component({
    data: {
        selected: 0,
        color: "#7A7E83",
        selectedColor: "#3cc51f",
        list: [
            {
                "pagePath": "/pages/index/index",
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
                "pagePath": "/pages/societies/index/index",
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
            this.setData({
                selected: data.index
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBQ1IsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLENBQUM7UUFDWCxLQUFLLEVBQUUsU0FBUztRQUNoQixhQUFhLEVBQUUsU0FBUztRQUN4QixJQUFJLEVBQUU7WUFDSjtnQkFDRSxVQUFVLEVBQUUsb0JBQW9CO2dCQUNoQyxNQUFNLEVBQUUsSUFBSTtnQkFDWixVQUFVLEVBQUUseUJBQXlCO2dCQUNyQyxrQkFBa0IsRUFBRSxnQ0FBZ0M7YUFDckQ7WUFDRDtnQkFDRSxVQUFVLEVBQUUsOEJBQThCO2dCQUMxQyxNQUFNLEVBQUUsSUFBSTtnQkFDWixVQUFVLEVBQUUsNkJBQTZCO2dCQUN6QyxrQkFBa0IsRUFBRSxvQ0FBb0M7YUFDekQ7WUFDRDtnQkFDRSxVQUFVLEVBQUUsOEJBQThCO2dCQUMxQyxNQUFNLEVBQUUsSUFBSTtnQkFDWixVQUFVLEVBQUUsMkJBQTJCO2dCQUN2QyxrQkFBa0IsRUFBRSxrQ0FBa0M7YUFDdkQ7WUFDRDtnQkFDRSxVQUFVLEVBQUUsc0JBQXNCO2dCQUNsQyxNQUFNLEVBQUUsSUFBSTtnQkFDWixVQUFVLEVBQUUsc0JBQXNCO2dCQUNsQyxrQkFBa0IsRUFBRSw2QkFBNkI7YUFDbEQ7U0FDRjtLQUNGO0lBQ0QsUUFBUTtJQUNSLENBQUM7SUFDRCxPQUFPLEVBQUU7UUFDUCxTQUFTLEVBQVQsVUFBVSxDQUFNO1lBQ2QsSUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUE7WUFDcEMsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQTtZQUNyQixJQUFJLEdBQUcsS0FBSyxzQkFBc0IsRUFBRTtnQkFDbEMsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtnQkFDdEMsSUFBSSxDQUFDLEtBQUs7b0JBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEdBQUcsRUFBRSx5QkFBeUIsRUFBRSxDQUFDLENBQUE7YUFDOUQ7WUFDRCxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxLQUFBLEVBQUUsQ0FBQyxDQUFBO1lBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLO2FBQ3JCLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XHJcbiAgZGF0YToge1xyXG4gICAgc2VsZWN0ZWQ6IDAsXHJcbiAgICBjb2xvcjogXCIjN0E3RTgzXCIsXHJcbiAgICBzZWxlY3RlZENvbG9yOiBcIiMzY2M1MWZcIixcclxuICAgIGxpc3Q6IFtcclxuICAgICAge1xyXG4gICAgICAgIFwicGFnZVBhdGhcIjogXCIvcGFnZXMvaW5kZXgvaW5kZXhcIixcclxuICAgICAgICBcInRleHRcIjogXCLpppbpobVcIixcclxuICAgICAgICBcImljb25QYXRoXCI6IFwiL3B1YmxpYy9pbWFnZS9pbmRleC5zdmdcIixcclxuICAgICAgICBcInNlbGVjdGVkSWNvblBhdGhcIjogXCIvcHVibGljL2ltYWdlL2luZGV4LWFjdGl2ZS5zdmdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJwYWdlUGF0aFwiOiBcIi9wYWdlcy9zb2NpZXRpZXMvaW5kZXgvaW5kZXhcIixcclxuICAgICAgICBcInRleHRcIjogXCLnpL7lm6JcIixcclxuICAgICAgICBcImljb25QYXRoXCI6IFwiL3B1YmxpYy9pbWFnZS9zb2NpZXRpZXMuc3ZnXCIsXHJcbiAgICAgICAgXCJzZWxlY3RlZEljb25QYXRoXCI6IFwiL3B1YmxpYy9pbWFnZS9zb2NpZXRpZXMtYWN0aXZlLnN2Z1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcInBhZ2VQYXRoXCI6IFwiL3BhZ2VzL3NvY2lldGllcy9pbmRleC9pbmRleFwiLFxyXG4gICAgICAgIFwidGV4dFwiOiBcIua2iOaBr1wiLFxyXG4gICAgICAgIFwiaWNvblBhdGhcIjogXCIvcHVibGljL2ltYWdlL21lc3NhZ2Uuc3ZnXCIsXHJcbiAgICAgICAgXCJzZWxlY3RlZEljb25QYXRoXCI6IFwiL3B1YmxpYy9pbWFnZS9tZXNzYWdlLWFjdGl2ZS5zdmdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJwYWdlUGF0aFwiOiBcIi9wYWdlcy91c2VyL215L2luZGV4XCIsXHJcbiAgICAgICAgXCJ0ZXh0XCI6IFwi5oiR55qEXCIsXHJcbiAgICAgICAgXCJpY29uUGF0aFwiOiBcIi9wdWJsaWMvaW1hZ2UvbXkuc3ZnXCIsXHJcbiAgICAgICAgXCJzZWxlY3RlZEljb25QYXRoXCI6IFwiL3B1YmxpYy9pbWFnZS9teS1hY3RpdmUuc3ZnXCJcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAgYXR0YWNoZWQoKSB7XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBzd2l0Y2hUYWIoZTogYW55KSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldFxyXG4gICAgICBjb25zdCB1cmwgPSBkYXRhLnBhdGhcclxuICAgICAgaWYgKHVybCA9PT0gJy9wYWdlcy91c2VyL215L2luZGV4Jykge1xyXG4gICAgICAgIHZhciB0b2tlbiA9IHd4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpXHJcbiAgICAgICAgaWYgKCF0b2tlbikgd3gubmF2aWdhdGVUbyh7IHVybDogJy9wYWdlcy91c2VyL2xvZ2luL2luZGV4JyB9KVxyXG4gICAgICB9XHJcbiAgICAgIHd4LnN3aXRjaFRhYih7IHVybCB9KVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHNlbGVjdGVkOiBkYXRhLmluZGV4XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG59KSJdfQ==
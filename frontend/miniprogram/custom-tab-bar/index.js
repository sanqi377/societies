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
                "iconPath": "/public/icon/index.svg",
                "selectedIconPath": "/public/icon/index-active.svg"
            },
            {
                "pagePath": "/pages/societies/index/index",
                "text": "社团",
                "iconPath": "/public/icon/societies.svg",
                "selectedIconPath": "/public/icon/societies-active.svg"
            },
            {
                "pagePath": "/pages/message/index/index",
                "text": "消息",
                "iconPath": "/public/icon/message.svg",
                "selectedIconPath": "/public/icon/message-active.svg"
            },
            {
                "pagePath": "/pages/user/my/index",
                "text": "我的",
                "iconPath": "/public/icon/my.svg",
                "selectedIconPath": "/public/icon/my-active.svg"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBQ1IsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLENBQUM7UUFDWCxLQUFLLEVBQUUsU0FBUztRQUNoQixhQUFhLEVBQUUsU0FBUztRQUN4QixJQUFJLEVBQUU7WUFDSjtnQkFDRSxVQUFVLEVBQUUsMEJBQTBCO2dCQUN0QyxNQUFNLEVBQUUsSUFBSTtnQkFDWixVQUFVLEVBQUUsd0JBQXdCO2dCQUNwQyxrQkFBa0IsRUFBRSwrQkFBK0I7YUFDcEQ7WUFDRDtnQkFDRSxVQUFVLEVBQUUsOEJBQThCO2dCQUMxQyxNQUFNLEVBQUUsSUFBSTtnQkFDWixVQUFVLEVBQUUsNEJBQTRCO2dCQUN4QyxrQkFBa0IsRUFBRSxtQ0FBbUM7YUFDeEQ7WUFDRDtnQkFDRSxVQUFVLEVBQUUsNEJBQTRCO2dCQUN4QyxNQUFNLEVBQUUsSUFBSTtnQkFDWixVQUFVLEVBQUUsMEJBQTBCO2dCQUN0QyxrQkFBa0IsRUFBRSxpQ0FBaUM7YUFDdEQ7WUFDRDtnQkFDRSxVQUFVLEVBQUUsc0JBQXNCO2dCQUNsQyxNQUFNLEVBQUUsSUFBSTtnQkFDWixVQUFVLEVBQUUscUJBQXFCO2dCQUNqQyxrQkFBa0IsRUFBRSw0QkFBNEI7YUFDakQ7U0FDRjtLQUNGO0lBQ0QsUUFBUTtJQUNSLENBQUM7SUFDRCxPQUFPLEVBQUU7UUFDUCxTQUFTLEVBQVQsVUFBVSxDQUFNO1lBQ2QsSUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUE7WUFDcEMsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQTtZQUNyQixJQUFJLEdBQUcsS0FBSyxzQkFBc0IsRUFBRTtnQkFDbEMsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtnQkFDdEMsSUFBSSxDQUFDLEtBQUs7b0JBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEdBQUcsRUFBRSx5QkFBeUIsRUFBRSxDQUFDLENBQUE7YUFDOUQ7WUFDRCxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxLQUFBLEVBQUUsQ0FBQyxDQUFBO1FBQ3ZCLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XHJcbiAgZGF0YToge1xyXG4gICAgc2VsZWN0ZWQ6IDAsXHJcbiAgICBjb2xvcjogXCIjN0E3RTgzXCIsXHJcbiAgICBzZWxlY3RlZENvbG9yOiBcIiMzY2M1MWZcIixcclxuICAgIGxpc3Q6IFtcclxuICAgICAge1xyXG4gICAgICAgIFwicGFnZVBhdGhcIjogXCIvcGFnZXMvaW5kZXgvaW5kZXgvaW5kZXhcIixcclxuICAgICAgICBcInRleHRcIjogXCLpppbpobVcIixcclxuICAgICAgICBcImljb25QYXRoXCI6IFwiL3B1YmxpYy9pY29uL2luZGV4LnN2Z1wiLFxyXG4gICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcIi9wdWJsaWMvaWNvbi9pbmRleC1hY3RpdmUuc3ZnXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwicGFnZVBhdGhcIjogXCIvcGFnZXMvc29jaWV0aWVzL2luZGV4L2luZGV4XCIsXHJcbiAgICAgICAgXCJ0ZXh0XCI6IFwi56S+5ZuiXCIsXHJcbiAgICAgICAgXCJpY29uUGF0aFwiOiBcIi9wdWJsaWMvaWNvbi9zb2NpZXRpZXMuc3ZnXCIsXHJcbiAgICAgICAgXCJzZWxlY3RlZEljb25QYXRoXCI6IFwiL3B1YmxpYy9pY29uL3NvY2lldGllcy1hY3RpdmUuc3ZnXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwicGFnZVBhdGhcIjogXCIvcGFnZXMvbWVzc2FnZS9pbmRleC9pbmRleFwiLFxyXG4gICAgICAgIFwidGV4dFwiOiBcIua2iOaBr1wiLFxyXG4gICAgICAgIFwiaWNvblBhdGhcIjogXCIvcHVibGljL2ljb24vbWVzc2FnZS5zdmdcIixcclxuICAgICAgICBcInNlbGVjdGVkSWNvblBhdGhcIjogXCIvcHVibGljL2ljb24vbWVzc2FnZS1hY3RpdmUuc3ZnXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwicGFnZVBhdGhcIjogXCIvcGFnZXMvdXNlci9teS9pbmRleFwiLFxyXG4gICAgICAgIFwidGV4dFwiOiBcIuaIkeeahFwiLFxyXG4gICAgICAgIFwiaWNvblBhdGhcIjogXCIvcHVibGljL2ljb24vbXkuc3ZnXCIsXHJcbiAgICAgICAgXCJzZWxlY3RlZEljb25QYXRoXCI6IFwiL3B1YmxpYy9pY29uL215LWFjdGl2ZS5zdmdcIlxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSxcclxuICBhdHRhY2hlZCgpIHtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIHN3aXRjaFRhYihlOiBhbnkpIHtcclxuICAgICAgY29uc3QgZGF0YSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0XHJcbiAgICAgIGNvbnN0IHVybCA9IGRhdGEucGF0aFxyXG4gICAgICBpZiAodXJsID09PSAnL3BhZ2VzL3VzZXIvbXkvaW5kZXgnKSB7XHJcbiAgICAgICAgdmFyIHRva2VuID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJylcclxuICAgICAgICBpZiAoIXRva2VuKSB3eC5uYXZpZ2F0ZVRvKHsgdXJsOiAnL3BhZ2VzL3VzZXIvbG9naW4vaW5kZXgnIH0pXHJcbiAgICAgIH1cclxuICAgICAgd3guc3dpdGNoVGFiKHsgdXJsIH0pXHJcbiAgICB9XHJcbiAgfVxyXG59KSJdfQ==
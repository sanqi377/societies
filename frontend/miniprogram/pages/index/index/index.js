"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getFont = require('../../../utils/util').getFont;
Page({
    data: {
        info: {
            title: '社团迎新',
            subTitle: '快来找一个中意的社团把！',
            icon: 'https://iconfont.alicdn.com/s/5b4c3bf4-323c-470c-a946-763db030bf9f_origin.svg',
            btnTitle: '我要加入',
            btnPath: '/pages/welcome/index'
        },
    },
    onLoad: function () {
        var _this = this;
        getFont().then(function (res) {
            if (res) {
                _this.setData({
                    show: true
                });
            }
        });
    },
    onShow: function () {
        if (typeof this.getTabBar === 'function' && this.getTabBar()) {
            this.getTabBar().setData({
                selected: 0
            });
        }
    },
    goWelcome: function () {
        wx.navigateTo({
            url: '/pages/societies/welcome/index'
        });
    },
    goAll: function () {
        wx.navigateTo({
            url: '/pages/societies/all/index'
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVRLElBQUEsT0FBTyxHQUFLLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxRQUFuQyxDQUFtQztBQUVsRCxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUU7WUFDSixLQUFLLEVBQUUsTUFBTTtZQUNiLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLElBQUksRUFBRSwrRUFBK0U7WUFDckYsUUFBUSxFQUFFLE1BQU07WUFDaEIsT0FBTyxFQUFFLHNCQUFzQjtTQUNoQztLQUNGO0lBQ0QsTUFBTSxFQUFOO1FBQ0UsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFBO1FBQ2hCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVk7WUFDMUIsSUFBSSxHQUFHLEVBQUU7Z0JBQ1AsS0FBSyxDQUFDLE9BQU8sQ0FBQztvQkFDWixJQUFJLEVBQUUsSUFBSTtpQkFDWCxDQUFDLENBQUE7YUFDSDtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELE1BQU0sRUFBRTtRQUNOLElBQUksT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLFVBQVUsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDNUQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE9BQU8sQ0FBQztnQkFDdkIsUUFBUSxFQUFFLENBQUM7YUFDWixDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7SUFDRCxTQUFTO1FBQ1AsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxnQ0FBZ0M7U0FDdEMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELEtBQUs7UUFDSCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLDRCQUE0QjtTQUNsQyxDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgfVxyXG5cclxuY29uc3QgeyBnZXRGb250IH0gPSByZXF1aXJlKCcuLi8uLi8uLi91dGlscy91dGlsJylcclxuXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIGluZm86IHtcclxuICAgICAgdGl0bGU6ICfnpL7lm6Lov47mlrAnLFxyXG4gICAgICBzdWJUaXRsZTogJ+W/q+adpeaJvuS4gOS4quS4reaEj+eahOekvuWbouaKiu+8gScsXHJcbiAgICAgIGljb246ICdodHRwczovL2ljb25mb250LmFsaWNkbi5jb20vcy81YjRjM2JmNC0zMjNjLTQ3MGMtYTk0Ni03NjNkYjAzMGJmOWZfb3JpZ2luLnN2ZycsXHJcbiAgICAgIGJ0blRpdGxlOiAn5oiR6KaB5Yqg5YWlJyxcclxuICAgICAgYnRuUGF0aDogJy9wYWdlcy93ZWxjb21lL2luZGV4J1xyXG4gICAgfSxcclxuICB9LFxyXG4gIG9uTG9hZCgpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXNcclxuICAgIGdldEZvbnQoKS50aGVuKChyZXM6IGJvb2xlYW4pID0+IHtcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIF90aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgc2hvdzogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSxcclxuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5nZXRUYWJCYXIgPT09ICdmdW5jdGlvbicgJiYgdGhpcy5nZXRUYWJCYXIoKSkge1xyXG4gICAgICB0aGlzLmdldFRhYkJhcigpLnNldERhdGEoe1xyXG4gICAgICAgIHNlbGVjdGVkOiAwXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBnb1dlbGNvbWUoKSB7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOiAnL3BhZ2VzL3NvY2lldGllcy93ZWxjb21lL2luZGV4J1xyXG4gICAgfSlcclxuICB9LFxyXG4gIGdvQWxsKCkge1xyXG4gICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDogJy9wYWdlcy9zb2NpZXRpZXMvYWxsL2luZGV4J1xyXG4gICAgfSlcclxuICB9XHJcbn0pXHJcbiJdfQ==
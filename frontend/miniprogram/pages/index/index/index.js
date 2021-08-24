"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getFont = require('../../../utils/util').getFont;
Page({
    data: {
        info: {
            title: '社团纳新',
            subTitle: '快来找一个中意的社团把！',
            icon: 'https://iconfont.alicdn.com/s/5b4c3bf4-323c-470c-a946-763db030bf9f_origin.svg',
            btnTitle: '我要报名',
            btnPath: ''
        },
    },
    onLoad: function () {
        var _this = this;
        getFont().then(function (res) {
            console.log(res);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVRLElBQUEsT0FBTyxHQUFLLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxRQUFuQyxDQUFtQztBQUVsRCxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUU7WUFDSixLQUFLLEVBQUUsTUFBTTtZQUNiLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLElBQUksRUFBRSwrRUFBK0U7WUFDckYsUUFBUSxFQUFFLE1BQU07WUFDaEIsT0FBTyxFQUFFLEVBQUU7U0FDWjtLQUNGO0lBQ0QsTUFBTSxFQUFOO1FBQ0UsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFBO1FBQ2hCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVk7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNoQixJQUFJLEdBQUcsRUFBRTtnQkFDUCxLQUFLLENBQUMsT0FBTyxDQUFDO29CQUNaLElBQUksRUFBRSxJQUFJO2lCQUNYLENBQUMsQ0FBQTthQUNIO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsTUFBTSxFQUFFO1FBQ04sSUFBSSxPQUFPLElBQUksQ0FBQyxTQUFTLEtBQUssVUFBVSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUM1RCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUN2QixRQUFRLEVBQUUsQ0FBQzthQUNaLENBQUMsQ0FBQTtTQUNIO0lBQ0gsQ0FBQztJQUNELFNBQVM7UUFDUCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLGdDQUFnQztTQUN0QyxDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsS0FBSztRQUNILEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsNEJBQTRCO1NBQ2xDLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyB9XHJcblxyXG5jb25zdCB7IGdldEZvbnQgfSA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxzL3V0aWwnKVxyXG5cclxuUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgaW5mbzoge1xyXG4gICAgICB0aXRsZTogJ+ekvuWboue6s+aWsCcsXHJcbiAgICAgIHN1YlRpdGxlOiAn5b+r5p2l5om+5LiA5Liq5Lit5oSP55qE56S+5Zui5oqK77yBJyxcclxuICAgICAgaWNvbjogJ2h0dHBzOi8vaWNvbmZvbnQuYWxpY2RuLmNvbS9zLzViNGMzYmY0LTMyM2MtNDcwYy1hOTQ2LTc2M2RiMDMwYmY5Zl9vcmlnaW4uc3ZnJyxcclxuICAgICAgYnRuVGl0bGU6ICfmiJHopoHmiqXlkI0nLFxyXG4gICAgICBidG5QYXRoOiAnJ1xyXG4gICAgfSxcclxuICB9LFxyXG4gIG9uTG9hZCgpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXNcclxuICAgIGdldEZvbnQoKS50aGVuKChyZXM6IGJvb2xlYW4pID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgX3RoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBzaG93OiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LFxyXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLmdldFRhYkJhciA9PT0gJ2Z1bmN0aW9uJyAmJiB0aGlzLmdldFRhYkJhcigpKSB7XHJcbiAgICAgIHRoaXMuZ2V0VGFiQmFyKCkuc2V0RGF0YSh7XHJcbiAgICAgICAgc2VsZWN0ZWQ6IDBcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGdvV2VsY29tZSgpIHtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6ICcvcGFnZXMvc29jaWV0aWVzL3dlbGNvbWUvaW5kZXgnXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgZ29BbGwoKSB7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOiAnL3BhZ2VzL3NvY2lldGllcy9hbGwvaW5kZXgnXHJcbiAgICB9KVxyXG4gIH1cclxufSlcclxuIl19
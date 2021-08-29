"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLElBQUksRUFBRTtZQUNKLEtBQUssRUFBRSxNQUFNO1lBQ2IsUUFBUSxFQUFFLGNBQWM7WUFDeEIsSUFBSSxFQUFFLCtFQUErRTtZQUNyRixRQUFRLEVBQUUsTUFBTTtZQUNoQixPQUFPLEVBQUUsc0JBQXNCO1NBQ2hDO0tBQ0Y7SUFDRCxNQUFNO0lBQ04sQ0FBQztJQUNELE1BQU0sRUFBRTtRQUNOLElBQUksT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLFVBQVUsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDNUQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE9BQU8sQ0FBQztnQkFDdkIsUUFBUSxFQUFFLENBQUM7YUFDWixDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7SUFDRCxTQUFTO1FBQ1AsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxnQ0FBZ0M7U0FDdEMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELEtBQUs7UUFDSCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLDRCQUE0QjtTQUNsQyxDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgfVxyXG5cclxuUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgaW5mbzoge1xyXG4gICAgICB0aXRsZTogJ+ekvuWboui/juaWsCcsXHJcbiAgICAgIHN1YlRpdGxlOiAn5b+r5p2l5om+5LiA5Liq5Lit5oSP55qE56S+5Zui5oqK77yBJyxcclxuICAgICAgaWNvbjogJ2h0dHBzOi8vaWNvbmZvbnQuYWxpY2RuLmNvbS9zLzViNGMzYmY0LTMyM2MtNDcwYy1hOTQ2LTc2M2RiMDMwYmY5Zl9vcmlnaW4uc3ZnJyxcclxuICAgICAgYnRuVGl0bGU6ICfmiJHopoHliqDlhaUnLFxyXG4gICAgICBidG5QYXRoOiAnL3BhZ2VzL3dlbGNvbWUvaW5kZXgnXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgb25Mb2FkKCkge1xyXG4gIH0sXHJcbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMuZ2V0VGFiQmFyID09PSAnZnVuY3Rpb24nICYmIHRoaXMuZ2V0VGFiQmFyKCkpIHtcclxuICAgICAgdGhpcy5nZXRUYWJCYXIoKS5zZXREYXRhKHtcclxuICAgICAgICBzZWxlY3RlZDogMFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZ29XZWxjb21lKCkge1xyXG4gICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDogJy9wYWdlcy9zb2NpZXRpZXMvd2VsY29tZS9pbmRleCdcclxuICAgIH0pXHJcbiAgfSxcclxuICBnb0FsbCgpIHtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6ICcvcGFnZXMvc29jaWV0aWVzL2FsbC9pbmRleCdcclxuICAgIH0pXHJcbiAgfVxyXG59KVxyXG4iXX0=
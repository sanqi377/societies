"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFO1lBQ0osS0FBSyxFQUFFLE1BQU07WUFDYixRQUFRLEVBQUUsY0FBYztZQUN4QixJQUFJLEVBQUUsK0VBQStFO1lBQ3JGLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLE9BQU8sRUFBRSxFQUFFO1NBQ1o7S0FDRjtJQUNELE1BQU0sRUFBRTtRQUNOLElBQUksT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLFVBQVUsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDNUQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE9BQU8sQ0FBQztnQkFDdkIsUUFBUSxFQUFFLENBQUM7YUFDWixDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7SUFDRCxTQUFTO1FBQ1AsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxnQ0FBZ0M7U0FDdEMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELEtBQUs7UUFDSCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLDRCQUE0QjtTQUNsQyxDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgaW5mbzoge1xyXG4gICAgICB0aXRsZTogJ+ekvuWboue6s+aWsCcsXHJcbiAgICAgIHN1YlRpdGxlOiAn5b+r5p2l5om+5LiA5Liq5Lit5oSP55qE56S+5Zui5oqK77yBJyxcclxuICAgICAgaWNvbjogJ2h0dHBzOi8vaWNvbmZvbnQuYWxpY2RuLmNvbS9zLzViNGMzYmY0LTMyM2MtNDcwYy1hOTQ2LTc2M2RiMDMwYmY5Zl9vcmlnaW4uc3ZnJyxcclxuICAgICAgYnRuVGl0bGU6ICfmiJHopoHmiqXlkI0nLFxyXG4gICAgICBidG5QYXRoOiAnJ1xyXG4gICAgfSxcclxuICB9LFxyXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLmdldFRhYkJhciA9PT0gJ2Z1bmN0aW9uJyAmJiB0aGlzLmdldFRhYkJhcigpKSB7XHJcbiAgICAgIHRoaXMuZ2V0VGFiQmFyKCkuc2V0RGF0YSh7XHJcbiAgICAgICAgc2VsZWN0ZWQ6IDBcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGdvV2VsY29tZSgpIHtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6ICcvcGFnZXMvc29jaWV0aWVzL3dlbGNvbWUvaW5kZXgnXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgZ29BbGwoKSB7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOiAnL3BhZ2VzL3NvY2lldGllcy9hbGwvaW5kZXgnXHJcbiAgICB9KVxyXG4gIH1cclxufSlcclxuIl19
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFO1lBQ0osS0FBSyxFQUFFLE1BQU07WUFDYixRQUFRLEVBQUUsY0FBYztZQUN4QixJQUFJLEVBQUUsK0VBQStFO1lBQ3JGLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLE9BQU8sRUFBRSxFQUFFO1NBQ1o7S0FDRjtJQUNELE1BQU0sRUFBRTtRQUNOLElBQUksT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLFVBQVUsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDNUQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE9BQU8sQ0FBQztnQkFDdkIsUUFBUSxFQUFFLENBQUM7YUFDWixDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7SUFDRCxTQUFTO1FBQ1AsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxnQ0FBZ0M7U0FDdEMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELEtBQUs7UUFDSCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLDRCQUE0QjtTQUNsQyxDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBpbmZvOiB7XG4gICAgICB0aXRsZTogJ+ekvuWboue6s+aWsCcsXG4gICAgICBzdWJUaXRsZTogJ+W/q+adpeaJvuS4gOS4quS4reaEj+eahOekvuWbouaKiu+8gScsXG4gICAgICBpY29uOiAnaHR0cHM6Ly9pY29uZm9udC5hbGljZG4uY29tL3MvNWI0YzNiZjQtMzIzYy00NzBjLWE5NDYtNzYzZGIwMzBiZjlmX29yaWdpbi5zdmcnLFxuICAgICAgYnRuVGl0bGU6ICfmiJHopoHmiqXlkI0nLFxuICAgICAgYnRuUGF0aDogJydcbiAgICB9LFxuICB9LFxuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuZ2V0VGFiQmFyID09PSAnZnVuY3Rpb24nICYmIHRoaXMuZ2V0VGFiQmFyKCkpIHtcbiAgICAgIHRoaXMuZ2V0VGFiQmFyKCkuc2V0RGF0YSh7XG4gICAgICAgIHNlbGVjdGVkOiAwXG4gICAgICB9KVxuICAgIH1cbiAgfSxcbiAgZ29XZWxjb21lKCkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiAnL3BhZ2VzL3NvY2lldGllcy93ZWxjb21lL2luZGV4J1xuICAgIH0pXG4gIH0sXG4gIGdvQWxsKCkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiAnL3BhZ2VzL3NvY2lldGllcy9hbGwvaW5kZXgnXG4gICAgfSlcbiAgfVxufSlcbiJdfQ==
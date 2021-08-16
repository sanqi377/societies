"use strict";
var ajax = require('../../utils/util').ajax;
Page({
    data: {
        form: {
            phone: '',
            password: '',
            name: '',
            studentId: '',
            departments: '',
            class: '',
            code: ''
        },
        active: false
    },
    getPhone: function (val) {
        var _a;
        this.setData((_a = {},
            _a['form.phone'] = val.detail,
            _a));
        this.changeActive();
    },
    getPassword: function (val) {
        var _a;
        this.setData((_a = {},
            _a['form.password'] = val.detail,
            _a));
        this.changeActive();
    },
    getName: function (val) {
        var _a;
        this.setData((_a = {},
            _a['form.name'] = val.detail,
            _a));
        this.changeActive();
    },
    getStudentId: function (val) {
        var _a;
        this.setData((_a = {},
            _a['form.studentId'] = val.detail,
            _a));
        this.changeActive();
    },
    getDepartments: function (val) {
        var _a;
        this.setData((_a = {},
            _a['form.departments'] = val.detail,
            _a));
        this.changeActive();
    },
    getClass: function (val) {
        var _a;
        this.setData((_a = {},
            _a['form.class'] = val.detail,
            _a));
        this.changeActive();
    },
    changeActive: function () {
        this.data.form.phone && this.data.form.password && this.data.form.name && this.data.form.studentId && this.data.form.departments && this.data.form.class ? this.setData({ active: true }) : this.setData({ active: false });
    },
    reg: function () {
        var data = this.data.form;
        var _this = this;
        wx.login({
            success: function (res) {
                var _a;
                _this.setData((_a = {},
                    _a['form.code'] = res.code,
                    _a));
                if (res.code) {
                    ajax('http://localhost:3000/index/user/reg', data).then(function (res) {
                        if (res.data.code === 200) {
                            wx.showToast({
                                title: res.data.msg,
                                icon: 'success',
                                duration: 2000,
                                success: function () {
                                    setTimeout(function () {
                                        wx.reLaunch({ url: '/pages/index/index' });
                                    }, 2000);
                                }
                            });
                        }
                    });
                }
                else {
                    console.log('登录失败！' + res.errMsg);
                }
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBTSxJQUFBLElBQUksR0FBSyxPQUFPLENBQUMsa0JBQWtCLENBQUMsS0FBaEMsQ0FBZ0M7QUFDMUMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFO1lBQ0osS0FBSyxFQUFFLEVBQUU7WUFDVCxRQUFRLEVBQUUsRUFBRTtZQUNaLElBQUksRUFBRSxFQUFFO1lBQ1IsU0FBUyxFQUFFLEVBQUU7WUFDYixXQUFXLEVBQUUsRUFBRTtZQUNmLEtBQUssRUFBRSxFQUFFO1lBQ1QsSUFBSSxFQUFFLEVBQUU7U0FDVDtRQUNELE1BQU0sRUFBRSxLQUFLO0tBQ2Q7SUFNRCxRQUFRLEVBQVIsVUFBUyxHQUFROztRQUNmLElBQUksQ0FBQyxPQUFPO1lBQ1YsR0FBQyxZQUFZLElBQUcsR0FBRyxDQUFDLE1BQU07Z0JBQzFCLENBQUE7UUFDRixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDckIsQ0FBQztJQU1ELFdBQVcsRUFBWCxVQUFZLEdBQVE7O1FBQ2xCLElBQUksQ0FBQyxPQUFPO1lBQ1YsR0FBQyxlQUFlLElBQUcsR0FBRyxDQUFDLE1BQU07Z0JBQzdCLENBQUE7UUFDRixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDckIsQ0FBQztJQU1ELE9BQU8sRUFBUCxVQUFRLEdBQVE7O1FBQ2QsSUFBSSxDQUFDLE9BQU87WUFDVixHQUFDLFdBQVcsSUFBRyxHQUFHLENBQUMsTUFBTTtnQkFDekIsQ0FBQTtRQUNGLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBTUQsWUFBWSxFQUFaLFVBQWEsR0FBUTs7UUFDbkIsSUFBSSxDQUFDLE9BQU87WUFDVixHQUFDLGdCQUFnQixJQUFHLEdBQUcsQ0FBQyxNQUFNO2dCQUM5QixDQUFBO1FBQ0YsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUFNRCxjQUFjLEVBQWQsVUFBZSxHQUFROztRQUNyQixJQUFJLENBQUMsT0FBTztZQUNWLEdBQUMsa0JBQWtCLElBQUcsR0FBRyxDQUFDLE1BQU07Z0JBQ2hDLENBQUE7UUFDRixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDckIsQ0FBQztJQU1ELFFBQVEsRUFBUixVQUFTLEdBQVE7O1FBQ2YsSUFBSSxDQUFDLE9BQU87WUFDVixHQUFDLFlBQVksSUFBRyxHQUFHLENBQUMsTUFBTTtnQkFDMUIsQ0FBQTtRQUNGLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBS0QsWUFBWTtRQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQTtJQUM3TixDQUFDO0lBS0QsR0FBRyxFQUFIO1FBQ0UsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUE7UUFDekIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFBO1FBQ2hCLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDUCxPQUFPLEVBQVAsVUFBUSxHQUFHOztnQkFDVCxLQUFLLENBQUMsT0FBTztvQkFDWCxHQUFDLFdBQVcsSUFBRyxHQUFHLENBQUMsSUFBSTt3QkFDdkIsQ0FBQTtnQkFDRixJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUU7b0JBQ1osSUFBSSxDQUFDLHNDQUFzQyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVE7d0JBQy9ELElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssR0FBRyxFQUFFOzRCQUN6QixFQUFFLENBQUMsU0FBUyxDQUFDO2dDQUNYLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUc7Z0NBQ25CLElBQUksRUFBRSxTQUFTO2dDQUNmLFFBQVEsRUFBRSxJQUFJO2dDQUNkLE9BQU8sRUFBRTtvQ0FDUCxVQUFVLENBQUM7d0NBQ1QsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxvQkFBb0IsRUFBRSxDQUFDLENBQUE7b0NBQzVDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtnQ0FDVixDQUFDOzZCQUNGLENBQUMsQ0FBQTt5QkFDSDtvQkFDSCxDQUFDLENBQUMsQ0FBQTtpQkFDSDtxQkFBTTtvQkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7aUJBQ2xDO1lBQ0gsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUVKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgeyBhamF4IH0gPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsJylcblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgZm9ybToge1xuICAgICAgcGhvbmU6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgbmFtZTogJycsXG4gICAgICBzdHVkZW50SWQ6ICcnLFxuICAgICAgZGVwYXJ0bWVudHM6ICcnLFxuICAgICAgY2xhc3M6ICcnLFxuICAgICAgY29kZTogJydcbiAgICB9LFxuICAgIGFjdGl2ZTogZmFsc2VcbiAgfSxcblxuICAvKipcbiAgICog6I635Y+W5omL5py65Y+3XG4gICAqIEBwYXJhbSB2YWwg5omL5py65Y+3XG4gICAqL1xuICBnZXRQaG9uZSh2YWw6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBbJ2Zvcm0ucGhvbmUnXTogdmFsLmRldGFpbFxuICAgIH0pXG4gICAgdGhpcy5jaGFuZ2VBY3RpdmUoKVxuICB9LFxuXG4gIC8qKlxuICAgKiDojrflj5blr4bnoIFcbiAgICogQHBhcmFtIHZhbCDlr4bnoIFcbiAgICovXG4gIGdldFBhc3N3b3JkKHZhbDogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIFsnZm9ybS5wYXNzd29yZCddOiB2YWwuZGV0YWlsXG4gICAgfSlcbiAgICB0aGlzLmNoYW5nZUFjdGl2ZSgpXG4gIH0sXG5cbiAgLyoqXG4gICAqIOiOt+WPluWnk+WQjVxuICAgKiBAcGFyYW0gdmFsIOWnk+WQjVxuICAgKi9cbiAgZ2V0TmFtZSh2YWw6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBbJ2Zvcm0ubmFtZSddOiB2YWwuZGV0YWlsXG4gICAgfSlcbiAgICB0aGlzLmNoYW5nZUFjdGl2ZSgpXG4gIH0sXG5cbiAgLyoqXG4gICAqIOiOt+WPluWtpuWPt1xuICAgKiBAcGFyYW0gdmFsIOWtpuWPt1xuICAgKi9cbiAgZ2V0U3R1ZGVudElkKHZhbDogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIFsnZm9ybS5zdHVkZW50SWQnXTogdmFsLmRldGFpbFxuICAgIH0pXG4gICAgdGhpcy5jaGFuZ2VBY3RpdmUoKVxuICB9LFxuXG4gIC8qKlxuICAgKiDojrflj5bns7vpg6hcbiAgICogQHBhcmFtIHZhbCDns7vpg6hcbiAgICovXG4gIGdldERlcGFydG1lbnRzKHZhbDogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIFsnZm9ybS5kZXBhcnRtZW50cyddOiB2YWwuZGV0YWlsXG4gICAgfSlcbiAgICB0aGlzLmNoYW5nZUFjdGl2ZSgpXG4gIH0sXG5cbiAgLyoqXG4gICAqIOiOt+WPluePree6p1xuICAgKiBAcGFyYW0gdmFsIOePree6p1xuICAgKi9cbiAgZ2V0Q2xhc3ModmFsOiBhbnkpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgWydmb3JtLmNsYXNzJ106IHZhbC5kZXRhaWxcbiAgICB9KVxuICAgIHRoaXMuY2hhbmdlQWN0aXZlKClcbiAgfSxcblxuICAvKipcbiAgICog5pu05pS555m75b2V5oyJ6ZKu54q25oCBXG4gICAqL1xuICBjaGFuZ2VBY3RpdmUoKSB7XG4gICAgdGhpcy5kYXRhLmZvcm0ucGhvbmUgJiYgdGhpcy5kYXRhLmZvcm0ucGFzc3dvcmQgJiYgdGhpcy5kYXRhLmZvcm0ubmFtZSAmJiB0aGlzLmRhdGEuZm9ybS5zdHVkZW50SWQgJiYgdGhpcy5kYXRhLmZvcm0uZGVwYXJ0bWVudHMgJiYgdGhpcy5kYXRhLmZvcm0uY2xhc3MgPyB0aGlzLnNldERhdGEoeyBhY3RpdmU6IHRydWUgfSkgOiB0aGlzLnNldERhdGEoeyBhY3RpdmU6IGZhbHNlIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIOazqOWGjFxuICAgKi9cbiAgcmVnKCkge1xuICAgIGxldCBkYXRhID0gdGhpcy5kYXRhLmZvcm1cbiAgICBsZXQgX3RoaXMgPSB0aGlzXG4gICAgd3gubG9naW4oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgX3RoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgWydmb3JtLmNvZGUnXTogcmVzLmNvZGVcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKHJlcy5jb2RlKSB7XG4gICAgICAgICAgYWpheCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2luZGV4L3VzZXIvcmVnJywgZGF0YSkudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5jb2RlID09PSAyMDApIHtcbiAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogcmVzLmRhdGEubXNnLFxuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd3gucmVMYXVuY2goeyB1cmw6ICcvcGFnZXMvaW5kZXgvaW5kZXgnIH0pXG4gICAgICAgICAgICAgICAgICB9LCAyMDAwKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCfnmbvlvZXlpLHotKXvvIEnICsgcmVzLmVyck1zZylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgfVxufSkiXX0=
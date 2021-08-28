"use strict";
var ajax = require('../../../utils/util').ajax;
Page({
    data: {
        form: {
            phone: 0,
            name: '',
            student_id: '',
            departments: '',
            class: '',
            code: ''
        },
        active: false
    },
    getPhone: function (val) {
        var _a;
        this.setData((_a = {},
            _a['form.phone'] = Number(val.detail),
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
            _a['form.student_id'] = val.detail,
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
        this.data.form.phone && this.data.form.name && this.data.form.student_id && this.data.form.departments && this.data.form.class ? this.setData({ active: true }) : this.setData({ active: false });
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
                    ajax('user/reg', data).then(function (res) {
                        if (res.data.code === 200) {
                            wx.setStorage({
                                key: "token",
                                data: res.data.token,
                                success: function () {
                                    wx.setStorage({
                                        key: "openid",
                                        data: res.data.openid,
                                        success: function () {
                                            setTimeout(function () {
                                                wx.reLaunch({ url: '/pages/index/index/index' });
                                            }, 2000);
                                        }
                                    });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQU0sSUFBQSxJQUFJLEdBQUssT0FBTyxDQUFDLHFCQUFxQixDQUFDLEtBQW5DLENBQW1DO0FBQzdDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLElBQUksRUFBRTtZQUNKLEtBQUssRUFBRSxDQUFDO1lBQ1IsSUFBSSxFQUFFLEVBQUU7WUFDUixVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsS0FBSyxFQUFFLEVBQUU7WUFDVCxJQUFJLEVBQUUsRUFBRTtTQUNUO1FBQ0QsTUFBTSxFQUFFLEtBQUs7S0FDZDtJQU1ELFFBQVEsRUFBUixVQUFTLEdBQVE7O1FBQ2YsSUFBSSxDQUFDLE9BQU87WUFDVixHQUFDLFlBQVksSUFBRyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztnQkFDbEMsQ0FBQTtRQUNGLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBTUQsT0FBTyxFQUFQLFVBQVEsR0FBUTs7UUFDZCxJQUFJLENBQUMsT0FBTztZQUNWLEdBQUMsV0FBVyxJQUFHLEdBQUcsQ0FBQyxNQUFNO2dCQUN6QixDQUFBO1FBQ0YsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUFNRCxZQUFZLEVBQVosVUFBYSxHQUFROztRQUNuQixJQUFJLENBQUMsT0FBTztZQUNWLEdBQUMsaUJBQWlCLElBQUcsR0FBRyxDQUFDLE1BQU07Z0JBQy9CLENBQUE7UUFDRixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDckIsQ0FBQztJQU1ELGNBQWMsRUFBZCxVQUFlLEdBQVE7O1FBQ3JCLElBQUksQ0FBQyxPQUFPO1lBQ1YsR0FBQyxrQkFBa0IsSUFBRyxHQUFHLENBQUMsTUFBTTtnQkFDaEMsQ0FBQTtRQUNGLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBTUQsUUFBUSxFQUFSLFVBQVMsR0FBUTs7UUFDZixJQUFJLENBQUMsT0FBTztZQUNWLEdBQUMsWUFBWSxJQUFHLEdBQUcsQ0FBQyxNQUFNO2dCQUMxQixDQUFBO1FBQ0YsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUFLRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUE7SUFDbk0sQ0FBQztJQUtELEdBQUcsRUFBSDtRQUNFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFBO1FBQ3pCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQTtRQUNoQixFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ1AsT0FBTyxFQUFQLFVBQVEsR0FBRzs7Z0JBQ1QsS0FBSyxDQUFDLE9BQU87b0JBQ1gsR0FBQyxXQUFXLElBQUcsR0FBRyxDQUFDLElBQUk7d0JBQ3ZCLENBQUE7Z0JBQ0YsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFO29CQUNaLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBUTt3QkFDbkMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxHQUFHLEVBQUU7NEJBQ3pCLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0NBQ1osR0FBRyxFQUFFLE9BQU87Z0NBQ1osSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSztnQ0FDcEIsT0FBTyxFQUFFO29DQUNQLEVBQUUsQ0FBQyxVQUFVLENBQUM7d0NBQ1osR0FBRyxFQUFFLFFBQVE7d0NBQ2IsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTTt3Q0FDckIsT0FBTyxFQUFFOzRDQUNQLFVBQVUsQ0FBQztnREFDVCxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxFQUFFLDBCQUEwQixFQUFFLENBQUMsQ0FBQTs0Q0FDbEQsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO3dDQUNWLENBQUM7cUNBQ0YsQ0FBQyxDQUFBO2dDQUNKLENBQUM7NkJBQ0YsQ0FBQyxDQUFBO3lCQUNIO29CQUNILENBQUMsQ0FBQyxDQUFBO2lCQUNIO3FCQUFNO29CQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtpQkFDbEM7WUFDSCxDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBRUosQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbInZhciB7IGFqYXggfSA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxzL3V0aWwnKVxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBmb3JtOiB7XHJcbiAgICAgIHBob25lOiAwLFxyXG4gICAgICBuYW1lOiAnJyxcclxuICAgICAgc3R1ZGVudF9pZDogJycsXHJcbiAgICAgIGRlcGFydG1lbnRzOiAnJyxcclxuICAgICAgY2xhc3M6ICcnLFxyXG4gICAgICBjb2RlOiAnJ1xyXG4gICAgfSxcclxuICAgIGFjdGl2ZTogZmFsc2VcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDojrflj5bmiYvmnLrlj7dcclxuICAgKiBAcGFyYW0gdmFsIOaJi+acuuWPt1xyXG4gICAqL1xyXG4gIGdldFBob25lKHZhbDogYW55KSB7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBbJ2Zvcm0ucGhvbmUnXTogTnVtYmVyKHZhbC5kZXRhaWwpXHJcbiAgICB9KVxyXG4gICAgdGhpcy5jaGFuZ2VBY3RpdmUoKVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOiOt+WPluWnk+WQjVxyXG4gICAqIEBwYXJhbSB2YWwg5aeT5ZCNXHJcbiAgICovXHJcbiAgZ2V0TmFtZSh2YWw6IGFueSkge1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgWydmb3JtLm5hbWUnXTogdmFsLmRldGFpbFxyXG4gICAgfSlcclxuICAgIHRoaXMuY2hhbmdlQWN0aXZlKClcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDojrflj5blrablj7dcclxuICAgKiBAcGFyYW0gdmFsIOWtpuWPt1xyXG4gICAqL1xyXG4gIGdldFN0dWRlbnRJZCh2YWw6IGFueSkge1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgWydmb3JtLnN0dWRlbnRfaWQnXTogdmFsLmRldGFpbFxyXG4gICAgfSlcclxuICAgIHRoaXMuY2hhbmdlQWN0aXZlKClcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDojrflj5bns7vpg6hcclxuICAgKiBAcGFyYW0gdmFsIOezu+mDqFxyXG4gICAqL1xyXG4gIGdldERlcGFydG1lbnRzKHZhbDogYW55KSB7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBbJ2Zvcm0uZGVwYXJ0bWVudHMnXTogdmFsLmRldGFpbFxyXG4gICAgfSlcclxuICAgIHRoaXMuY2hhbmdlQWN0aXZlKClcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDojrflj5bnj63nuqdcclxuICAgKiBAcGFyYW0gdmFsIOePree6p1xyXG4gICAqL1xyXG4gIGdldENsYXNzKHZhbDogYW55KSB7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBbJ2Zvcm0uY2xhc3MnXTogdmFsLmRldGFpbFxyXG4gICAgfSlcclxuICAgIHRoaXMuY2hhbmdlQWN0aXZlKClcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDmm7TmlLnnmbvlvZXmjInpkq7nirbmgIFcclxuICAgKi9cclxuICBjaGFuZ2VBY3RpdmUoKSB7XHJcbiAgICB0aGlzLmRhdGEuZm9ybS5waG9uZSAmJiB0aGlzLmRhdGEuZm9ybS5uYW1lICYmIHRoaXMuZGF0YS5mb3JtLnN0dWRlbnRfaWQgJiYgdGhpcy5kYXRhLmZvcm0uZGVwYXJ0bWVudHMgJiYgdGhpcy5kYXRhLmZvcm0uY2xhc3MgPyB0aGlzLnNldERhdGEoeyBhY3RpdmU6IHRydWUgfSkgOiB0aGlzLnNldERhdGEoeyBhY3RpdmU6IGZhbHNlIH0pXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog5rOo5YaMXHJcbiAgICovXHJcbiAgcmVnKCkge1xyXG4gICAgbGV0IGRhdGEgPSB0aGlzLmRhdGEuZm9ybVxyXG4gICAgbGV0IF90aGlzID0gdGhpc1xyXG4gICAgd3gubG9naW4oe1xyXG4gICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgIF90aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgWydmb3JtLmNvZGUnXTogcmVzLmNvZGVcclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmIChyZXMuY29kZSkge1xyXG4gICAgICAgICAgYWpheCgndXNlci9yZWcnLCBkYXRhKS50aGVuKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuY29kZSA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICBrZXk6IFwidG9rZW5cIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHJlcy5kYXRhLnRva2VuLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6IFwib3BlbmlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVzLmRhdGEub3BlbmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5yZUxhdW5jaCh7IHVybDogJy9wYWdlcy9pbmRleC9pbmRleC9pbmRleCcgfSlcclxuICAgICAgICAgICAgICAgICAgICAgIH0sIDIwMDApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCfnmbvlvZXlpLHotKXvvIEnICsgcmVzLmVyck1zZylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gIH1cclxufSkiXX0=
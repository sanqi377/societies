"use strict";
var ajax = require('../../../utils/util').ajax;
Page({
    data: {
        form: {
            phone: 0,
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
        this.data.form.phone && this.data.form.name && this.data.form.studentId && this.data.form.departments && this.data.form.class ? this.setData({ active: true }) : this.setData({ active: false });
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
                                        wx.reLaunch({ url: '/pages/user/login/index' });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQU0sSUFBQSxJQUFJLEdBQUssT0FBTyxDQUFDLHFCQUFxQixDQUFDLEtBQW5DLENBQW1DO0FBQzdDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLElBQUksRUFBRTtZQUNKLEtBQUssRUFBRSxDQUFDO1lBQ1IsSUFBSSxFQUFFLEVBQUU7WUFDUixTQUFTLEVBQUUsRUFBRTtZQUNiLFdBQVcsRUFBRSxFQUFFO1lBQ2YsS0FBSyxFQUFFLEVBQUU7WUFDVCxJQUFJLEVBQUUsRUFBRTtTQUNUO1FBQ0QsTUFBTSxFQUFFLEtBQUs7S0FDZDtJQU1ELFFBQVEsRUFBUixVQUFTLEdBQVE7O1FBQ2YsSUFBSSxDQUFDLE9BQU87WUFDVixHQUFDLFlBQVksSUFBRyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztnQkFDbEMsQ0FBQTtRQUNGLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBTUQsT0FBTyxFQUFQLFVBQVEsR0FBUTs7UUFDZCxJQUFJLENBQUMsT0FBTztZQUNWLEdBQUMsV0FBVyxJQUFHLEdBQUcsQ0FBQyxNQUFNO2dCQUN6QixDQUFBO1FBQ0YsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUFNRCxZQUFZLEVBQVosVUFBYSxHQUFROztRQUNuQixJQUFJLENBQUMsT0FBTztZQUNWLEdBQUMsZ0JBQWdCLElBQUcsR0FBRyxDQUFDLE1BQU07Z0JBQzlCLENBQUE7UUFDRixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDckIsQ0FBQztJQU1ELGNBQWMsRUFBZCxVQUFlLEdBQVE7O1FBQ3JCLElBQUksQ0FBQyxPQUFPO1lBQ1YsR0FBQyxrQkFBa0IsSUFBRyxHQUFHLENBQUMsTUFBTTtnQkFDaEMsQ0FBQTtRQUNGLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBTUQsUUFBUSxFQUFSLFVBQVMsR0FBUTs7UUFDZixJQUFJLENBQUMsT0FBTztZQUNWLEdBQUMsWUFBWSxJQUFHLEdBQUcsQ0FBQyxNQUFNO2dCQUMxQixDQUFBO1FBQ0YsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUFLRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUE7SUFDbk0sQ0FBQztJQUtELEdBQUcsRUFBSDtRQUNFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFBO1FBQ3pCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQTtRQUNoQixFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ1AsT0FBTyxFQUFQLFVBQVEsR0FBRzs7Z0JBQ1QsS0FBSyxDQUFDLE9BQU87b0JBQ1gsR0FBQyxXQUFXLElBQUcsR0FBRyxDQUFDLElBQUk7d0JBQ3ZCLENBQUE7Z0JBQ0YsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFO29CQUNaLElBQUksQ0FBQyxzQ0FBc0MsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFRO3dCQUMvRCxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFBRTs0QkFDekIsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQ0FDWCxLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHO2dDQUNuQixJQUFJLEVBQUUsU0FBUztnQ0FDZixRQUFRLEVBQUUsSUFBSTtnQ0FDZCxPQUFPLEVBQUU7b0NBQ1AsVUFBVSxDQUFDO3dDQUNULEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLEVBQUUseUJBQXlCLEVBQUUsQ0FBQyxDQUFBO29DQUNqRCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7Z0NBQ1YsQ0FBQzs2QkFDRixDQUFDLENBQUE7eUJBQ0g7b0JBQ0gsQ0FBQyxDQUFDLENBQUE7aUJBQ0g7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO2lCQUNsQztZQUNILENBQUM7U0FDRixDQUFDLENBQUE7SUFFSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHsgYWpheCB9ID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbHMvdXRpbCcpXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIGZvcm06IHtcbiAgICAgIHBob25lOiAwLFxuICAgICAgbmFtZTogJycsXG4gICAgICBzdHVkZW50SWQ6ICcnLFxuICAgICAgZGVwYXJ0bWVudHM6ICcnLFxuICAgICAgY2xhc3M6ICcnLFxuICAgICAgY29kZTogJydcbiAgICB9LFxuICAgIGFjdGl2ZTogZmFsc2VcbiAgfSxcblxuICAvKipcbiAgICog6I635Y+W5omL5py65Y+3XG4gICAqIEBwYXJhbSB2YWwg5omL5py65Y+3XG4gICAqL1xuICBnZXRQaG9uZSh2YWw6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBbJ2Zvcm0ucGhvbmUnXTogTnVtYmVyKHZhbC5kZXRhaWwpXG4gICAgfSlcbiAgICB0aGlzLmNoYW5nZUFjdGl2ZSgpXG4gIH0sXG5cbiAgLyoqXG4gICAqIOiOt+WPluWnk+WQjVxuICAgKiBAcGFyYW0gdmFsIOWnk+WQjVxuICAgKi9cbiAgZ2V0TmFtZSh2YWw6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBbJ2Zvcm0ubmFtZSddOiB2YWwuZGV0YWlsXG4gICAgfSlcbiAgICB0aGlzLmNoYW5nZUFjdGl2ZSgpXG4gIH0sXG5cbiAgLyoqXG4gICAqIOiOt+WPluWtpuWPt1xuICAgKiBAcGFyYW0gdmFsIOWtpuWPt1xuICAgKi9cbiAgZ2V0U3R1ZGVudElkKHZhbDogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIFsnZm9ybS5zdHVkZW50SWQnXTogdmFsLmRldGFpbFxuICAgIH0pXG4gICAgdGhpcy5jaGFuZ2VBY3RpdmUoKVxuICB9LFxuXG4gIC8qKlxuICAgKiDojrflj5bns7vpg6hcbiAgICogQHBhcmFtIHZhbCDns7vpg6hcbiAgICovXG4gIGdldERlcGFydG1lbnRzKHZhbDogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIFsnZm9ybS5kZXBhcnRtZW50cyddOiB2YWwuZGV0YWlsXG4gICAgfSlcbiAgICB0aGlzLmNoYW5nZUFjdGl2ZSgpXG4gIH0sXG5cbiAgLyoqXG4gICAqIOiOt+WPluePree6p1xuICAgKiBAcGFyYW0gdmFsIOePree6p1xuICAgKi9cbiAgZ2V0Q2xhc3ModmFsOiBhbnkpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgWydmb3JtLmNsYXNzJ106IHZhbC5kZXRhaWxcbiAgICB9KVxuICAgIHRoaXMuY2hhbmdlQWN0aXZlKClcbiAgfSxcblxuICAvKipcbiAgICog5pu05pS555m75b2V5oyJ6ZKu54q25oCBXG4gICAqL1xuICBjaGFuZ2VBY3RpdmUoKSB7XG4gICAgdGhpcy5kYXRhLmZvcm0ucGhvbmUgICYmIHRoaXMuZGF0YS5mb3JtLm5hbWUgJiYgdGhpcy5kYXRhLmZvcm0uc3R1ZGVudElkICYmIHRoaXMuZGF0YS5mb3JtLmRlcGFydG1lbnRzICYmIHRoaXMuZGF0YS5mb3JtLmNsYXNzID8gdGhpcy5zZXREYXRhKHsgYWN0aXZlOiB0cnVlIH0pIDogdGhpcy5zZXREYXRhKHsgYWN0aXZlOiBmYWxzZSB9KVxuICB9LFxuXG4gIC8qKlxuICAgKiDms6jlhoxcbiAgICovXG4gIHJlZygpIHtcbiAgICBsZXQgZGF0YSA9IHRoaXMuZGF0YS5mb3JtXG4gICAgbGV0IF90aGlzID0gdGhpc1xuICAgIHd4LmxvZ2luKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIF90aGlzLnNldERhdGEoe1xuICAgICAgICAgIFsnZm9ybS5jb2RlJ106IHJlcy5jb2RlXG4gICAgICAgIH0pXG4gICAgICAgIGlmIChyZXMuY29kZSkge1xuICAgICAgICAgIGFqYXgoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9pbmRleC91c2VyL3JlZycsIGRhdGEpLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuY29kZSA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHJlcy5kYXRhLm1zZyxcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHd4LnJlTGF1bmNoKHsgdXJsOiAnL3BhZ2VzL3VzZXIvbG9naW4vaW5kZXgnIH0pXG4gICAgICAgICAgICAgICAgICB9LCAyMDAwKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCfnmbvlvZXlpLHotKXvvIEnICsgcmVzLmVyck1zZylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgfVxufSkiXX0=
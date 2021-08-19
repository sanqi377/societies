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
                    ajax('http://localhost:3000/index/user/reg', data).then(function (res) {
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
                                                wx.reLaunch({ url: '/pages/index/index' });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQU0sSUFBQSxJQUFJLEdBQUssT0FBTyxDQUFDLHFCQUFxQixDQUFDLEtBQW5DLENBQW1DO0FBQzdDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLElBQUksRUFBRTtZQUNKLEtBQUssRUFBRSxDQUFDO1lBQ1IsSUFBSSxFQUFFLEVBQUU7WUFDUixVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsS0FBSyxFQUFFLEVBQUU7WUFDVCxJQUFJLEVBQUUsRUFBRTtTQUNUO1FBQ0QsTUFBTSxFQUFFLEtBQUs7S0FDZDtJQU1ELFFBQVEsRUFBUixVQUFTLEdBQVE7O1FBQ2YsSUFBSSxDQUFDLE9BQU87WUFDVixHQUFDLFlBQVksSUFBRyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztnQkFDbEMsQ0FBQTtRQUNGLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBTUQsT0FBTyxFQUFQLFVBQVEsR0FBUTs7UUFDZCxJQUFJLENBQUMsT0FBTztZQUNWLEdBQUMsV0FBVyxJQUFHLEdBQUcsQ0FBQyxNQUFNO2dCQUN6QixDQUFBO1FBQ0YsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUFNRCxZQUFZLEVBQVosVUFBYSxHQUFROztRQUNuQixJQUFJLENBQUMsT0FBTztZQUNWLEdBQUMsaUJBQWlCLElBQUcsR0FBRyxDQUFDLE1BQU07Z0JBQy9CLENBQUE7UUFDRixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDckIsQ0FBQztJQU1ELGNBQWMsRUFBZCxVQUFlLEdBQVE7O1FBQ3JCLElBQUksQ0FBQyxPQUFPO1lBQ1YsR0FBQyxrQkFBa0IsSUFBRyxHQUFHLENBQUMsTUFBTTtnQkFDaEMsQ0FBQTtRQUNGLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBTUQsUUFBUSxFQUFSLFVBQVMsR0FBUTs7UUFDZixJQUFJLENBQUMsT0FBTztZQUNWLEdBQUMsWUFBWSxJQUFHLEdBQUcsQ0FBQyxNQUFNO2dCQUMxQixDQUFBO1FBQ0YsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUFLRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUE7SUFDbk0sQ0FBQztJQUtELEdBQUcsRUFBSDtRQUNFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFBO1FBQ3pCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQTtRQUNoQixFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ1AsT0FBTyxFQUFQLFVBQVEsR0FBRzs7Z0JBQ1QsS0FBSyxDQUFDLE9BQU87b0JBQ1gsR0FBQyxXQUFXLElBQUcsR0FBRyxDQUFDLElBQUk7d0JBQ3ZCLENBQUE7Z0JBQ0YsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFO29CQUNaLElBQUksQ0FBQyxzQ0FBc0MsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFRO3dCQUMvRCxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFBRTs0QkFDekIsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQ0FDWixHQUFHLEVBQUUsT0FBTztnQ0FDWixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLO2dDQUNwQixPQUFPLEVBQUU7b0NBQ1AsRUFBRSxDQUFDLFVBQVUsQ0FBQzt3Q0FDWixHQUFHLEVBQUUsUUFBUTt3Q0FDYixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNO3dDQUNyQixPQUFPLEVBQUU7NENBQ1AsVUFBVSxDQUFDO2dEQUNULEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQyxDQUFBOzRDQUM1QyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7d0NBQ1YsQ0FBQztxQ0FDRixDQUFDLENBQUE7Z0NBQ0osQ0FBQzs2QkFDRixDQUFDLENBQUE7eUJBQ0g7b0JBQ0gsQ0FBQyxDQUFDLENBQUE7aUJBQ0g7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO2lCQUNsQztZQUNILENBQUM7U0FDRixDQUFDLENBQUE7SUFFSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHsgYWpheCB9ID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbHMvdXRpbCcpXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIGZvcm06IHtcbiAgICAgIHBob25lOiAwLFxuICAgICAgbmFtZTogJycsXG4gICAgICBzdHVkZW50X2lkOiAnJyxcbiAgICAgIGRlcGFydG1lbnRzOiAnJyxcbiAgICAgIGNsYXNzOiAnJyxcbiAgICAgIGNvZGU6ICcnXG4gICAgfSxcbiAgICBhY3RpdmU6IGZhbHNlXG4gIH0sXG5cbiAgLyoqXG4gICAqIOiOt+WPluaJi+acuuWPt1xuICAgKiBAcGFyYW0gdmFsIOaJi+acuuWPt1xuICAgKi9cbiAgZ2V0UGhvbmUodmFsOiBhbnkpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgWydmb3JtLnBob25lJ106IE51bWJlcih2YWwuZGV0YWlsKVxuICAgIH0pXG4gICAgdGhpcy5jaGFuZ2VBY3RpdmUoKVxuICB9LFxuXG4gIC8qKlxuICAgKiDojrflj5blp5PlkI1cbiAgICogQHBhcmFtIHZhbCDlp5PlkI1cbiAgICovXG4gIGdldE5hbWUodmFsOiBhbnkpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgWydmb3JtLm5hbWUnXTogdmFsLmRldGFpbFxuICAgIH0pXG4gICAgdGhpcy5jaGFuZ2VBY3RpdmUoKVxuICB9LFxuXG4gIC8qKlxuICAgKiDojrflj5blrablj7dcbiAgICogQHBhcmFtIHZhbCDlrablj7dcbiAgICovXG4gIGdldFN0dWRlbnRJZCh2YWw6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBbJ2Zvcm0uc3R1ZGVudF9pZCddOiB2YWwuZGV0YWlsXG4gICAgfSlcbiAgICB0aGlzLmNoYW5nZUFjdGl2ZSgpXG4gIH0sXG5cbiAgLyoqXG4gICAqIOiOt+WPluezu+mDqFxuICAgKiBAcGFyYW0gdmFsIOezu+mDqFxuICAgKi9cbiAgZ2V0RGVwYXJ0bWVudHModmFsOiBhbnkpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgWydmb3JtLmRlcGFydG1lbnRzJ106IHZhbC5kZXRhaWxcbiAgICB9KVxuICAgIHRoaXMuY2hhbmdlQWN0aXZlKClcbiAgfSxcblxuICAvKipcbiAgICog6I635Y+W54+t57qnXG4gICAqIEBwYXJhbSB2YWwg54+t57qnXG4gICAqL1xuICBnZXRDbGFzcyh2YWw6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBbJ2Zvcm0uY2xhc3MnXTogdmFsLmRldGFpbFxuICAgIH0pXG4gICAgdGhpcy5jaGFuZ2VBY3RpdmUoKVxuICB9LFxuXG4gIC8qKlxuICAgKiDmm7TmlLnnmbvlvZXmjInpkq7nirbmgIFcbiAgICovXG4gIGNoYW5nZUFjdGl2ZSgpIHtcbiAgICB0aGlzLmRhdGEuZm9ybS5waG9uZSAmJiB0aGlzLmRhdGEuZm9ybS5uYW1lICYmIHRoaXMuZGF0YS5mb3JtLnN0dWRlbnRfaWQgJiYgdGhpcy5kYXRhLmZvcm0uZGVwYXJ0bWVudHMgJiYgdGhpcy5kYXRhLmZvcm0uY2xhc3MgPyB0aGlzLnNldERhdGEoeyBhY3RpdmU6IHRydWUgfSkgOiB0aGlzLnNldERhdGEoeyBhY3RpdmU6IGZhbHNlIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIOazqOWGjFxuICAgKi9cbiAgcmVnKCkge1xuICAgIGxldCBkYXRhID0gdGhpcy5kYXRhLmZvcm1cbiAgICBsZXQgX3RoaXMgPSB0aGlzXG4gICAgd3gubG9naW4oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgX3RoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgWydmb3JtLmNvZGUnXTogcmVzLmNvZGVcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKHJlcy5jb2RlKSB7XG4gICAgICAgICAgYWpheCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2luZGV4L3VzZXIvcmVnJywgZGF0YSkudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5jb2RlID09PSAyMDApIHtcbiAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XG4gICAgICAgICAgICAgICAga2V5OiBcInRva2VuXCIsXG4gICAgICAgICAgICAgICAgZGF0YTogcmVzLmRhdGEudG9rZW4sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJvcGVuaWRcIixcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVzLmRhdGEub3BlbmlkLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5yZUxhdW5jaCh7IHVybDogJy9wYWdlcy9pbmRleC9pbmRleCcgfSlcbiAgICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCfnmbvlvZXlpLHotKXvvIEnICsgcmVzLmVyck1zZylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgfVxufSkiXX0=
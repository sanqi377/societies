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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQU0sSUFBQSxJQUFJLEdBQUssT0FBTyxDQUFDLHFCQUFxQixDQUFDLEtBQW5DLENBQW1DO0FBQzdDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLElBQUksRUFBRTtZQUNKLEtBQUssRUFBRSxDQUFDO1lBQ1IsSUFBSSxFQUFFLEVBQUU7WUFDUixVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsS0FBSyxFQUFFLEVBQUU7WUFDVCxJQUFJLEVBQUUsRUFBRTtTQUNUO1FBQ0QsTUFBTSxFQUFFLEtBQUs7S0FDZDtJQU1ELFFBQVEsRUFBUixVQUFTLEdBQVE7O1FBQ2YsSUFBSSxDQUFDLE9BQU87WUFDVixHQUFDLFlBQVksSUFBRyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztnQkFDbEMsQ0FBQTtRQUNGLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBTUQsT0FBTyxFQUFQLFVBQVEsR0FBUTs7UUFDZCxJQUFJLENBQUMsT0FBTztZQUNWLEdBQUMsV0FBVyxJQUFHLEdBQUcsQ0FBQyxNQUFNO2dCQUN6QixDQUFBO1FBQ0YsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUFNRCxZQUFZLEVBQVosVUFBYSxHQUFROztRQUNuQixJQUFJLENBQUMsT0FBTztZQUNWLEdBQUMsaUJBQWlCLElBQUcsR0FBRyxDQUFDLE1BQU07Z0JBQy9CLENBQUE7UUFDRixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDckIsQ0FBQztJQU1ELGNBQWMsRUFBZCxVQUFlLEdBQVE7O1FBQ3JCLElBQUksQ0FBQyxPQUFPO1lBQ1YsR0FBQyxrQkFBa0IsSUFBRyxHQUFHLENBQUMsTUFBTTtnQkFDaEMsQ0FBQTtRQUNGLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBTUQsUUFBUSxFQUFSLFVBQVMsR0FBUTs7UUFDZixJQUFJLENBQUMsT0FBTztZQUNWLEdBQUMsWUFBWSxJQUFHLEdBQUcsQ0FBQyxNQUFNO2dCQUMxQixDQUFBO1FBQ0YsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUFLRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUE7SUFDbk0sQ0FBQztJQUtELEdBQUcsRUFBSDtRQUNFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFBO1FBQ3pCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQTtRQUNoQixFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ1AsT0FBTyxFQUFQLFVBQVEsR0FBRzs7Z0JBQ1QsS0FBSyxDQUFDLE9BQU87b0JBQ1gsR0FBQyxXQUFXLElBQUcsR0FBRyxDQUFDLElBQUk7d0JBQ3ZCLENBQUE7Z0JBQ0YsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFO29CQUNaLElBQUksQ0FBQyxzQ0FBc0MsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFRO3dCQUMvRCxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFBRTs0QkFDekIsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQ0FDWixHQUFHLEVBQUUsT0FBTztnQ0FDWixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLO2dDQUNwQixPQUFPLEVBQUU7b0NBQ1AsRUFBRSxDQUFDLFVBQVUsQ0FBQzt3Q0FDWixHQUFHLEVBQUUsUUFBUTt3Q0FDYixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNO3dDQUNyQixPQUFPLEVBQUU7NENBQ1AsVUFBVSxDQUFDO2dEQUNULEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQyxDQUFBOzRDQUM1QyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7d0NBQ1YsQ0FBQztxQ0FDRixDQUFDLENBQUE7Z0NBQ0osQ0FBQzs2QkFDRixDQUFDLENBQUE7eUJBQ0g7b0JBQ0gsQ0FBQyxDQUFDLENBQUE7aUJBQ0g7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO2lCQUNsQztZQUNILENBQUM7U0FDRixDQUFDLENBQUE7SUFFSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHsgYWpheCB9ID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbHMvdXRpbCcpXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIGZvcm06IHtcclxuICAgICAgcGhvbmU6IDAsXHJcbiAgICAgIG5hbWU6ICcnLFxyXG4gICAgICBzdHVkZW50X2lkOiAnJyxcclxuICAgICAgZGVwYXJ0bWVudHM6ICcnLFxyXG4gICAgICBjbGFzczogJycsXHJcbiAgICAgIGNvZGU6ICcnXHJcbiAgICB9LFxyXG4gICAgYWN0aXZlOiBmYWxzZVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOiOt+WPluaJi+acuuWPt1xyXG4gICAqIEBwYXJhbSB2YWwg5omL5py65Y+3XHJcbiAgICovXHJcbiAgZ2V0UGhvbmUodmFsOiBhbnkpIHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIFsnZm9ybS5waG9uZSddOiBOdW1iZXIodmFsLmRldGFpbClcclxuICAgIH0pXHJcbiAgICB0aGlzLmNoYW5nZUFjdGl2ZSgpXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6I635Y+W5aeT5ZCNXHJcbiAgICogQHBhcmFtIHZhbCDlp5PlkI1cclxuICAgKi9cclxuICBnZXROYW1lKHZhbDogYW55KSB7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBbJ2Zvcm0ubmFtZSddOiB2YWwuZGV0YWlsXHJcbiAgICB9KVxyXG4gICAgdGhpcy5jaGFuZ2VBY3RpdmUoKVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOiOt+WPluWtpuWPt1xyXG4gICAqIEBwYXJhbSB2YWwg5a2m5Y+3XHJcbiAgICovXHJcbiAgZ2V0U3R1ZGVudElkKHZhbDogYW55KSB7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBbJ2Zvcm0uc3R1ZGVudF9pZCddOiB2YWwuZGV0YWlsXHJcbiAgICB9KVxyXG4gICAgdGhpcy5jaGFuZ2VBY3RpdmUoKVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOiOt+WPluezu+mDqFxyXG4gICAqIEBwYXJhbSB2YWwg57O76YOoXHJcbiAgICovXHJcbiAgZ2V0RGVwYXJ0bWVudHModmFsOiBhbnkpIHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIFsnZm9ybS5kZXBhcnRtZW50cyddOiB2YWwuZGV0YWlsXHJcbiAgICB9KVxyXG4gICAgdGhpcy5jaGFuZ2VBY3RpdmUoKVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOiOt+WPluePree6p1xyXG4gICAqIEBwYXJhbSB2YWwg54+t57qnXHJcbiAgICovXHJcbiAgZ2V0Q2xhc3ModmFsOiBhbnkpIHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIFsnZm9ybS5jbGFzcyddOiB2YWwuZGV0YWlsXHJcbiAgICB9KVxyXG4gICAgdGhpcy5jaGFuZ2VBY3RpdmUoKVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOabtOaUueeZu+W9leaMiemSrueKtuaAgVxyXG4gICAqL1xyXG4gIGNoYW5nZUFjdGl2ZSgpIHtcclxuICAgIHRoaXMuZGF0YS5mb3JtLnBob25lICYmIHRoaXMuZGF0YS5mb3JtLm5hbWUgJiYgdGhpcy5kYXRhLmZvcm0uc3R1ZGVudF9pZCAmJiB0aGlzLmRhdGEuZm9ybS5kZXBhcnRtZW50cyAmJiB0aGlzLmRhdGEuZm9ybS5jbGFzcyA/IHRoaXMuc2V0RGF0YSh7IGFjdGl2ZTogdHJ1ZSB9KSA6IHRoaXMuc2V0RGF0YSh7IGFjdGl2ZTogZmFsc2UgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDms6jlhoxcclxuICAgKi9cclxuICByZWcoKSB7XHJcbiAgICBsZXQgZGF0YSA9IHRoaXMuZGF0YS5mb3JtXHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzXHJcbiAgICB3eC5sb2dpbih7XHJcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgX3RoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbJ2Zvcm0uY29kZSddOiByZXMuY29kZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKHJlcy5jb2RlKSB7XHJcbiAgICAgICAgICBhamF4KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvaW5kZXgvdXNlci9yZWcnLCBkYXRhKS50aGVuKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuY29kZSA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICBrZXk6IFwidG9rZW5cIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHJlcy5kYXRhLnRva2VuLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6IFwib3BlbmlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVzLmRhdGEub3BlbmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5yZUxhdW5jaCh7IHVybDogJy9wYWdlcy9pbmRleC9pbmRleCcgfSlcclxuICAgICAgICAgICAgICAgICAgICAgIH0sIDIwMDApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCfnmbvlvZXlpLHotKXvvIEnICsgcmVzLmVyck1zZylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gIH1cclxufSkiXX0=
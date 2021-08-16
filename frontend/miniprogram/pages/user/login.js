"use strict";
var ajax = require('../../utils/util').ajax;
Page({
    data: {
        form: {
            phone: '',
            password: '',
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
    changeActive: function () {
        this.data.form.phone && this.data.form.password ? this.setData({ active: true }) : this.setData({ active: false });
    },
    login: function () {
        var data = this.data.form;
        var _this = this;
        wx.getUserProfile({
            desc: '用于完善会员资料',
            success: function (res) {
                var userInfo = res.userInfo;
                wx.setStorage({
                    key: "userInfo",
                    data: userInfo
                });
                wx.login({
                    success: function (res) {
                        var _a;
                        _this.setData((_a = {},
                            _a['form.code'] = res.code,
                            _a));
                        if (res.code) {
                            ajax('http://localhost:3000/index/user/login', data).then(function (res) {
                                var code = res.data.code;
                                if (code === 201)
                                    wx.reLaunch({ url: '/pages/user/reg' });
                            });
                        }
                        else {
                            console.log('登录失败！' + res.errMsg);
                        }
                    }
                });
            },
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQU0sSUFBQSxJQUFJLEdBQUssT0FBTyxDQUFDLGtCQUFrQixDQUFDLEtBQWhDLENBQWdDO0FBQzFDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLElBQUksRUFBRTtZQUNKLEtBQUssRUFBRSxFQUFFO1lBQ1QsUUFBUSxFQUFFLEVBQUU7WUFDWixJQUFJLEVBQUUsRUFBRTtTQUNUO1FBQ0QsTUFBTSxFQUFFLEtBQUs7S0FDZDtJQU1ELFFBQVEsRUFBUixVQUFTLEdBQVE7O1FBQ2YsSUFBSSxDQUFDLE9BQU87WUFDVixHQUFDLFlBQVksSUFBRyxHQUFHLENBQUMsTUFBTTtnQkFDMUIsQ0FBQTtRQUNGLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBTUQsV0FBVyxFQUFYLFVBQVksR0FBUTs7UUFDbEIsSUFBSSxDQUFDLE9BQU87WUFDVixHQUFDLGVBQWUsSUFBRyxHQUFHLENBQUMsTUFBTTtnQkFDN0IsQ0FBQTtRQUNGLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBS0QsWUFBWTtRQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFBO0lBQ3BILENBQUM7SUFLRCxLQUFLLEVBQUw7UUFDRSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQTtRQUN6QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUE7UUFDaEIsRUFBRSxDQUFDLGNBQWMsQ0FBQztZQUNoQixJQUFJLEVBQUUsVUFBVTtZQUNoQixPQUFPLEVBQUUsVUFBQyxHQUFHO2dCQUNYLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUE7Z0JBQzNCLEVBQUUsQ0FBQyxVQUFVLENBQUM7b0JBQ1osR0FBRyxFQUFFLFVBQVU7b0JBQ2YsSUFBSSxFQUFFLFFBQVE7aUJBQ2YsQ0FBQyxDQUFBO2dCQUNGLEVBQUUsQ0FBQyxLQUFLLENBQUM7b0JBQ1AsT0FBTyxFQUFQLFVBQVEsR0FBRzs7d0JBQ1QsS0FBSyxDQUFDLE9BQU87NEJBQ1gsR0FBQyxXQUFXLElBQUcsR0FBRyxDQUFDLElBQUk7Z0NBQ3ZCLENBQUE7d0JBQ0YsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFOzRCQUNaLElBQUksQ0FBQyx3Q0FBd0MsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFRO2dDQUNqRSxJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQTtnQ0FDeEIsSUFBSSxJQUFJLEtBQUssR0FBRztvQ0FBRSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxFQUFFLGlCQUFpQixFQUFFLENBQUMsQ0FBQTs0QkFDM0QsQ0FBQyxDQUFDLENBQUE7eUJBQ0g7NkJBQU07NEJBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO3lCQUNsQztvQkFDSCxDQUFDO2lCQUNGLENBQUMsQ0FBQTtZQUNKLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHsgYWpheCB9ID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbCcpXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIGZvcm06IHtcclxuICAgICAgcGhvbmU6ICcnLFxyXG4gICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgIGNvZGU6ICcnXHJcbiAgICB9LFxyXG4gICAgYWN0aXZlOiBmYWxzZVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOiOt+WPluaJi+acuuWPt1xyXG4gICAqIEBwYXJhbSB2YWwg5omL5py65Y+3XHJcbiAgICovXHJcbiAgZ2V0UGhvbmUodmFsOiBhbnkpIHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIFsnZm9ybS5waG9uZSddOiB2YWwuZGV0YWlsXHJcbiAgICB9KVxyXG4gICAgdGhpcy5jaGFuZ2VBY3RpdmUoKVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOiOt+WPluWvhueggVxyXG4gICAqIEBwYXJhbSB2YWwg5a+G56CBXHJcbiAgICovXHJcbiAgZ2V0UGFzc3dvcmQodmFsOiBhbnkpIHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIFsnZm9ybS5wYXNzd29yZCddOiB2YWwuZGV0YWlsXHJcbiAgICB9KVxyXG4gICAgdGhpcy5jaGFuZ2VBY3RpdmUoKVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOabtOaUueeZu+W9leaMiemSrueKtuaAgVxyXG4gICAqL1xyXG4gIGNoYW5nZUFjdGl2ZSgpIHtcclxuICAgIHRoaXMuZGF0YS5mb3JtLnBob25lICYmIHRoaXMuZGF0YS5mb3JtLnBhc3N3b3JkID8gdGhpcy5zZXREYXRhKHsgYWN0aXZlOiB0cnVlIH0pIDogdGhpcy5zZXREYXRhKHsgYWN0aXZlOiBmYWxzZSB9KVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeZu+W9lSBhbmQg5rOo5YaMXHJcbiAgICovXHJcbiAgbG9naW4oKSB7XHJcbiAgICBsZXQgZGF0YSA9IHRoaXMuZGF0YS5mb3JtXHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzXHJcbiAgICB3eC5nZXRVc2VyUHJvZmlsZSh7XHJcbiAgICAgIGRlc2M6ICfnlKjkuo7lrozlloTkvJrlkZjotYTmlpknLFxyXG4gICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgbGV0IHVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXHJcbiAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICBrZXk6IFwidXNlckluZm9cIixcclxuICAgICAgICAgIGRhdGE6IHVzZXJJbmZvXHJcbiAgICAgICAgfSlcclxuICAgICAgICB3eC5sb2dpbih7XHJcbiAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICBfdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICBbJ2Zvcm0uY29kZSddOiByZXMuY29kZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpZiAocmVzLmNvZGUpIHtcclxuICAgICAgICAgICAgICBhamF4KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvaW5kZXgvdXNlci9sb2dpbicsIGRhdGEpLnRoZW4oKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29kZSA9IHJlcy5kYXRhLmNvZGVcclxuICAgICAgICAgICAgICAgIGlmIChjb2RlID09PSAyMDEpIHd4LnJlTGF1bmNoKHsgdXJsOiAnL3BhZ2VzL3VzZXIvcmVnJyB9KVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eZu+W9leWksei0pe+8gScgKyByZXMuZXJyTXNnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgfVxyXG59KSJdfQ==
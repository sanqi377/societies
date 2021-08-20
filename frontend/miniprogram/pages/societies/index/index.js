"use strict";
var ajax = require('../../../utils/util').ajax;
Page({
    data: {
        list: {}
    },
    onShow: function () {
        if (typeof this.getTabBar === 'function' && this.getTabBar()) {
            this.getTabBar().setData({
                selected: 1
            });
        }
    },
    getSocieties: function () {
        var _this = this;
        ajax('http://localhost:3000/index/societies/getSocieties').then(function (res) {
            if (res.data.ret === 200) {
                _this.setData({
                    list: res.data.data
                });
            }
        });
    },
    jumpDetails: function (e) {
        var id = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: '/pages/societies/info/index?id=' + id
        });
        console.log(id);
    },
    onLoad: function () {
    },
    onReady: function () {
    },
    onHide: function () {
    },
    onUnload: function () {
    },
    onPullDownRefresh: function () {
    },
    onReachBottom: function () {
    },
    onShareAppMessage: function () {
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQU0sSUFBQSxJQUFJLEdBQUssT0FBTyxDQUFDLHFCQUFxQixDQUFDLEtBQW5DLENBQW1DO0FBQzdDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxFQUFFO0tBQ1Q7SUFFRCxNQUFNLEVBQUU7UUFDTixJQUFJLE9BQU8sSUFBSSxDQUFDLFNBQVMsS0FBSyxVQUFVLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQzVELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQ3ZCLFFBQVEsRUFBRSxDQUFDO2FBQ1osQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBS0QsWUFBWSxFQUFaO1FBQ0UsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxvREFBb0QsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVE7WUFDdkUsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQUU7Z0JBQ3hCLEtBQUssQ0FBQyxPQUFPLENBQUM7b0JBQ1osSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtpQkFDcEIsQ0FBQyxDQUFBO2FBQ0g7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxXQUFXLEVBQVgsVUFBWSxDQUFNO1FBQ2hCLElBQUksRUFBRSxHQUFXLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQTtRQUMzQyxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLGlDQUFpQyxHQUFHLEVBQUU7U0FDNUMsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUNqQixDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxPQUFPO0lBRVAsQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsUUFBUTtJQUVSLENBQUM7SUFLRCxpQkFBaUI7SUFFakIsQ0FBQztJQUtELGFBQWE7SUFFYixDQUFDO0lBS0QsaUJBQWlCO0lBRWpCLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgeyBhamF4IH0gPSByZXF1aXJlKCcuLi8uLi8uLi91dGlscy91dGlsJylcblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgbGlzdDoge31cbiAgfSxcblxuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuZ2V0VGFiQmFyID09PSAnZnVuY3Rpb24nICYmIHRoaXMuZ2V0VGFiQmFyKCkpIHtcbiAgICAgIHRoaXMuZ2V0VGFiQmFyKCkuc2V0RGF0YSh7XG4gICAgICAgIHNlbGVjdGVkOiAxXG4gICAgICB9KVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICog6I635Y+W56S+5Zui5YiX6KGoXG4gICAqL1xuICBnZXRTb2NpZXRpZXMoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpc1xuICAgIGFqYXgoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9pbmRleC9zb2NpZXRpZXMvZ2V0U29jaWV0aWVzJykudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgIGlmIChyZXMuZGF0YS5yZXQgPT09IDIwMCkge1xuICAgICAgICBfdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBsaXN0OiByZXMuZGF0YS5kYXRhXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICBqdW1wRGV0YWlscyhlOiBhbnkpIHtcbiAgICB2YXIgaWQ6IG51bWJlciA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkXG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6ICcvcGFnZXMvc29jaWV0aWVzL2luZm8vaW5kZXg/aWQ9JyArIGlkXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyhpZClcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cbiAgICovXG4gIG9uTG9hZCgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuICAgKi9cbiAgb25SZWFkeSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xuICAgKi9cbiAgb25IaWRlKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG4gICAqL1xuICBvblVubG9hZCgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgKi9cbiAgb25QdWxsRG93blJlZnJlc2goKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXG4gICAqL1xuICBvblJlYWNoQm90dG9tKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUqOaIt+eCueWHu+WPs+S4iuinkuWIhuS6q1xuICAgKi9cbiAgb25TaGFyZUFwcE1lc3NhZ2UoKSB7XG5cbiAgfVxufSkiXX0=
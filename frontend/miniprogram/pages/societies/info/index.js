"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var id;
var ajax = require('../../../utils/util').ajax;
var $Notify = require('@sanqi377/qui/s-notify/notify').$Notify;
var $Dialog = require('@sanqi377/qui/s-dialog/dialog').$Dialog;
var app = getApp();
Page({
    data: {
        info: {
            fans: false
        }
    },
    back: function () {
        wx.navigateBack({
            delta: 1
        });
    },
    subscribe: function (e) {
        var _this_1 = this;
        var data = {
            subscribe: app.globalData.uid,
            be_subscribe: e.currentTarget.dataset.be_subscribe,
            update_time: Date.parse(new Date()) / 1000
        };
        app.globalData.subscribe(data).then(function () {
            _this_1.data.info.fans = true;
            _this_1.setData({
                info: _this_1.data.info
            });
        });
    },
    cancelSubscribe: function (e) {
        var _this_1 = this;
        var data = {
            subscribe: app.globalData.uid,
            be_subscribe: e.currentTarget.dataset.be_subscribe,
        };
        $Dialog({
            title: '温馨提示',
            message: '你确定要取消关注吗？',
            showCancelButton: true
        }).then(function () {
            ajax('http://localhost:3000/index/user/cancelSubscribe', data).then(function (res) {
                if (res.data.ret === 200) {
                    $Notify({
                        type: 'success',
                        content: res.data.msg
                    });
                }
                else {
                    $Notify({
                        type: 'error',
                        content: res.data.msg
                    });
                }
                _this_1.data.info.fans = false;
                _this_1.setData({
                    info: _this_1.data.info
                });
            });
        }).catch(function () {
            console.log("点击取消按钮回调");
        });
    },
    getSocietiesInfo: function () {
        var _this = this;
        ajax('http://localhost:3000/index/societies/getSocietiesInfo', { id: id, uid: app.globalData.uid }).then(function (res) {
            if (res.data.ret === 200) {
                _this.setData({
                    info: res.data.data
                });
            }
        });
    },
    onLoad: function (e) {
        id = Number(e.id);
    },
    onReady: function () {
        this.getSocietiesInfo();
    },
    onShow: function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLElBQUksRUFBVSxDQUFBO0FBQ04sSUFBQSxJQUFJLEdBQUssT0FBTyxDQUFDLHFCQUFxQixDQUFDLEtBQW5DLENBQW1DO0FBQ3ZDLElBQUEsT0FBTyxHQUFLLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxRQUE3QyxDQUE2QztBQUNwRCxJQUFBLE9BQU8sR0FBSyxPQUFPLENBQUMsK0JBQStCLENBQUMsUUFBN0MsQ0FBNkM7QUFDNUQsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUE7QUFDcEIsSUFBSSxDQUFDO0lBS0gsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFLEtBQUs7U0FDWjtLQUNGO0lBSUQsSUFBSTtRQUNGLEVBQUUsQ0FBQyxZQUFZLENBQUM7WUFDZCxLQUFLLEVBQUUsQ0FBQztTQUNULENBQUMsQ0FBQTtJQUNKLENBQUM7SUFLRCxTQUFTLEVBQVQsVUFBVSxDQUFNO1FBQWhCLG1CQVlDO1FBWEMsSUFBSSxJQUFJLEdBQUc7WUFDVCxTQUFTLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHO1lBQzdCLFlBQVksRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxZQUFZO1lBQ2xELFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFFLElBQUksSUFBSSxFQUFVLENBQUMsR0FBRyxJQUFJO1NBQ3BELENBQUE7UUFDRCxHQUFHLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDbEMsT0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtZQUMxQixPQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLElBQUksRUFBRSxPQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDckIsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBTUQsZUFBZSxFQUFmLFVBQWdCLENBQU07UUFBdEIsbUJBOEJDO1FBN0JDLElBQUksSUFBSSxHQUFHO1lBQ1QsU0FBUyxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRztZQUM3QixZQUFZLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsWUFBWTtTQUNuRCxDQUFBO1FBQ0QsT0FBTyxDQUFDO1lBQ04sS0FBSyxFQUFFLE1BQU07WUFDYixPQUFPLEVBQUUsWUFBWTtZQUNyQixnQkFBZ0IsRUFBRSxJQUFJO1NBQ3ZCLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDTixJQUFJLENBQUMsa0RBQWtELEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBUTtnQkFDM0UsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQUU7b0JBQ3hCLE9BQU8sQ0FBQzt3QkFDTixJQUFJLEVBQUUsU0FBUzt3QkFDZixPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHO3FCQUN0QixDQUFDLENBQUE7aUJBQ0g7cUJBQU07b0JBQ0wsT0FBTyxDQUFDO3dCQUNOLElBQUksRUFBRSxPQUFPO3dCQUNiLE9BQU8sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUc7cUJBQ3RCLENBQUMsQ0FBQTtpQkFDSDtnQkFDRCxPQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFBO2dCQUMzQixPQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLElBQUksRUFBRSxPQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7aUJBQ3JCLENBQUMsQ0FBQTtZQUNKLENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUN6QixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFLRCxnQkFBZ0IsRUFBaEI7UUFDRSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUE7UUFDaEIsSUFBSSxDQUFDLHdEQUF3RCxFQUFFLEVBQUUsRUFBRSxJQUFBLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFRO1lBQzVHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFFO2dCQUN4QixLQUFLLENBQUMsT0FBTyxDQUFDO29CQUNaLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7aUJBQ3BCLENBQUMsQ0FBQTthQUNIO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBS0QsTUFBTSxZQUFDLENBQUM7UUFDTixFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUNuQixDQUFDO0lBS0QsT0FBTztRQUNMLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO0lBQ3pCLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsUUFBUTtJQUVSLENBQUM7SUFLRCxpQkFBaUI7SUFFakIsQ0FBQztJQUtELGFBQWE7SUFFYixDQUFDO0lBS0QsaUJBQWlCO0lBRWpCLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyB9XHJcbnZhciBpZDogbnVtYmVyXHJcbmNvbnN0IHsgYWpheCB9ID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbHMvdXRpbCcpXHJcbmNvbnN0IHsgJE5vdGlmeSB9ID0gcmVxdWlyZSgnQHNhbnFpMzc3L3F1aS9zLW5vdGlmeS9ub3RpZnknKVxyXG5jb25zdCB7ICREaWFsb2cgfSA9IHJlcXVpcmUoJ0BzYW5xaTM3Ny9xdWkvcy1kaWFsb2cvZGlhbG9nJylcclxuY29uc3QgYXBwID0gZ2V0QXBwKClcclxuUGFnZSh7XHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxyXG4gICAqL1xyXG4gIGRhdGE6IHtcclxuICAgIGluZm86IHtcclxuICAgICAgZmFuczogZmFsc2VcclxuICAgIH1cclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIOi/lOWbnuS4iuS4gOmhtVxyXG4gICAqL1xyXG4gIGJhY2soKSB7XHJcbiAgICB3eC5uYXZpZ2F0ZUJhY2soe1xyXG4gICAgICBkZWx0YTogMVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDlhbPms6jnpL7lm6JcclxuICAgKi9cclxuICBzdWJzY3JpYmUoZTogYW55KSB7XHJcbiAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgc3Vic2NyaWJlOiBhcHAuZ2xvYmFsRGF0YS51aWQsXHJcbiAgICAgIGJlX3N1YnNjcmliZTogZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuYmVfc3Vic2NyaWJlLFxyXG4gICAgICB1cGRhdGVfdGltZTogRGF0ZS5wYXJzZSgobmV3IERhdGUoKSBhcyBhbnkpKSAvIDEwMDBcclxuICAgIH1cclxuICAgIGFwcC5nbG9iYWxEYXRhLnN1YnNjcmliZShkYXRhKS50aGVuKCgpID0+IHtcclxuICAgICAgdGhpcy5kYXRhLmluZm8uZmFucyA9IHRydWVcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBpbmZvOiB0aGlzLmRhdGEuaW5mb1xyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDlj5bmtojlhbPms6hcclxuICAgKi9cclxuXHJcbiAgY2FuY2VsU3Vic2NyaWJlKGU6IGFueSkge1xyXG4gICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgIHN1YnNjcmliZTogYXBwLmdsb2JhbERhdGEudWlkLFxyXG4gICAgICBiZV9zdWJzY3JpYmU6IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmJlX3N1YnNjcmliZSxcclxuICAgIH1cclxuICAgICREaWFsb2coe1xyXG4gICAgICB0aXRsZTogJ+a4qemmqOaPkOekuicsXHJcbiAgICAgIG1lc3NhZ2U6ICfkvaDnoa7lrpropoHlj5bmtojlhbPms6jlkJfvvJ8nLFxyXG4gICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlXHJcbiAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgYWpheCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2luZGV4L3VzZXIvY2FuY2VsU3Vic2NyaWJlJywgZGF0YSkudGhlbigocmVzOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAocmVzLmRhdGEucmV0ID09PSAyMDApIHtcclxuICAgICAgICAgICROb3RpZnkoe1xyXG4gICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHJlcy5kYXRhLm1zZ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJE5vdGlmeSh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHJlcy5kYXRhLm1zZ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kYXRhLmluZm8uZmFucyA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIGluZm86IHRoaXMuZGF0YS5pbmZvXHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCLngrnlh7vlj5bmtojmjInpkq7lm57osINcIilcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6I635Y+W56S+5Zui5Z+65pys5L+h5oGvXHJcbiAgICovXHJcbiAgZ2V0U29jaWV0aWVzSW5mbygpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXNcclxuICAgIGFqYXgoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9pbmRleC9zb2NpZXRpZXMvZ2V0U29jaWV0aWVzSW5mbycsIHsgaWQsIHVpZDogYXBwLmdsb2JhbERhdGEudWlkIH0pLnRoZW4oKHJlczogYW55KSA9PiB7XHJcbiAgICAgIGlmIChyZXMuZGF0YS5yZXQgPT09IDIwMCkge1xyXG4gICAgICAgIF90aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgaW5mbzogcmVzLmRhdGEuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cclxuICAgKi9cclxuICBvbkxvYWQoZSkge1xyXG4gICAgaWQgPSBOdW1iZXIoZS5pZClcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxyXG4gICAqL1xyXG4gIG9uUmVhZHkoKSB7XHJcbiAgICB0aGlzLmdldFNvY2lldGllc0luZm8oKVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XHJcbiAgICovXHJcbiAgb25TaG93KCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xyXG4gICAqL1xyXG4gIG9uSGlkZSgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cclxuICAgKi9cclxuICBvblVubG9hZCgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcclxuICAgKi9cclxuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXHJcbiAgICovXHJcbiAgb25SZWFjaEJvdHRvbSgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55So5oi354K55Ye75Y+z5LiK6KeS5YiG5LqrXHJcbiAgICovXHJcbiAgb25TaGFyZUFwcE1lc3NhZ2UoKSB7XHJcblxyXG4gIH1cclxufSkiXX0=
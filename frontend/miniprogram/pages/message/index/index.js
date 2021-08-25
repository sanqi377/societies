"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _a = require('../../../utils/util'), getFont = _a.getFont, ajax = _a.ajax;
var wlecome = getApp().globalData.wlecome;
Page({
    data: {
        list: [],
        uid: 0
    },
    goChat: function (e) {
        var send = e.currentTarget.dataset.send;
        var accept = e.currentTarget.dataset.accept;
        wx.navigateTo({
            url: "/pages/message/chat/index?send=" + send + "&accept=" + accept
        });
    },
    onLoad: function (e) {
        var _this = this;
        this.setData({
            uid: e.uid
        });
        getFont();
        ajax('http://localhost:3000/index/message/getSession', { uid: e.uid }).then(function (res) {
            _this.setData({
                list: res.data.data
            });
        });
    },
    onReady: function () {
        wlecome({ send: this.data.uid, type: 'welcome' });
    },
    onShow: function () {
        if (typeof this.getTabBar === 'function' && this.getTabBar()) {
            this.getTabBar().setData({
                selected: 2
            });
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNNLElBQUEsS0FBb0IsT0FBTyxDQUFDLHFCQUFxQixDQUFDLEVBQWhELE9BQU8sYUFBQSxFQUFFLElBQUksVUFBbUMsQ0FBQTtBQUNoRCxJQUFBLE9BQU8sR0FBSyxNQUFNLEVBQUUsQ0FBQyxVQUFVLFFBQXhCLENBQXdCO0FBQ3ZDLElBQUksQ0FBQztJQUtILElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxFQUFFO1FBQ1IsR0FBRyxFQUFFLENBQUM7S0FDUDtJQUtELE1BQU0sRUFBTixVQUFPLENBQU07UUFDWCxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUE7UUFDdkMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFBO1FBQzNDLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsb0NBQWtDLElBQUksZ0JBQVcsTUFBUTtTQUMvRCxDQUFDLENBQUE7SUFDSixDQUFDO0lBS0QsTUFBTSxFQUFOLFVBQU8sQ0FBQztRQUNOLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQTtRQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFVO1NBQ2xCLENBQUMsQ0FBQTtRQUlGLE9BQU8sRUFBRSxDQUFBO1FBS1QsSUFBSSxDQUFDLGdEQUFnRCxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVE7WUFDbkYsS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFDWixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQ3BCLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBR0osQ0FBQztJQUtELE9BQU87UUFDTCxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUE7SUFDbkQsQ0FBQztJQUtELE1BQU07UUFDSixJQUFJLE9BQU8sSUFBSSxDQUFDLFNBQVMsS0FBSyxVQUFVLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQzVELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQ3ZCLFFBQVEsRUFBRSxDQUFDO2FBQ1osQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxRQUFRO0lBRVIsQ0FBQztJQUtELGlCQUFpQjtJQUVqQixDQUFDO0lBS0QsYUFBYTtJQUViLENBQUM7SUFLRCxpQkFBaUI7SUFFakIsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IH1cbmNvbnN0IHsgZ2V0Rm9udCwgYWpheCB9ID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbHMvdXRpbCcpXG5jb25zdCB7IHdsZWNvbWUgfSA9IGdldEFwcCgpLmdsb2JhbERhdGFcblBhZ2Uoe1xuXG4gIC8qKlxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICBsaXN0OiBbXSxcbiAgICB1aWQ6IDBcbiAgfSxcblxuICAvKipcbiAgICog6Lez6L2s56eB6IGK6aG16Z2iXG4gICAqL1xuICBnb0NoYXQoZTogYW55KSB7XG4gICAgbGV0IHNlbmQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5zZW5kXG4gICAgbGV0IGFjY2VwdCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmFjY2VwdFxuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgL3BhZ2VzL21lc3NhZ2UvY2hhdC9pbmRleD9zZW5kPSR7c2VuZH0mYWNjZXB0PSR7YWNjZXB0fWBcbiAgICB9KVxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxuICAgKi9cbiAgb25Mb2FkKGUpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzXG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHVpZDogZS51aWQgYXMgYW55XG4gICAgfSlcbiAgICAvKipcbiAgICAgKiDliqDovb3nvZHnu5zlrZfkvZNcbiAgICAgKi9cbiAgICBnZXRGb250KClcblxuICAgIC8qKlxuICAgICAqIOivt+axgua2iOaBr+WIl+ihqFxuICAgICAqL1xuICAgIGFqYXgoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9pbmRleC9tZXNzYWdlL2dldFNlc3Npb24nLCB7IHVpZDogZS51aWQgfSkudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgIF90aGlzLnNldERhdGEoe1xuICAgICAgICBsaXN0OiByZXMuZGF0YS5kYXRhXG4gICAgICB9KVxuICAgIH0pXG5cblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuICAgKi9cbiAgb25SZWFkeSgpIHtcbiAgICB3bGVjb21lKHsgc2VuZDogdGhpcy5kYXRhLnVpZCwgdHlwZTogJ3dlbGNvbWUnIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG4gICAqL1xuICBvblNob3coKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmdldFRhYkJhciA9PT0gJ2Z1bmN0aW9uJyAmJiB0aGlzLmdldFRhYkJhcigpKSB7XG4gICAgICB0aGlzLmdldFRhYkJhcigpLnNldERhdGEoe1xuICAgICAgICBzZWxlY3RlZDogMlxuICAgICAgfSlcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGUoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cbiAgICovXG4gIG9uVW5sb2FkKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAqL1xuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b20oKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55So5oi354K55Ye75Y+z5LiK6KeS5YiG5LqrXG4gICAqL1xuICBvblNoYXJlQXBwTWVzc2FnZSgpIHtcblxuICB9XG59KSJdfQ==
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getFont = require('../../../utils/util').getFont;
var _a = getApp().globalData, io = _a.io, monitor = _a.monitor;
Page({
    data: {
        data: {
            text: '',
            send: '',
            accept: '',
            type: 'private',
            create_time: 0
        },
        message: []
    },
    getInput: function (e) {
        var _a;
        this.setData((_a = {},
            _a['data.text'] = e.detail.value,
            _a));
    },
    send: function () {
        var _a;
        var _this = this;
        this.setData((_a = {},
            _a['data.create_time'] = Date.parse((new Date())) / 1000,
            _a));
        io.send({
            data: JSON.stringify(this.data.data),
            success: function () {
                var _a;
                _this.setData((_a = {},
                    _a['data.text'] = '',
                    _a));
            }
        });
    },
    onLoad: function (e) {
        var _a;
        var _this = this;
        this.setData((_a = {},
            _a['data.accept'] = e.accept,
            _a['data.send'] = e.send,
            _a));
        var arr = [];
        monitor(function (res) {
            var msg = JSON.parse(res);
            if (msg.send === _this.data.data.send && msg.accept === _this.data.data.accept) {
                arr.push(msg);
                _this.setData({
                    message: arr
                });
            }
            if (msg.send === _this.data.data.accept && msg.accept === _this.data.data.send) {
                arr.push(msg);
                _this.setData({
                    message: arr
                });
            }
        });
        getFont();
    },
    onReady: function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNRLElBQUEsT0FBTyxHQUFLLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxRQUFuQyxDQUFtQztBQUM1QyxJQUFBLEtBQWtCLE1BQU0sRUFBRSxDQUFDLFVBQVUsRUFBbkMsRUFBRSxRQUFBLEVBQUUsT0FBTyxhQUF3QixDQUFBO0FBQzNDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLElBQUksRUFBRTtZQUNKLElBQUksRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFFLEVBQUU7WUFDUixNQUFNLEVBQUUsRUFBRTtZQUNWLElBQUksRUFBRSxTQUFTO1lBQ2YsV0FBVyxFQUFFLENBQUM7U0FDZjtRQUNELE9BQU8sRUFBRSxFQUFjO0tBQ3hCO0lBTUQsUUFBUSxFQUFSLFVBQVMsQ0FBTTs7UUFDYixJQUFJLENBQUMsT0FBTztZQUNWLEdBQUMsV0FBVyxJQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztnQkFDN0IsQ0FBQTtJQUNKLENBQUM7SUFLRCxJQUFJLEVBQUo7O1FBQUEsaUJBWUM7UUFYQyxJQUFJLENBQUMsT0FBTztZQUNWLEdBQUMsa0JBQWtCLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQVEsQ0FBQyxHQUFHLElBQUk7Z0JBQzVELENBQUE7UUFDRixFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ04sSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDcEMsT0FBTyxFQUFFOztnQkFDUCxLQUFJLENBQUMsT0FBTztvQkFDVixHQUFDLFdBQVcsSUFBRyxFQUFFO3dCQUNqQixDQUFBO1lBQ0osQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxNQUFNLEVBQU4sVUFBTyxDQUFDOztRQUFSLGlCQThCQztRQTdCQyxJQUFJLENBQUMsT0FBTztZQUNWLEdBQUMsYUFBYSxJQUFHLENBQUMsQ0FBQyxNQUFNO1lBQ3pCLEdBQUMsV0FBVyxJQUFHLENBQUMsQ0FBQyxJQUFJO2dCQUNyQixDQUFBO1FBS0YsSUFBSSxHQUFHLEdBQWEsRUFBRSxDQUFBO1FBQ3RCLE9BQU8sQ0FBQyxVQUFDLEdBQVE7WUFDZixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ3pCLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQzVFLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ2IsS0FBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxPQUFPLEVBQUUsR0FBRztpQkFDYixDQUFDLENBQUE7YUFDSDtZQUNELElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQzVFLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ2IsS0FBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxPQUFPLEVBQUUsR0FBRztpQkFDYixDQUFDLENBQUE7YUFDSDtRQUNILENBQUMsQ0FBQyxDQUFBO1FBS0YsT0FBTyxFQUFFLENBQUE7SUFDWCxDQUFDO0lBS0QsT0FBTztJQUVQLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsUUFBUTtJQUVSLENBQUM7SUFLRCxpQkFBaUI7SUFFakIsQ0FBQztJQUtELGFBQWE7SUFFYixDQUFDO0lBS0QsaUJBQWlCO0lBRWpCLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyB9XG5jb25zdCB7IGdldEZvbnQgfSA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxzL3V0aWwnKVxuY29uc3QgeyBpbywgbW9uaXRvciB9ID0gZ2V0QXBwKCkuZ2xvYmFsRGF0YVxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBkYXRhOiB7XG4gICAgICB0ZXh0OiAnJywgLy8g5raI5oGvLFxuICAgICAgc2VuZDogJycsIC8vIOWPkemAgeS6ulxuICAgICAgYWNjZXB0OiAnJywgLy8g5o6l5pS25Lq6XG4gICAgICB0eXBlOiAncHJpdmF0ZScsIC8vIOa2iOaBr+exu+Wei1xuICAgICAgY3JlYXRlX3RpbWU6IDBcbiAgICB9LFxuICAgIG1lc3NhZ2U6IFtdIGFzIHN0cmluZ1tdXG4gIH0sXG5cbiAgLyoqXG4gICAqIOiOt+WPlui+k+WFpeahhuWGheWuuVxuICAgKiBAcGFyYW0gZSBcbiAgICovXG4gIGdldElucHV0KGU6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBbJ2RhdGEudGV4dCddOiBlLmRldGFpbC52YWx1ZVxuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIOWPkemAgea2iOaBr1xuICAgKi9cbiAgc2VuZCgpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgWydkYXRhLmNyZWF0ZV90aW1lJ106IERhdGUucGFyc2UoKG5ldyBEYXRlKCkpIGFzIGFueSkgLyAxMDAwXG4gICAgfSlcbiAgICBpby5zZW5kKHtcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YS5kYXRhKSxcbiAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBbJ2RhdGEudGV4dCddOiAnJ1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgb25Mb2FkKGUpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgWydkYXRhLmFjY2VwdCddOiBlLmFjY2VwdCxcbiAgICAgIFsnZGF0YS5zZW5kJ106IGUuc2VuZFxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiDnm5HlkKzmnI3liqHnq6/mtojmga/ov5Tlm55cbiAgICAgKi9cbiAgICBsZXQgYXJyOiBzdHJpbmdbXSA9IFtdXG4gICAgbW9uaXRvcigocmVzOiBhbnkpID0+IHtcbiAgICAgIGxldCBtc2cgPSBKU09OLnBhcnNlKHJlcylcbiAgICAgIGlmIChtc2cuc2VuZCA9PT0gdGhpcy5kYXRhLmRhdGEuc2VuZCAmJiBtc2cuYWNjZXB0ID09PSB0aGlzLmRhdGEuZGF0YS5hY2NlcHQpIHtcbiAgICAgICAgYXJyLnB1c2gobXNnKVxuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIG1lc3NhZ2U6IGFyclxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgaWYgKG1zZy5zZW5kID09PSB0aGlzLmRhdGEuZGF0YS5hY2NlcHQgJiYgbXNnLmFjY2VwdCA9PT0gdGhpcy5kYXRhLmRhdGEuc2VuZCkge1xuICAgICAgICBhcnIucHVzaChtc2cpXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgbWVzc2FnZTogYXJyXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIOWKoOi9vee9kee7nOWtl+S9k1xuICAgICAqL1xuICAgIGdldEZvbnQoKVxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuICAgKi9cbiAgb25SZWFkeSgpIHtcbiAgICAvLyB3bGVjb21lKHsgc2VuZDogdGhpcy5kYXRhLmRhdGEuc2VuZCwgdHlwZTogJ3dlbGNvbWUnIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG4gICAqL1xuICBvblNob3coKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgICovXG4gIG9uSGlkZSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuICAgKi9cbiAgb25VbmxvYWQoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcbiAgICovXG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuICAgKi9cbiAgb25SZWFjaEJvdHRvbSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlKjmiLfngrnlh7vlj7PkuIrop5LliIbkuqtcbiAgICovXG4gIG9uU2hhcmVBcHBNZXNzYWdlKCkge1xuXG4gIH1cbn0pIl19
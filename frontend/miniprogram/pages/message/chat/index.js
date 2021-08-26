"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _a = require('../../../utils/util'), getFont = _a.getFont, ajax = _a.ajax;
var _b = getApp().globalData, io = _b.io, monitor = _b.monitor;
Page({
    data: {
        data: {
            message: '',
            send: '',
            accept: '',
            type: 'private',
            create_time: 0,
            fid: 0
        },
        message: []
    },
    getInput: function (e) {
        var _a;
        this.setData((_a = {},
            _a['data.message'] = e.detail.value,
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
                    _a['data.message'] = '',
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
            _a['data.fid'] = e.fid,
            _a), function () {
            ajax('http://localhost:3000/index/message/updateUnread', { fid: _this.data.data.fid, send: _this.data.data.send });
        });
        monitor(function (res) {
            var msg = JSON.parse(res);
            if (msg.send === _this.data.data.send && msg.accept === _this.data.data.accept) {
                _this.data.message.push(msg);
                _this.setData({
                    message: _this.data.message,
                }, function () {
                    var toView = "msg-" + (_this.data.message.length - 1);
                    _this.setData({
                        toView: toView
                    });
                });
            }
            if (msg.send === _this.data.data.accept && msg.accept === _this.data.data.send) {
                _this.data.message.push(msg);
                _this.setData({
                    message: _this.data.message,
                }, function () {
                    var toView = "msg-" + (_this.data.message.length - 1);
                    _this.setData({
                        toView: toView
                    });
                });
            }
            ajax('http://localhost:3000/index/message/updateUnread', { fid: _this.data.data.fid, send: _this.data.data.send });
        });
        getFont();
    },
    getHistoryMsg: function () {
        var _this = this;
        ajax('http://localhost:3000/index/message/getHistoryMsg', { fid: this.data.data.fid }).then(function (res) {
            _this.setData({
                message: res.data.data
            }, function () {
                var toView = "msg-" + (res.data.data.length - 1);
                _this.setData({
                    toView: toView
                });
            });
        });
    },
    onReady: function () {
    },
    onShow: function () {
        this.getHistoryMsg();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNNLElBQUEsS0FBb0IsT0FBTyxDQUFDLHFCQUFxQixDQUFDLEVBQWhELE9BQU8sYUFBQSxFQUFFLElBQUksVUFBbUMsQ0FBQTtBQUNsRCxJQUFBLEtBQWtCLE1BQU0sRUFBRSxDQUFDLFVBQVUsRUFBbkMsRUFBRSxRQUFBLEVBQUUsT0FBTyxhQUF3QixDQUFBO0FBQzNDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLElBQUksRUFBRTtZQUNKLE9BQU8sRUFBRSxFQUFFO1lBQ1gsSUFBSSxFQUFFLEVBQUU7WUFDUixNQUFNLEVBQUUsRUFBRTtZQUNWLElBQUksRUFBRSxTQUFTO1lBQ2YsV0FBVyxFQUFFLENBQUM7WUFDZCxHQUFHLEVBQUUsQ0FBQztTQUNQO1FBQ0QsT0FBTyxFQUFFLEVBQWM7S0FDeEI7SUFNRCxRQUFRLEVBQVIsVUFBUyxDQUFNOztRQUNiLElBQUksQ0FBQyxPQUFPO1lBQ1YsR0FBQyxjQUFjLElBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO2dCQUNoQyxDQUFBO0lBQ0osQ0FBQztJQUtELElBQUksRUFBSjs7UUFBQSxpQkFZQztRQVhDLElBQUksQ0FBQyxPQUFPO1lBQ1YsR0FBQyxrQkFBa0IsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBUSxDQUFDLEdBQUcsSUFBSTtnQkFDNUQsQ0FBQTtRQUNGLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDTixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNwQyxPQUFPLEVBQUU7O2dCQUNQLEtBQUksQ0FBQyxPQUFPO29CQUNWLEdBQUMsY0FBYyxJQUFHLEVBQUU7d0JBQ3BCLENBQUE7WUFDSixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELE1BQU0sRUFBTixVQUFPLENBQUM7O1FBQVIsaUJBMENDO1FBekNDLElBQUksQ0FBQyxPQUFPO1lBQ1YsR0FBQyxhQUFhLElBQUcsQ0FBQyxDQUFDLE1BQU07WUFDekIsR0FBQyxXQUFXLElBQUcsQ0FBQyxDQUFDLElBQUk7WUFDckIsR0FBQyxVQUFVLElBQUcsQ0FBQyxDQUFDLEdBQUc7aUJBQ2xCO1lBQ0QsSUFBSSxDQUFDLGtEQUFrRCxFQUFFLEVBQUUsR0FBRyxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtRQUNsSCxDQUFDLENBQUMsQ0FBQTtRQUlGLE9BQU8sQ0FBQyxVQUFDLEdBQVE7WUFDZixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ3pCLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQzVFLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDM0IsS0FBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxPQUFPLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPO2lCQUMzQixFQUFFO29CQUNELElBQUksTUFBTSxHQUFHLFVBQU8sS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBRSxDQUFBO29CQUNsRCxLQUFJLENBQUMsT0FBTyxDQUFDO3dCQUNYLE1BQU0sUUFBQTtxQkFDUCxDQUFDLENBQUE7Z0JBQ0osQ0FBQyxDQUFDLENBQUE7YUFDSDtZQUNELElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQzVFLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDM0IsS0FBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxPQUFPLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPO2lCQUMzQixFQUFFO29CQUNELElBQUksTUFBTSxHQUFHLFVBQU8sS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBRSxDQUFBO29CQUNsRCxLQUFJLENBQUMsT0FBTyxDQUFDO3dCQUNYLE1BQU0sUUFBQTtxQkFDUCxDQUFDLENBQUE7Z0JBQ0osQ0FBQyxDQUFDLENBQUE7YUFDSDtZQUNELElBQUksQ0FBQyxrREFBa0QsRUFBRSxFQUFFLEdBQUcsRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7UUFDbEgsQ0FBQyxDQUFDLENBQUE7UUFLRixPQUFPLEVBQUUsQ0FBQTtJQUNYLENBQUM7SUFLRCxhQUFhLEVBQWI7UUFBQSxpQkFXQztRQVZDLElBQUksQ0FBQyxtREFBbUQsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVE7WUFDbkcsS0FBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQ3ZCLEVBQUU7Z0JBQ0QsSUFBSSxNQUFNLEdBQUcsVUFBTyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFFLENBQUE7Z0JBQzlDLEtBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsTUFBTSxRQUFBO2lCQUNQLENBQUMsQ0FBQTtZQUNKLENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBS0QsT0FBTztJQUVQLENBQUM7SUFLRCxNQUFNO1FBQ0osSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQ3RCLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELFFBQVE7SUFFUixDQUFDO0lBS0QsaUJBQWlCO0lBRWpCLENBQUM7SUFLRCxhQUFhO0lBRWIsQ0FBQztJQUtELGlCQUFpQjtJQUVqQixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgfVxuY29uc3QgeyBnZXRGb250LCBhamF4IH0gPSByZXF1aXJlKCcuLi8uLi8uLi91dGlscy91dGlsJylcbmNvbnN0IHsgaW8sIG1vbml0b3IgfSA9IGdldEFwcCgpLmdsb2JhbERhdGFcblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgZGF0YToge1xuICAgICAgbWVzc2FnZTogJycsIC8vIOa2iOaBryxcbiAgICAgIHNlbmQ6ICcnLCAvLyDlj5HpgIHkurpcbiAgICAgIGFjY2VwdDogJycsIC8vIOaOpeaUtuS6ulxuICAgICAgdHlwZTogJ3ByaXZhdGUnLCAvLyDmtojmga/nsbvlnotcbiAgICAgIGNyZWF0ZV90aW1lOiAwLFxuICAgICAgZmlkOiAwXG4gICAgfSxcbiAgICBtZXNzYWdlOiBbXSBhcyBzdHJpbmdbXVxuICB9LFxuXG4gIC8qKlxuICAgKiDojrflj5bovpPlhaXmoYblhoXlrrlcbiAgICogQHBhcmFtIGUgXG4gICAqL1xuICBnZXRJbnB1dChlOiBhbnkpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgWydkYXRhLm1lc3NhZ2UnXTogZS5kZXRhaWwudmFsdWVcbiAgICB9KVxuICB9LFxuXG4gIC8qKlxuICAgKiDlj5HpgIHmtojmga9cbiAgICovXG4gIHNlbmQoKSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIFsnZGF0YS5jcmVhdGVfdGltZSddOiBEYXRlLnBhcnNlKChuZXcgRGF0ZSgpKSBhcyBhbnkpIC8gMTAwMFxuICAgIH0pXG4gICAgaW8uc2VuZCh7XG4gICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEuZGF0YSksXG4gICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgWydkYXRhLm1lc3NhZ2UnXTogJydcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIG9uTG9hZChlKSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIFsnZGF0YS5hY2NlcHQnXTogZS5hY2NlcHQsXG4gICAgICBbJ2RhdGEuc2VuZCddOiBlLnNlbmQsXG4gICAgICBbJ2RhdGEuZmlkJ106IGUuZmlkXG4gICAgfSwgKCkgPT4ge1xuICAgICAgYWpheCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2luZGV4L21lc3NhZ2UvdXBkYXRlVW5yZWFkJywgeyBmaWQ6IHRoaXMuZGF0YS5kYXRhLmZpZCwgc2VuZDogdGhpcy5kYXRhLmRhdGEuc2VuZCB9KVxuICAgIH0pXG4gICAgLyoqXG4gICAgICog55uR5ZCs5pyN5Yqh56uv5raI5oGv6L+U5ZueXG4gICAgICovXG4gICAgbW9uaXRvcigocmVzOiBhbnkpID0+IHtcbiAgICAgIGxldCBtc2cgPSBKU09OLnBhcnNlKHJlcylcbiAgICAgIGlmIChtc2cuc2VuZCA9PT0gdGhpcy5kYXRhLmRhdGEuc2VuZCAmJiBtc2cuYWNjZXB0ID09PSB0aGlzLmRhdGEuZGF0YS5hY2NlcHQpIHtcbiAgICAgICAgdGhpcy5kYXRhLm1lc3NhZ2UucHVzaChtc2cpXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgbWVzc2FnZTogdGhpcy5kYXRhLm1lc3NhZ2UsXG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICBsZXQgdG9WaWV3ID0gYG1zZy0ke3RoaXMuZGF0YS5tZXNzYWdlLmxlbmd0aCAtIDF9YFxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICB0b1ZpZXdcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgaWYgKG1zZy5zZW5kID09PSB0aGlzLmRhdGEuZGF0YS5hY2NlcHQgJiYgbXNnLmFjY2VwdCA9PT0gdGhpcy5kYXRhLmRhdGEuc2VuZCkge1xuICAgICAgICB0aGlzLmRhdGEubWVzc2FnZS5wdXNoKG1zZylcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBtZXNzYWdlOiB0aGlzLmRhdGEubWVzc2FnZSxcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgIGxldCB0b1ZpZXcgPSBgbXNnLSR7dGhpcy5kYXRhLm1lc3NhZ2UubGVuZ3RoIC0gMX1gXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIHRvVmlld1xuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBhamF4KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvaW5kZXgvbWVzc2FnZS91cGRhdGVVbnJlYWQnLCB7IGZpZDogdGhpcy5kYXRhLmRhdGEuZmlkLCBzZW5kOiB0aGlzLmRhdGEuZGF0YS5zZW5kIH0pXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIOWKoOi9vee9kee7nOWtl+S9k1xuICAgICAqL1xuICAgIGdldEZvbnQoKVxuICB9LFxuXG4gIC8qKlxuICAgKiDojrflj5bljoblj7Lmtojmga9cbiAgICovXG4gIGdldEhpc3RvcnlNc2coKSB7XG4gICAgYWpheCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2luZGV4L21lc3NhZ2UvZ2V0SGlzdG9yeU1zZycsIHsgZmlkOiB0aGlzLmRhdGEuZGF0YS5maWQgfSkudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIG1lc3NhZ2U6IHJlcy5kYXRhLmRhdGFcbiAgICAgIH0sICgpID0+IHtcbiAgICAgICAgbGV0IHRvVmlldyA9IGBtc2ctJHtyZXMuZGF0YS5kYXRhLmxlbmd0aCAtIDF9YFxuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIHRvVmlld1xuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9KVxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuICAgKi9cbiAgb25SZWFkeSgpIHtcbiAgICAvLyB3bGVjb21lKHsgc2VuZDogdGhpcy5kYXRhLmRhdGEuc2VuZCwgdHlwZTogJ3dlbGNvbWUnIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG4gICAqL1xuICBvblNob3coKSB7XG4gICAgdGhpcy5nZXRIaXN0b3J5TXNnKClcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgICovXG4gIG9uSGlkZSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuICAgKi9cbiAgb25VbmxvYWQoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcbiAgICovXG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuICAgKi9cbiAgb25SZWFjaEJvdHRvbSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlKjmiLfngrnlh7vlj7PkuIrop5LliIbkuqtcbiAgICovXG4gIG9uU2hhcmVBcHBNZXNzYWdlKCkge1xuXG4gIH1cbn0pIl19
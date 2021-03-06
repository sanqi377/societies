"use strict";
var ajaxHttp = function (url, data) {
    var token = wx.getStorageSync('token');
    return new Promise(function (resolve, reject) {
        wx.request({
            url: 'http://localhost:3000/index/' + url,
            method: 'POST',
            data: data,
            header: {
                token: token
            },
            success: function (res) {
                resolve(res);
            },
            fail: function (err) {
                reject(err);
            }
        });
    });
};
var checkLogin = function () {
    var token = wx.getStorageSync('token');
    if (!token)
        return false;
    return true;
};
var formatMsgTime = function (timespan) {
    var dateTime = new Date(timespan);
    var year = dateTime.getFullYear();
    var month = dateTime.getMonth() + 1;
    var day = dateTime.getDate();
    var hour = dateTime.getHours();
    var minute = dateTime.getMinutes();
    var now_new = Date.parse((new Date()));
    var milliseconds = 0;
    var timeSpanStr;
    milliseconds = now_new - timespan;
    if (milliseconds <= 1000 * 60 * 1) {
        timeSpanStr = '刚刚';
    }
    else if (1000 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60) {
        timeSpanStr = Math.round((milliseconds / (1000 * 60))) + '分钟前';
    }
    else if (1000 * 60 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24) {
        timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60)) + '小时前';
    }
    else if (1000 * 60 * 60 * 24 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24 * 15) {
        timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60 * 24)) + '天前';
    }
    else if (milliseconds > 1000 * 60 * 60 * 24 * 15 && year == new Date().getFullYear()) {
        timeSpanStr = month + '-' + day + ' ' + hour + ':' + minute;
    }
    else {
        timeSpanStr = year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
    }
    return timeSpanStr;
};
module.exports = {
    ajax: ajaxHttp,
    checkLogin: checkLogin,
    formatMsgTime: formatMsgTime
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUtBLElBQUksUUFBUSxHQUFHLFVBQUMsR0FBVyxFQUFFLElBQVk7SUFDdkMsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUN0QyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07UUFDakMsRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUNULEdBQUcsRUFBRSw4QkFBOEIsR0FBRyxHQUFHO1lBQ3pDLE1BQU0sRUFBRSxNQUFNO1lBQ2QsSUFBSSxFQUFFLElBQUk7WUFDVixNQUFNLEVBQUU7Z0JBQ04sS0FBSyxPQUFBO2FBQ047WUFDRCxPQUFPLFlBQUMsR0FBRztnQkFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDZCxDQUFDO1lBQ0QsSUFBSSxFQUFFLFVBQUMsR0FBUTtnQkFDYixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDYixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUE7QUFNRCxJQUFJLFVBQVUsR0FBUTtJQUNwQixJQUFJLEtBQUssR0FBVyxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQzlDLElBQUksQ0FBQyxLQUFLO1FBQUUsT0FBTyxLQUFLLENBQUE7SUFDeEIsT0FBTyxJQUFJLENBQUE7QUFDYixDQUFDLENBQUE7QUFHRCxJQUFJLGFBQWEsR0FBRyxVQUFDLFFBQWE7SUFFaEMsSUFBSSxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7SUFFakMsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQ2pDLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDbkMsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBQzVCLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtJQUM5QixJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDbEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQVEsQ0FBQyxDQUFBO0lBRTdDLElBQUksWUFBWSxHQUFHLENBQUMsQ0FBQTtJQUNwQixJQUFJLFdBQVcsQ0FBQTtJQUVmLFlBQVksR0FBRyxPQUFPLEdBQUcsUUFBUSxDQUFDO0lBRWxDLElBQUksWUFBWSxJQUFJLElBQUksR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFO1FBQ2pDLFdBQVcsR0FBRyxJQUFJLENBQUE7S0FDbkI7U0FDSSxJQUFJLElBQUksR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLFlBQVksSUFBSSxZQUFZLElBQUksSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7UUFDdkUsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQTtLQUMvRDtTQUNJLElBQUksSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLFlBQVksSUFBSSxZQUFZLElBQUksSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO1FBQ2pGLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUE7S0FDbEU7U0FDSSxJQUFJLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxZQUFZLElBQUksWUFBWSxJQUFJLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7UUFDdkYsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUE7S0FDdEU7U0FDSSxJQUFJLFlBQVksR0FBRyxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxFQUFFO1FBQ3BGLFdBQVcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUE7S0FDNUQ7U0FBTTtRQUNMLFdBQVcsR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQTtLQUN6RTtJQUNELE9BQU8sV0FBVyxDQUFBO0FBQ3BCLENBQUMsQ0FBQTtBQUVELE1BQU0sQ0FBQyxPQUFPLEdBQUc7SUFDZixJQUFJLEVBQUUsUUFBUTtJQUNkLFVBQVUsWUFBQTtJQUNWLGFBQWEsZUFBQTtDQUNkLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogd3gucmVxdWVzdCDlsIHoo4VcclxuICogQHBhcmFtIHVybCDor7fmsYIgdXJsXHJcbiAqIEBwYXJhbSBkYXRhIOivt+axguaVsOaNrlxyXG4gKi9cclxudmFyIGFqYXhIdHRwID0gKHVybDogc3RyaW5nLCBkYXRhOiBvYmplY3QpID0+IHtcclxuICBsZXQgdG9rZW4gPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKVxyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2luZGV4LycgKyB1cmwsXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICBoZWFkZXI6IHtcclxuICAgICAgICB0b2tlblxyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgIHJlc29sdmUocmVzKVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiAoZXJyOiBhbnkpID0+IHtcclxuICAgICAgICByZWplY3QoZXJyKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4DmtYvmmK/lkKbnmbvlvZVcclxuICogQHJldHVybnMgXHJcbiAqL1xyXG52YXIgY2hlY2tMb2dpbjogYW55ID0gKCkgPT4ge1xyXG4gIHZhciB0b2tlbjogc3RyaW5nID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJylcclxuICBpZiAoIXRva2VuKSByZXR1cm4gZmFsc2VcclxuICByZXR1cm4gdHJ1ZVxyXG59XHJcblxyXG5cclxubGV0IGZvcm1hdE1zZ1RpbWUgPSAodGltZXNwYW46IGFueSkgPT4ge1xyXG5cclxuICB2YXIgZGF0ZVRpbWUgPSBuZXcgRGF0ZSh0aW1lc3BhbilcclxuXHJcbiAgdmFyIHllYXIgPSBkYXRlVGltZS5nZXRGdWxsWWVhcigpXHJcbiAgdmFyIG1vbnRoID0gZGF0ZVRpbWUuZ2V0TW9udGgoKSArIDFcclxuICB2YXIgZGF5ID0gZGF0ZVRpbWUuZ2V0RGF0ZSgpXHJcbiAgdmFyIGhvdXIgPSBkYXRlVGltZS5nZXRIb3VycygpXHJcbiAgdmFyIG1pbnV0ZSA9IGRhdGVUaW1lLmdldE1pbnV0ZXMoKVxyXG4gIHZhciBub3dfbmV3ID0gRGF0ZS5wYXJzZSgobmV3IERhdGUoKSkgYXMgYW55KVxyXG5cclxuICB2YXIgbWlsbGlzZWNvbmRzID0gMFxyXG4gIHZhciB0aW1lU3BhblN0clxyXG5cclxuICBtaWxsaXNlY29uZHMgPSBub3dfbmV3IC0gdGltZXNwYW47XHJcblxyXG4gIGlmIChtaWxsaXNlY29uZHMgPD0gMTAwMCAqIDYwICogMSkge1xyXG4gICAgdGltZVNwYW5TdHIgPSAn5Yia5YiaJ1xyXG4gIH1cclxuICBlbHNlIGlmICgxMDAwICogNjAgKiAxIDwgbWlsbGlzZWNvbmRzICYmIG1pbGxpc2Vjb25kcyA8PSAxMDAwICogNjAgKiA2MCkge1xyXG4gICAgdGltZVNwYW5TdHIgPSBNYXRoLnJvdW5kKChtaWxsaXNlY29uZHMgLyAoMTAwMCAqIDYwKSkpICsgJ+WIhumSn+WJjSdcclxuICB9XHJcbiAgZWxzZSBpZiAoMTAwMCAqIDYwICogNjAgKiAxIDwgbWlsbGlzZWNvbmRzICYmIG1pbGxpc2Vjb25kcyA8PSAxMDAwICogNjAgKiA2MCAqIDI0KSB7XHJcbiAgICB0aW1lU3BhblN0ciA9IE1hdGgucm91bmQobWlsbGlzZWNvbmRzIC8gKDEwMDAgKiA2MCAqIDYwKSkgKyAn5bCP5pe25YmNJ1xyXG4gIH1cclxuICBlbHNlIGlmICgxMDAwICogNjAgKiA2MCAqIDI0IDwgbWlsbGlzZWNvbmRzICYmIG1pbGxpc2Vjb25kcyA8PSAxMDAwICogNjAgKiA2MCAqIDI0ICogMTUpIHtcclxuICAgIHRpbWVTcGFuU3RyID0gTWF0aC5yb3VuZChtaWxsaXNlY29uZHMgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpICsgJ+WkqeWJjSdcclxuICB9XHJcbiAgZWxzZSBpZiAobWlsbGlzZWNvbmRzID4gMTAwMCAqIDYwICogNjAgKiAyNCAqIDE1ICYmIHllYXIgPT0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpKSB7XHJcbiAgICB0aW1lU3BhblN0ciA9IG1vbnRoICsgJy0nICsgZGF5ICsgJyAnICsgaG91ciArICc6JyArIG1pbnV0ZVxyXG4gIH0gZWxzZSB7XHJcbiAgICB0aW1lU3BhblN0ciA9IHllYXIgKyAnLScgKyBtb250aCArICctJyArIGRheSArICcgJyArIGhvdXIgKyAnOicgKyBtaW51dGVcclxuICB9XHJcbiAgcmV0dXJuIHRpbWVTcGFuU3RyXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIGFqYXg6IGFqYXhIdHRwLFxyXG4gIGNoZWNrTG9naW4sXHJcbiAgZm9ybWF0TXNnVGltZVxyXG59Il19
"use strict";
var ajaxHttp = function (url, data) {
    return new Promise(function (resolve, reject) {
        wx.request({
            url: url,
            method: 'POST',
            data: data,
            success: function (res) {
                resolve(res);
            },
            fail: function (err) {
                reject(err);
            }
        });
    });
};
module.exports = {
    ajax: ajaxHttp
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUtBLElBQUksUUFBUSxHQUFHLFVBQUMsR0FBVyxFQUFFLElBQVk7SUFDdkMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ2pDLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDVCxHQUFHLEVBQUUsR0FBRztZQUNSLE1BQU0sRUFBRSxNQUFNO1lBQ2QsSUFBSSxFQUFFLElBQUk7WUFDVixPQUFPLFlBQUMsR0FBRztnQkFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDZCxDQUFDO1lBQ0QsSUFBSSxFQUFFLFVBQUMsR0FBUTtnQkFDZixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDYixDQUFDO1NBQ0EsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7QUFDRixDQUFDLENBQUE7QUFFRCxNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2YsSUFBSSxFQUFFLFFBQVE7Q0FDZixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiB3eC5yZXF1ZXN0IOWwgeijhVxuICogQHBhcmFtIHVybCDor7fmsYIgdXJsXG4gKiBAcGFyYW0gZGF0YSDor7fmsYLmlbDmja5cbiAqL1xudmFyIGFqYXhIdHRwID0gKHVybDogc3RyaW5nLCBkYXRhOiBvYmplY3QpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICB3eC5yZXF1ZXN0KHtcbiAgICAgIHVybDogdXJsLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICB9LFxuICAgICAgZmFpbDogKGVycjogYW55KSA9PntcbiAgICAgIHJlamVjdChlcnIpXG4gICAgfVxuICAgIH0pXG59KVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYWpheDogYWpheEh0dHBcbn0iXX0=
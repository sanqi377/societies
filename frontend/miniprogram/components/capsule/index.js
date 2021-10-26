"use strict";
Component({
    properties: {
        title: {
            type: String
        }
    },
    data: {
        top: wx.getMenuButtonBoundingClientRect().top,
        height: wx.getMenuButtonBoundingClientRect().height,
        scrllor_top: wx.getSystemInfoSync().safeArea.top
    },
    methods: {
        back: function () {
            wx.navigateBack();
        },
        index: function () {
            wx.switchTab({
                url: "/pages/index/index/index"
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBQ1IsVUFBVSxFQUFFO1FBQ1YsS0FBSyxFQUFFO1lBQ0wsSUFBSSxFQUFFLE1BQU07U0FDYjtLQUNGO0lBQ0QsSUFBSSxFQUFFO1FBQ0osR0FBRyxFQUFFLEVBQUUsQ0FBQywrQkFBK0IsRUFBRSxDQUFDLEdBQUc7UUFDN0MsTUFBTSxFQUFFLEVBQUUsQ0FBQywrQkFBK0IsRUFBRSxDQUFDLE1BQU07UUFDbkQsV0FBVyxFQUFFLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHO0tBQ2pEO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsSUFBSTtZQUNGLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQTtRQUNuQixDQUFDO1FBQ0QsS0FBSztZQUNILEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0JBQ1gsR0FBRyxFQUFFLDBCQUEwQjthQUNoQyxDQUFDLENBQUE7UUFDSixDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJDb21wb25lbnQoe1xyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGF0YToge1xyXG4gICAgdG9wOiB3eC5nZXRNZW51QnV0dG9uQm91bmRpbmdDbGllbnRSZWN0KCkudG9wLFxyXG4gICAgaGVpZ2h0OiB3eC5nZXRNZW51QnV0dG9uQm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0LFxyXG4gICAgc2NybGxvcl90b3A6IHd4LmdldFN5c3RlbUluZm9TeW5jKCkuc2FmZUFyZWEudG9wXHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBiYWNrKCkge1xyXG4gICAgICB3eC5uYXZpZ2F0ZUJhY2soKVxyXG4gICAgfSxcclxuICAgIGluZGV4KCkge1xyXG4gICAgICB3eC5zd2l0Y2hUYWIoe1xyXG4gICAgICAgIHVybDogXCIvcGFnZXMvaW5kZXgvaW5kZXgvaW5kZXhcIlxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuIl19
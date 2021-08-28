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
    lifetimes: {
        attached: function () {
            console.log(getCurrentPages());
        },
        detached: function () {
        },
    },
    methods: {
        back: function () {
            wx.navigateBack();
        },
        index: function () {
            wx.switchTab({
                url: "/pages/index/index/index"
            });
        },
        scrollgo: function (e) {
            console.log(e);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBTUEsU0FBUyxDQUFDO0lBQ1IsVUFBVSxFQUFFO1FBQ1YsS0FBSyxFQUFFO1lBQ0wsSUFBSSxFQUFFLE1BQU07U0FDYjtLQUNGO0lBS0QsSUFBSSxFQUFFO1FBQ0osR0FBRyxFQUFFLEVBQUUsQ0FBQywrQkFBK0IsRUFBRSxDQUFDLEdBQUc7UUFDN0MsTUFBTSxFQUFFLEVBQUUsQ0FBQywrQkFBK0IsRUFBRSxDQUFDLE1BQU07UUFDbkQsV0FBVyxFQUFFLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHO0tBQ2pEO0lBRUQsU0FBUyxFQUFFO1FBQ1QsUUFBUSxFQUFFO1lBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFBO1FBQ2hDLENBQUM7UUFDRCxRQUFRLEVBQUU7UUFFVixDQUFDO0tBQ0Y7SUFDRCxPQUFPLEVBQUU7UUFDUCxJQUFJO1lBQ0YsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFBO1FBQ25CLENBQUM7UUFDRCxLQUFLO1lBQ0gsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDWCxHQUFHLEVBQUUsMEJBQTBCO2FBQ2hDLENBQUMsQ0FBQTtRQUNKLENBQUM7UUFDRCxRQUFRLFlBQUMsQ0FBQztZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDaEIsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuLy8gICBjb25zb2xlLmxvZyh3eC5nZXRTeXN0ZW1JbmZvU3luYygpKVxuLy8gfSwgMjAwMClcblxuXG5cbkNvbXBvbmVudCh7XG4gIHByb3BlcnRpZXM6IHtcbiAgICB0aXRsZToge1xuICAgICAgdHlwZTogU3RyaW5nXG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICB0b3A6IHd4LmdldE1lbnVCdXR0b25Cb3VuZGluZ0NsaWVudFJlY3QoKS50b3AsXG4gICAgaGVpZ2h0OiB3eC5nZXRNZW51QnV0dG9uQm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0LFxuICAgIHNjcmxsb3JfdG9wOiB3eC5nZXRTeXN0ZW1JbmZvU3luYygpLnNhZmVBcmVhLnRvcFxuICB9LFxuXG4gIGxpZmV0aW1lczoge1xuICAgIGF0dGFjaGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLmxvZyhnZXRDdXJyZW50UGFnZXMoKSlcbiAgICB9LFxuICAgIGRldGFjaGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyDlnKjnu4Tku7blrp7kvovooqvku47pobXpnaLoioLngrnmoJHnp7vpmaTml7bmiafooYxcbiAgICB9LFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYmFjaygpIHtcbiAgICAgIHd4Lm5hdmlnYXRlQmFjaygpXG4gICAgfSxcbiAgICBpbmRleCgpIHtcbiAgICAgIHd4LnN3aXRjaFRhYih7XG4gICAgICAgIHVybDogXCIvcGFnZXMvaW5kZXgvaW5kZXgvaW5kZXhcIlxuICAgICAgfSlcbiAgICB9LFxuICAgIHNjcm9sbGdvKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgfVxuICB9XG59KVxuIl19
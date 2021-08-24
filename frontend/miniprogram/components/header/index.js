"use strict";
Component({
    properties: {
        info: {
            type: Object
        }
    },
    data: {},
    methods: {
        goNotify: function () {
            wx.navigateTo({
                url: '/pages/index/notify/index'
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBQ1IsVUFBVSxFQUFFO1FBQ1YsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFLE1BQU07U0FDYjtLQUNGO0lBQ0QsSUFBSSxFQUFFLEVBQ0w7SUFDRCxPQUFPLEVBQUU7UUFDUCxRQUFRO1lBQ04sRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDWixHQUFHLEVBQUUsMkJBQTJCO2FBQ2pDLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgaW5mbzoge1xyXG4gICAgICB0eXBlOiBPYmplY3RcclxuICAgIH1cclxuICB9LFxyXG4gIGRhdGE6IHtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGdvTm90aWZ5KCkge1xyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6ICcvcGFnZXMvaW5kZXgvbm90aWZ5L2luZGV4J1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuIl19
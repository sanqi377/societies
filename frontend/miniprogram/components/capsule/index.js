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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBQ1IsVUFBVSxFQUFFO1FBQ1YsS0FBSyxFQUFFO1lBQ0wsSUFBSSxFQUFFLE1BQU07U0FDYjtLQUNGO0lBQ0QsSUFBSSxFQUFFO1FBQ0osR0FBRyxFQUFFLEVBQUUsQ0FBQywrQkFBK0IsRUFBRSxDQUFDLEdBQUc7UUFDN0MsTUFBTSxFQUFFLEVBQUUsQ0FBQywrQkFBK0IsRUFBRSxDQUFDLE1BQU07UUFDbkQsV0FBVyxFQUFFLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHO0tBQ2pEO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsSUFBSTtZQUNGLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQTtRQUNuQixDQUFDO1FBQ0QsS0FBSztZQUNILEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0JBQ1gsR0FBRyxFQUFFLDBCQUEwQjthQUNoQyxDQUFDLENBQUE7UUFDSixDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJDb21wb25lbnQoe1xuICBwcm9wZXJ0aWVzOiB7XG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZ1xuICAgIH1cbiAgfSxcbiAgZGF0YToge1xuICAgIHRvcDogd3guZ2V0TWVudUJ1dHRvbkJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCxcbiAgICBoZWlnaHQ6IHd4LmdldE1lbnVCdXR0b25Cb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQsXG4gICAgc2NybGxvcl90b3A6IHd4LmdldFN5c3RlbUluZm9TeW5jKCkuc2FmZUFyZWEudG9wXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBiYWNrKCkge1xuICAgICAgd3gubmF2aWdhdGVCYWNrKClcbiAgICB9LFxuICAgIGluZGV4KCkge1xuICAgICAgd3guc3dpdGNoVGFiKHtcbiAgICAgICAgdXJsOiBcIi9wYWdlcy9pbmRleC9pbmRleC9pbmRleFwiXG4gICAgICB9KVxuICAgIH1cbiAgfVxufSlcbiJdfQ==
"use strict";
Page({
    data: {
        swiper: [
            {
                url: '../../public/img/swiper-1.jpg'
            }
        ],
        tabsTitle: [
            {
                title: '全部',
                active: 1
            },
            {
                title: '我加入的',
                active: 0
            },
            {
                title: '我关注的',
                active: 0
            }
        ]
    },
    changeTabs: function (e) {
        var index = e.detail;
        var data = this.data.tabsTitle;
        data.forEach(function (item, idx) {
            item.active = 0;
            if (idx === index)
                item.active = 1;
        });
        this.setData({
            tabsTitle: data
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osTUFBTSxFQUFFO1lBQ047Z0JBQ0UsR0FBRyxFQUFFLCtCQUErQjthQUNyQztTQUNGO1FBQ0QsU0FBUyxFQUFFO1lBQ1Q7Z0JBQ0UsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsTUFBTSxFQUFFLENBQUM7YUFDVjtZQUNEO2dCQUNFLEtBQUssRUFBRSxNQUFNO2dCQUNiLE1BQU0sRUFBRSxDQUFDO2FBQ1Y7WUFDRDtnQkFDRSxLQUFLLEVBQUUsTUFBTTtnQkFDYixNQUFNLEVBQUUsQ0FBQzthQUNWO1NBQ0Y7S0FDRjtJQUlELFVBQVUsRUFBVixVQUFXLENBQU07UUFDZixJQUFJLEtBQUssR0FBVyxDQUFDLENBQUMsTUFBTSxDQUFBO1FBQzVCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFBO1FBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLEVBQUUsR0FBRztZQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTtZQUNmLElBQUksR0FBRyxLQUFLLEtBQUs7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUE7UUFDcEMsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsU0FBUyxFQUFFLElBQUk7U0FDaEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgc3dpcGVyOiBbXG4gICAgICB7XG4gICAgICAgIHVybDogJy4uLy4uL3B1YmxpYy9pbWcvc3dpcGVyLTEuanBnJ1xuICAgICAgfVxuICAgIF0sXG4gICAgdGFic1RpdGxlOiBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAn5YWo6YOoJyxcbiAgICAgICAgYWN0aXZlOiAxXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ+aIkeWKoOWFpeeahCcsXG4gICAgICAgIGFjdGl2ZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfmiJHlhbPms6jnmoQnLFxuICAgICAgICBhY3RpdmU6IDBcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIC8qKlxuICAgKiDmlLnlj5ggdGFicyDmoIfpopjmoI/liIfmjaLnirbmgIFcbiAgICovXG4gIGNoYW5nZVRhYnMoZTogYW55KSB7XG4gICAgbGV0IGluZGV4OiBudW1iZXIgPSBlLmRldGFpbFxuICAgIGxldCBkYXRhID0gdGhpcy5kYXRhLnRhYnNUaXRsZVxuICAgIGRhdGEuZm9yRWFjaCgoaXRlbSwgaWR4KSA9PiB7XG4gICAgICBpdGVtLmFjdGl2ZSA9IDBcbiAgICAgIGlmIChpZHggPT09IGluZGV4KSBpdGVtLmFjdGl2ZSA9IDFcbiAgICB9KVxuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICB0YWJzVGl0bGU6IGRhdGFcbiAgICB9KVxuICB9XG59KVxuIl19
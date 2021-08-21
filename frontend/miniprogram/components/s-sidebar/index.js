"use strict";
Component({
    properties: {
        title: {
            type: Array
        }
    },
    data: {},
    methods: {
        changeTabs: function (e) {
            var index = e.currentTarget.dataset.id;
            this.triggerEvent('changeSidebar', index);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBQ1IsVUFBVSxFQUFFO1FBQ1YsS0FBSyxFQUFFO1lBQ0wsSUFBSSxFQUFFLEtBQUs7U0FDWjtLQUNGO0lBQ0QsSUFBSSxFQUFFLEVBRUw7SUFDRCxPQUFPLEVBQUU7UUFJUCxVQUFVLEVBQVYsVUFBVyxDQUFNO1lBQ2YsSUFBSSxLQUFLLEdBQVcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFBO1lBQzlDLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQzNDLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgdGl0bGU6IHtcclxuICAgICAgdHlwZTogQXJyYXlcclxuICAgIH1cclxuICB9LFxyXG4gIGRhdGE6IHtcclxuXHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPliB0aXRsZSBpbmRleCDkvKDnu5nniLbnu4Tku7ZcclxuICAgICAqL1xyXG4gICAgY2hhbmdlVGFicyhlOiBhbnkpIHtcclxuICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZFxyXG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnY2hhbmdlU2lkZWJhcicsIGluZGV4KVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuIl19
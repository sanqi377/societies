"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var title = [];
var elements;
Component({
    properties: {
        active: {
            type: Number
        }
    },
    relations: {
        '../tab/index': {
            type: 'child'
        }
    },
    pageLifetimes: {
        show: function () {
            elements = this.getRelationNodes('../tab/index');
            if (elements.length != title.length)
                title = [];
            if (elements.length > 0) {
                elements.forEach(function (element) {
                    title.push(element.data.title);
                });
            }
            this.setData({
                title: this.unique(title),
            });
        },
    },
    data: {
        title: []
    },
    methods: {
        changeHandle: function (e) {
            var idx = e.currentTarget.dataset.idx;
            this.changeCurrent(idx, elements);
            this.setData({
                active: idx
            });
        },
        changeCurrent: function (activeKey, elements) {
            if (elements.length > 0) {
                elements.forEach(function (element) {
                    element.changeCurrent(activeKey);
                });
            }
        },
        unique: function (arr) {
            return Array.from(new Set(arr));
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLElBQUksS0FBSyxHQUFhLEVBQUUsQ0FBQTtBQUN4QixJQUFJLFFBQWEsQ0FBQTtBQUNqQixTQUFTLENBQUM7SUFDUixVQUFVLEVBQUU7UUFDVixNQUFNLEVBQUU7WUFDTixJQUFJLEVBQUUsTUFBTTtTQUNiO0tBQ0Y7SUFDRCxTQUFTLEVBQUU7UUFDVCxjQUFjLEVBQUU7WUFDZCxJQUFJLEVBQUUsT0FBTztTQUNkO0tBQ0Y7SUFDRCxhQUFhLEVBQUU7UUFDYixJQUFJLEVBQUo7WUFDRSxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFBO1lBQ2hELElBQUksUUFBUSxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsTUFBTTtnQkFBRSxLQUFLLEdBQUcsRUFBRSxDQUFBO1lBQy9DLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3ZCLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFZO29CQUM1QixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQ2hDLENBQUMsQ0FBQyxDQUFBO2FBQ0g7WUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBYTthQUN0QyxDQUFDLENBQUE7UUFDSixDQUFDO0tBQ0Y7SUFDRCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsRUFBYztLQUN0QjtJQUNELE9BQU8sRUFBRTtRQUNQLFlBQVksRUFBRSxVQUFVLENBQU07WUFDNUIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFBO1lBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsTUFBTSxFQUFFLEdBQUc7YUFDWixDQUFDLENBQUE7UUFDSixDQUFDO1FBQ0QsYUFBYSxFQUFiLFVBQWMsU0FBaUIsRUFBRSxRQUFhO1lBQzVDLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3ZCLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFZO29CQUM1QixPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFBO2dCQUNsQyxDQUFDLENBQUMsQ0FBQTthQUNIO1FBQ0gsQ0FBQztRQUNELE1BQU0sRUFBTixVQUFPLEdBQVE7WUFDYixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUNqQyxDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyB9XHJcbmxldCB0aXRsZTogc3RyaW5nW10gPSBbXVxyXG5sZXQgZWxlbWVudHM6IGFueVxyXG5Db21wb25lbnQoe1xyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgIGFjdGl2ZToge1xyXG4gICAgICB0eXBlOiBOdW1iZXJcclxuICAgIH1cclxuICB9LFxyXG4gIHJlbGF0aW9uczoge1xyXG4gICAgJy4uL3RhYi9pbmRleCc6IHtcclxuICAgICAgdHlwZTogJ2NoaWxkJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcGFnZUxpZmV0aW1lczoge1xyXG4gICAgc2hvdygpIHtcclxuICAgICAgZWxlbWVudHMgPSB0aGlzLmdldFJlbGF0aW9uTm9kZXMoJy4uL3RhYi9pbmRleCcpXHJcbiAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggIT0gdGl0bGUubGVuZ3RoKSB0aXRsZSA9IFtdXHJcbiAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudDogYW55KSA9PiB7XHJcbiAgICAgICAgICB0aXRsZS5wdXNoKGVsZW1lbnQuZGF0YS50aXRsZSlcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgdGl0bGU6IHRoaXMudW5pcXVlKHRpdGxlKSBhcyBzdHJpbmdbXSxcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgfSxcclxuICBkYXRhOiB7XHJcbiAgICB0aXRsZTogW10gYXMgc3RyaW5nW11cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGNoYW5nZUhhbmRsZTogZnVuY3Rpb24gKGU6IGFueSkge1xyXG4gICAgICB2YXIgaWR4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWR4O1xyXG4gICAgICB0aGlzLmNoYW5nZUN1cnJlbnQoaWR4LCBlbGVtZW50cylcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBhY3RpdmU6IGlkeFxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIGNoYW5nZUN1cnJlbnQoYWN0aXZlS2V5OiBudW1iZXIsIGVsZW1lbnRzOiBhbnkpIHtcclxuICAgICAgaWYgKGVsZW1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50OiBhbnkpID0+IHtcclxuICAgICAgICAgIGVsZW1lbnQuY2hhbmdlQ3VycmVudChhY3RpdmVLZXkpXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVuaXF1ZShhcnI6IGFueSkge1xyXG4gICAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KGFycikpXHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG4iXX0=
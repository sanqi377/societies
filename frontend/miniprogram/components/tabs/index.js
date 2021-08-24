"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var title = [];
Component({
    properties: {
        active: {
            type: Number
        },
    },
    relations: {
        '../tab/index': {
            type: 'child',
            linked: function (e) {
                title.push(e.data.title);
            }
        }
    },
    pageLifetimes: {
        show: function () {
            this.setData({
                title: title
            });
        },
    },
    data: {
        title: []
    },
    methods: {
        changeHandle: function (e) {
            var idx = e.currentTarget.dataset.idx;
            var elements = this.getRelationNodes('../tab/index');
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
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLElBQUksS0FBSyxHQUFhLEVBQUUsQ0FBQztBQUN6QixTQUFTLENBQUM7SUFDUixVQUFVLEVBQUU7UUFDVixNQUFNLEVBQUU7WUFDTixJQUFJLEVBQUUsTUFBTTtTQUNiO0tBQ0Y7SUFDRCxTQUFTLEVBQUU7UUFDVCxjQUFjLEVBQUU7WUFDZCxJQUFJLEVBQUUsT0FBTztZQUNiLE1BQU0sWUFBQyxDQUFDO2dCQUNOLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQixDQUFDO1NBQ0Y7S0FDRjtJQUNELGFBQWEsRUFBRTtRQUNiLElBQUk7WUFDRixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLEtBQUssRUFBRSxLQUFLO2FBQ2IsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztLQUNGO0lBQ0QsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLEVBQWM7S0FDdEI7SUFDRCxPQUFPLEVBQUU7UUFDUCxZQUFZLEVBQUUsVUFBVSxDQUFNO1lBQzVCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUN0QyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLENBQUE7WUFDdEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUE7WUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxNQUFNLEVBQUUsR0FBRzthQUNaLENBQUMsQ0FBQTtRQUNKLENBQUM7UUFDRCxhQUFhLEVBQWIsVUFBYyxTQUFpQixFQUFFLFFBQWE7WUFDNUMsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDdkIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQVk7b0JBQzVCLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUE7Z0JBQ2xDLENBQUMsQ0FBQyxDQUFBO2FBQ0g7UUFDSCxDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyB9XHJcbnZhciB0aXRsZTogc3RyaW5nW10gPSBbXTtcclxuQ29tcG9uZW50KHtcclxuICBwcm9wZXJ0aWVzOiB7XHJcbiAgICBhY3RpdmU6IHtcclxuICAgICAgdHlwZTogTnVtYmVyXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcmVsYXRpb25zOiB7XHJcbiAgICAnLi4vdGFiL2luZGV4Jzoge1xyXG4gICAgICB0eXBlOiAnY2hpbGQnLFxyXG4gICAgICBsaW5rZWQoZSkge1xyXG4gICAgICAgIHRpdGxlLnB1c2goZS5kYXRhLnRpdGxlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcGFnZUxpZmV0aW1lczoge1xyXG4gICAgc2hvdygpIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB0aXRsZTogdGl0bGVcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZGF0YToge1xyXG4gICAgdGl0bGU6IFtdIGFzIHN0cmluZ1tdXHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBjaGFuZ2VIYW5kbGU6IGZ1bmN0aW9uIChlOiBhbnkpIHtcclxuICAgICAgdmFyIGlkeCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkeDtcclxuICAgICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLmdldFJlbGF0aW9uTm9kZXMoJy4uL3RhYi9pbmRleCcpXHJcbiAgICAgIHRoaXMuY2hhbmdlQ3VycmVudChpZHgsIGVsZW1lbnRzKVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGFjdGl2ZTogaWR4XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgY2hhbmdlQ3VycmVudChhY3RpdmVLZXk6IG51bWJlciwgZWxlbWVudHM6IGFueSkge1xyXG4gICAgICBpZiAoZWxlbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgZWxlbWVudC5jaGFuZ2VDdXJyZW50KGFjdGl2ZUtleSlcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH1cclxufSlcclxuIl19
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var title = [];
var elements;
Component({
    properties: {
        title: {
            type: String
        }
    },
    relations: {
        '../tabs/index': {
            type: 'parent'
        }
    },
    pageLifetimes: {
        show: function () {
            var _this = this;
            elements = this.getRelationNodes('../tabs/index');
            if (elements.length > 0) {
                elements.forEach(function (element) {
                    title = element.data.title;
                    _this.setData({
                        active: element.data.active
                    });
                });
            }
            this.setData({
                titles: this.unique(title),
            });
        }
    },
    data: {
        active: 0,
        titles: [],
    },
    methods: {
        changeCurrent: function (activeKey) {
            this.setData({
                active: activeKey,
            });
        },
        unique: function (arr) {
            return Array.from(new Set(arr));
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLElBQUksS0FBSyxHQUFhLEVBQUUsQ0FBQztBQUN6QixJQUFJLFFBQWEsQ0FBQTtBQUNqQixTQUFTLENBQUM7SUFDUixVQUFVLEVBQUU7UUFDVixLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUUsTUFBTTtTQUNiO0tBQ0Y7SUFDRCxTQUFTLEVBQUU7UUFDVCxlQUFlLEVBQUU7WUFDZixJQUFJLEVBQUUsUUFBUTtTQUNmO0tBQ0Y7SUFDRCxhQUFhLEVBQUU7UUFDYixJQUFJLEVBQUo7WUFBQSxpQkFhQztZQVpDLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUE7WUFDakQsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDdkIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQVk7b0JBQzVCLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQTtvQkFDMUIsS0FBSSxDQUFDLE9BQU8sQ0FBQzt3QkFDWCxNQUFNLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNO3FCQUM1QixDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUE7YUFDSDtZQUNELElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFhO2FBQ3ZDLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FDRjtJQUNELElBQUksRUFBRTtRQUNKLE1BQU0sRUFBRSxDQUFDO1FBQ1QsTUFBTSxFQUFFLEVBQWM7S0FDdkI7SUFDRCxPQUFPLEVBQUU7UUFDUCxhQUFhLEVBQWIsVUFBYyxTQUFpQjtZQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLE1BQU0sRUFBRSxTQUFTO2FBQ2xCLENBQUMsQ0FBQTtRQUNKLENBQUM7UUFDRCxNQUFNLEVBQU4sVUFBTyxHQUFRO1lBQ2IsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDakMsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgfVxyXG5sZXQgdGl0bGU6IHN0cmluZ1tdID0gW107XHJcbmxldCBlbGVtZW50czogYW55XHJcbkNvbXBvbmVudCh7XHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgdGl0bGU6IHtcclxuICAgICAgdHlwZTogU3RyaW5nXHJcbiAgICB9XHJcbiAgfSxcclxuICByZWxhdGlvbnM6IHtcclxuICAgICcuLi90YWJzL2luZGV4Jzoge1xyXG4gICAgICB0eXBlOiAncGFyZW50J1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcGFnZUxpZmV0aW1lczoge1xyXG4gICAgc2hvdygpIHtcclxuICAgICAgZWxlbWVudHMgPSB0aGlzLmdldFJlbGF0aW9uTm9kZXMoJy4uL3RhYnMvaW5kZXgnKVxyXG4gICAgICBpZiAoZWxlbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGl0bGUgPSBlbGVtZW50LmRhdGEudGl0bGVcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIGFjdGl2ZTogZWxlbWVudC5kYXRhLmFjdGl2ZVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHRpdGxlczogdGhpcy51bmlxdWUodGl0bGUpIGFzIHN0cmluZ1tdLFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGF0YToge1xyXG4gICAgYWN0aXZlOiAwLFxyXG4gICAgdGl0bGVzOiBbXSBhcyBzdHJpbmdbXSxcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGNoYW5nZUN1cnJlbnQoYWN0aXZlS2V5OiBudW1iZXIpIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBhY3RpdmU6IGFjdGl2ZUtleSxcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICB1bmlxdWUoYXJyOiBhbnkpIHtcclxuICAgICAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldChhcnIpKVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuIl19
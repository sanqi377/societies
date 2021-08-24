"use strict";
var title = [];
var active = 0;
Component({
    properties: {
        title: {
            type: String
        }
    },
    relations: {
        '../tabs/index': {
            type: 'parent',
            linked: function (e) {
                title.push(this.data.title);
                active = e.data.active;
            }
        }
    },
    pageLifetimes: {
        show: function () {
            this.setData({
                titles: title,
                active: active
            });
        },
    },
    data: {
        active: active,
        titles: [],
    },
    methods: {
        changeCurrent: function (activeKey) {
            this.setData({
                active: activeKey,
            });
        },
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxLQUFLLEdBQWEsRUFBRSxDQUFDO0FBQ3pCLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQTtBQUNkLFNBQVMsQ0FBQztJQUNSLFVBQVUsRUFBRTtRQUNWLEtBQUssRUFBRTtZQUNMLElBQUksRUFBRSxNQUFNO1NBQ2I7S0FDRjtJQUNELFNBQVMsRUFBRTtRQUNULGVBQWUsRUFBRTtZQUNmLElBQUksRUFBRSxRQUFRO1lBQ2QsTUFBTSxZQUFDLENBQUM7Z0JBQ04sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM1QixNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUE7WUFDeEIsQ0FBQztTQUNGO0tBQ0Y7SUFDRCxhQUFhLEVBQUU7UUFDYixJQUFJO1lBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxNQUFNLEVBQUUsS0FBSztnQkFDYixNQUFNLFFBQUE7YUFDUCxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQ0Y7SUFDRCxJQUFJLEVBQUU7UUFDSixNQUFNLFFBQUE7UUFDTixNQUFNLEVBQUUsRUFBYztLQUN2QjtJQUNELE9BQU8sRUFBRTtRQUNQLGFBQWEsRUFBYixVQUFjLFNBQWlCO1lBQzdCLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsTUFBTSxFQUFFLFNBQVM7YUFDbEIsQ0FBQyxDQUFBO1FBQ0osQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHRpdGxlOiBzdHJpbmdbXSA9IFtdO1xyXG5sZXQgYWN0aXZlID0gMFxyXG5Db21wb25lbnQoe1xyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmVsYXRpb25zOiB7XHJcbiAgICAnLi4vdGFicy9pbmRleCc6IHtcclxuICAgICAgdHlwZTogJ3BhcmVudCcsXHJcbiAgICAgIGxpbmtlZChlKSB7XHJcbiAgICAgICAgdGl0bGUucHVzaCh0aGlzLmRhdGEudGl0bGUpO1xyXG4gICAgICAgIGFjdGl2ZSA9IGUuZGF0YS5hY3RpdmVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcGFnZUxpZmV0aW1lczoge1xyXG4gICAgc2hvdygpIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB0aXRsZXM6IHRpdGxlLFxyXG4gICAgICAgIGFjdGl2ZVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgfSxcclxuICBkYXRhOiB7XHJcbiAgICBhY3RpdmUsXHJcbiAgICB0aXRsZXM6IFtdIGFzIHN0cmluZ1tdLFxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgY2hhbmdlQ3VycmVudChhY3RpdmVLZXk6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGFjdGl2ZTogYWN0aXZlS2V5LFxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICB9XHJcbn0pXHJcbiJdfQ==
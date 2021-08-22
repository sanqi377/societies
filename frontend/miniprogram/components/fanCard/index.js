"use strict";
Component({
    properties: {
        info: {
            type: Array
        }
    },
    data: {},
    methods: {
        goInfo: function (e) {
            wx.navigateTo({
                url: "/pages/societies/info/index?id=" + e.currentTarget.dataset.id
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsU0FBUyxDQUFDO0lBSVIsVUFBVSxFQUFFO1FBQ1YsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFLEtBQUs7U0FDWjtLQUNGO0lBS0QsSUFBSSxFQUFFLEVBRUw7SUFLRCxPQUFPLEVBQUU7UUFDUCxNQUFNLEVBQU4sVUFBTyxDQUFNO1lBQ1gsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDWixHQUFHLEVBQUUsaUNBQWlDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRTthQUNwRSxDQUFDLENBQUE7UUFDSixDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB7e2NvbXBvbmVudH19LnRzXG5Db21wb25lbnQoe1xuICAvKipcbiAgICog57uE5Lu255qE5bGe5oCn5YiX6KGoXG4gICAqL1xuICBwcm9wZXJ0aWVzOiB7XG4gICAgaW5mbzoge1xuICAgICAgdHlwZTogQXJyYXlcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIOe7hOS7tueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOe7hOS7tueahOaWueazleWIl+ihqFxuICAgKi9cbiAgbWV0aG9kczoge1xuICAgIGdvSW5mbyhlOiBhbnkpIHtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IFwiL3BhZ2VzL3NvY2lldGllcy9pbmZvL2luZGV4P2lkPVwiICsgZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWRcbiAgICAgIH0pXG4gICAgfVxuICB9XG59KVxuIl19
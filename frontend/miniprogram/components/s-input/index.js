"use strict";
Component({
    properties: {
        placeholder: {
            type: String
        },
        icon: {
            type: String
        },
        type: {
            type: String
        },
        val: {
            type: String
        }
    },
    data: {},
    methods: {
        getVal: function (e) {
            var val = e.detail.value;
            this.triggerEvent('getValue', val);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBSVIsVUFBVSxFQUFFO1FBQ1YsV0FBVyxFQUFFO1lBQ1gsSUFBSSxFQUFFLE1BQU07U0FDYjtRQUNELElBQUksRUFBRTtZQUNKLElBQUksRUFBRSxNQUFNO1NBQ2I7UUFDRCxJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUsTUFBTTtTQUNiO1FBQ0QsR0FBRyxFQUFFO1lBQ0gsSUFBSSxFQUFFLE1BQU07U0FDYjtLQUNGO0lBS0QsSUFBSSxFQUFFLEVBQUU7SUFLUixPQUFPLEVBQUU7UUFDUCxNQUFNLEVBQUUsVUFBVSxDQUFNO1lBQ3RCLElBQUksR0FBRyxHQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFBO1lBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ3BDLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XG4gIC8qKlxuICAgKiDnu4Tku7bnmoTlsZ7mgKfliJfooahcbiAgICovXG4gIHByb3BlcnRpZXM6IHtcbiAgICBwbGFjZWhvbGRlcjoge1xuICAgICAgdHlwZTogU3RyaW5nXG4gICAgfSxcbiAgICBpY29uOiB7XG4gICAgICB0eXBlOiBTdHJpbmdcbiAgICB9LFxuICAgIHR5cGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZ1xuICAgIH0sXG4gICAgdmFsOiB7XG4gICAgICB0eXBlOiBTdHJpbmdcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIOe7hOS7tueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge30sXG5cbiAgLyoqXG4gICAqIOe7hOS7tueahOaWueazleWIl+ihqFxuICAgKi9cbiAgbWV0aG9kczoge1xuICAgIGdldFZhbDogZnVuY3Rpb24gKGU6IGFueSkge1xuICAgICAgbGV0IHZhbDogc3RyaW5nID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdnZXRWYWx1ZScsIHZhbClcbiAgICB9XG4gIH1cbn0pXG4iXX0=
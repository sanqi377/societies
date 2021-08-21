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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBSVIsVUFBVSxFQUFFO1FBQ1YsV0FBVyxFQUFFO1lBQ1gsSUFBSSxFQUFFLE1BQU07U0FDYjtRQUNELElBQUksRUFBRTtZQUNKLElBQUksRUFBRSxNQUFNO1NBQ2I7UUFDRCxJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUsTUFBTTtTQUNiO1FBQ0QsR0FBRyxFQUFFO1lBQ0gsSUFBSSxFQUFFLE1BQU07U0FDYjtLQUNGO0lBS0QsSUFBSSxFQUFFLEVBQUU7SUFLUixPQUFPLEVBQUU7UUFDUCxNQUFNLEVBQUUsVUFBVSxDQUFNO1lBQ3RCLElBQUksR0FBRyxHQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFBO1lBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ3BDLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XHJcbiAgLyoqXHJcbiAgICog57uE5Lu255qE5bGe5oCn5YiX6KGoXHJcbiAgICovXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgcGxhY2Vob2xkZXI6IHtcclxuICAgICAgdHlwZTogU3RyaW5nXHJcbiAgICB9LFxyXG4gICAgaWNvbjoge1xyXG4gICAgICB0eXBlOiBTdHJpbmdcclxuICAgIH0sXHJcbiAgICB0eXBlOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZ1xyXG4gICAgfSxcclxuICAgIHZhbDoge1xyXG4gICAgICB0eXBlOiBTdHJpbmdcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cclxuICAgKi9cclxuICBkYXRhOiB7fSxcclxuXHJcbiAgLyoqXHJcbiAgICog57uE5Lu255qE5pa55rOV5YiX6KGoXHJcbiAgICovXHJcbiAgbWV0aG9kczoge1xyXG4gICAgZ2V0VmFsOiBmdW5jdGlvbiAoZTogYW55KSB7XHJcbiAgICAgIGxldCB2YWw6IHN0cmluZyA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdnZXRWYWx1ZScsIHZhbClcclxuICAgIH1cclxuICB9XHJcbn0pXHJcbiJdfQ==
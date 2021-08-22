"use strict";
Component({
    properties: {
        type: {
            type: String
        },
        show: {
            type: Boolean
        }
    },
    data: {},
    methods: {},
    observers: {
        'show': function (show) {
            var _this = this;
            if (show) {
                setTimeout(function () {
                    _this.triggerEvent('changeShow', !show);
                }, 2000);
            }
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBSVIsVUFBVSxFQUFFO1FBQ1YsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFLE1BQU07U0FDYjtRQUNELElBQUksRUFBRTtZQUNKLElBQUksRUFBRSxPQUFPO1NBQ2Q7S0FDRjtJQUtELElBQUksRUFBRSxFQUVMO0lBS0QsT0FBTyxFQUFFLEVBRVI7SUFDRCxTQUFTLEVBQUU7UUFDVCxNQUFNLEVBQUUsVUFBVSxJQUFJO1lBQWQsaUJBTVA7WUFMQyxJQUFJLElBQUksRUFBRTtnQkFDUixVQUFVLENBQUM7b0JBQ1QsS0FBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDeEMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO2FBQ1Q7UUFDSCxDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJDb21wb25lbnQoe1xuICAvKipcbiAgICog57uE5Lu255qE5bGe5oCn5YiX6KGoXG4gICAqL1xuICBwcm9wZXJ0aWVzOiB7XG4gICAgdHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nXG4gICAgfSxcbiAgICBzaG93OiB7XG4gICAgICB0eXBlOiBCb29sZWFuXG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTmlrnms5XliJfooahcbiAgICovXG4gIG1ldGhvZHM6IHtcblxuICB9LFxuICBvYnNlcnZlcnM6IHtcbiAgICAnc2hvdyc6IGZ1bmN0aW9uIChzaG93KSB7XG4gICAgICBpZiAoc2hvdykge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnY2hhbmdlU2hvdycsICFzaG93KVxuICAgICAgICB9LCAyMDAwKVxuICAgICAgfVxuICAgIH1cbiAgfVxufSlcbiJdfQ==
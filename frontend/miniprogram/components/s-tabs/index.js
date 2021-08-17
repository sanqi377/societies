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
            this.triggerEvent('changeTabs', index);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBQ1IsVUFBVSxFQUFFO1FBQ1YsS0FBSyxFQUFFO1lBQ0wsSUFBSSxFQUFFLEtBQUs7U0FDWjtLQUNGO0lBS0QsSUFBSSxFQUFFLEVBRUw7SUFLRCxPQUFPLEVBQUU7UUFDUCxVQUFVLEVBQVYsVUFBVyxDQUFNO1lBQ2YsSUFBSSxLQUFLLEdBQVcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFBO1lBQzlDLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ3hDLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XG4gIHByb3BlcnRpZXM6IHtcbiAgICB0aXRsZToge1xuICAgICAgdHlwZTogQXJyYXlcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIOe7hOS7tueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOe7hOS7tueahOaWueazleWIl+ihqFxuICAgKi9cbiAgbWV0aG9kczoge1xuICAgIGNoYW5nZVRhYnMoZTogYW55KSB7XG4gICAgICBsZXQgaW5kZXg6IG51bWJlciA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkXG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnY2hhbmdlVGFicycsIGluZGV4KVxuICAgIH1cbiAgfVxufSlcbiJdfQ==
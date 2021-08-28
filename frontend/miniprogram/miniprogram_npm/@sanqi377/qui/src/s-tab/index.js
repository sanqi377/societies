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
        '../s-tabs/index': {
            type: 'parent'
        }
    },
    pageLifetimes: {
        show: function () {
            var _this = this;
            elements = this.getRelationNodes('../s-tabs/index');
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

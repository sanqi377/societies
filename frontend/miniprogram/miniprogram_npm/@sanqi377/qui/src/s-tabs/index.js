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
        '../s-tab/index': {
            type: 'child'
        }
    },
    pageLifetimes: {
        show: function () {
            elements = this.getRelationNodes('../s-tab/index');
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

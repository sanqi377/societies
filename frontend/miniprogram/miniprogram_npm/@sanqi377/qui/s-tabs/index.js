var title = [];
Component({
    properties: {
        active: {
            type: Number
        },
        direction: {
            type: String,
            value: 'top'
        }
    },
    relations: {
        '../s-tab/index': {
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
            var elements = this.getRelationNodes('../s-tab/index');
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

var title = [];
var active = 0;
Component({
    properties: {
        title: {
            type: String
        }
    },
    relations: {
        '../s-tabs/index': {
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

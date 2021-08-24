var title: string[] = [];
let active = 0
Component({
  properties: {
    title: {
      type: String
    }
  },
  relations: {
    '../tabs/index': {
      type: 'parent',
      linked(e) {
        title.push(this.data.title);
        active = e.data.active
      }
    }
  },
  pageLifetimes: {
    show() {
      this.setData({
        titles: title,
        active
      });
    },
  },
  data: {
    active,
    titles: [] as string[],
  },
  methods: {
    changeCurrent(activeKey: number) {
      this.setData({
        active: activeKey,
      })
    },
  }
})

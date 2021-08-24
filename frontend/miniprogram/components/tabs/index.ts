export { }
var title: string[] = [];
Component({
  properties: {
    active: {
      type: Number
    },
  },
  relations: {
    '../tab/index': {
      type: 'child',
      linked(e) {
        title.push(e.data.title);
      }
    }
  },
  pageLifetimes: {
    show() {
      this.setData({
        title: title
      });
    },
  },
  data: {
    title: [] as string[]
  },
  methods: {
    changeHandle: function (e: any) {
      var idx = e.currentTarget.dataset.idx;
      const elements = this.getRelationNodes('../tab/index')
      this.changeCurrent(idx, elements)
      this.setData({
        active: idx
      })
    },
    changeCurrent(activeKey: number, elements: any) {
      if (elements.length > 0) {
        elements.forEach((element: any) => {
          element.changeCurrent(activeKey)
        })
      }
    },
  }
})

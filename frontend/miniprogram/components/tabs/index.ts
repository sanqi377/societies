export { }
let title: string[] = []
let elements: any
Component({
  properties: {
    active: {
      type: Number
    }
  },
  relations: {
    '../tab/index': {
      type: 'child'
    }
  },
  pageLifetimes: {
    show() {
      elements = this.getRelationNodes('../tab/index')
      if (elements.length != title.length) title = []
      if (elements.length > 0) {
        elements.forEach((element: any) => {
          title.push(element.data.title)
        })
      }
      this.setData({
        title: this.unique(title) as string[],
      })
    },
  },
  data: {
    title: [] as string[]
  },
  methods: {
    changeHandle: function (e: any) {
      var idx = e.currentTarget.dataset.idx;
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
    unique(arr: any) {
      return Array.from(new Set(arr))
    }
  }
})

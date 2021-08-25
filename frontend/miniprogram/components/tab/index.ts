export { }
let title: string[] = [];
let elements: any
Component({
  properties: {
    title: {
      type: String
    }
  },
  relations: {
    '../tabs/index': {
      type: 'parent'
    }
  },
  pageLifetimes: {
    show() {
      elements = this.getRelationNodes('../tabs/index')
      if (elements.length > 0) {
        elements.forEach((element: any) => {
          title = element.data.title
          this.setData({
            active: element.data.active
          });
        })
      }
      this.setData({
        titles: this.unique(title) as string[],
      })
    }
  },
  data: {
    active: 0,
    titles: [] as string[],
  },
  methods: {
    changeCurrent(activeKey: number) {
      this.setData({
        active: activeKey,
      })
    },
    unique(arr: any) {
      return Array.from(new Set(arr))
    }
  }
})

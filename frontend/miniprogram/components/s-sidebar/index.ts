Component({
  properties: {
    title: {
      type: Array
    }
  },
  data: {

  },
  methods: {
    /**
     * 获取 title index 传给父组件
     */
    changeTabs(e: any) {
      let index: number = e.currentTarget.dataset.id
      this.triggerEvent('changeTabs', index)
    }
  }
})

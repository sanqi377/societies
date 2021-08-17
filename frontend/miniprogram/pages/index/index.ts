Page({
  data: {
    swiper: [
      {
        url: '../../public/img/swiper-1.jpg'
      }
    ],
    tabsTitle: [
      {
        title: '全部',
        active: 1
      },
      {
        title: '我加入的',
        active: 0
      },
      {
        title: '我关注的',
        active: 0
      }
    ]
  },
  /**
   * 改变 tabs 标题栏切换状态
   */
  changeTabs(e: any) {
    let index: number = e.detail
    let data = this.data.tabsTitle
    data.forEach((item, idx) => {
      item.active = 0
      if (idx === index) item.active = 1
    })
    this.setData({
      tabsTitle: data
    })
  }
})

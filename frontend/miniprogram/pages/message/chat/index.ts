export { }
const { getFont } = require('../../../utils/util')
const { io, monitor } = getApp().globalData
Page({
  data: {
    data: {
      text: '', // 消息,
      send: '', // 发送人
      accept: '', // 接收人
      type: 'private', // 消息类型
      create_time: 0
    },
    message: [] as string[]
  },

  /**
   * 获取输入框内容
   * @param e 
   */
  getInput(e: any) {
    this.setData({
      ['data.text']: e.detail.value
    })
  },

  /**
   * 发送消息
   */
  send() {
    this.setData({
      ['data.create_time']: Date.parse((new Date()) as any) / 1000
    })
    io.send({
      data: JSON.stringify(this.data.data),
      success: () => {
        this.setData({
          ['data.text']: ''
        })
      }
    })
  },

  onLoad(e) {
    this.setData({
      ['data.accept']: e.accept,
      ['data.send']: e.send
    })

    /**
     * 监听服务端消息返回
     */
    let arr: string[] = []
    monitor((res: any) => {
      let msg = JSON.parse(res)
      if (msg.send === this.data.data.send && msg.accept === this.data.data.accept) {
        arr.push(msg)
        this.setData({
          message: arr
        })
      }
      if (msg.send === this.data.data.accept && msg.accept === this.data.data.send) {
        arr.push(msg)
        this.setData({
          message: arr
        })
      }
    })

    /**
     * 加载网络字体
     */
    getFont()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    // wlecome({ send: this.data.data.send, type: 'welcome' })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
export { }
const { ajax } = require('../../../utils/util')
const { io, monitor } = getApp().globalData
Page({
  data: {
    data: {
      message: '', // 消息,
      send: '', // 发送人
      accept: '', // 接收人
      type: 'private', // 消息类型
      create_time: 0,
      fid: 0
    },
    info: {
      s_avatar: '',
      a_avatar: '',
      a_name: ''
    },
    uid: 0,
    message: [] as string[]
  },

  /**
   * 获取输入框内容
   * @param e 
   */
  getInput(e: any) {
    this.setData({
      ['data.message']: e.detail.value
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
          ['data.message']: ''
        })
      }
    })
  },

  onLoad(e) {
    let uid = wx.getStorageSync('uid')
    this.setData({
      ['data.accept']: e.accept,
      ['data.send']: e.send,
      ['data.fid']: e.fid,
    }, () => {
      let send = uid == this.data.data.send ? this.data.data.send : this.data.data.accept
      let accept = uid == this.data.data.send ? this.data.data.accept : this.data.data.send
      ajax('message/getAvatar', { uid: send, accept }).then((res: any) => {
        this.setData({
          ['info.s_avatar']: res.data.data.s_avatar,
          ['info.a_avatar']: res.data.data.a_avatar,
          ['info.a_name']: res.data.data.a_name
        })
      })
      ajax('message/updateUnread', { fid: this.data.data.fid, send: this.data.data.send })
    })
    /**
     * 监听服务端消息返回
     */
    monitor((res: any) => {
      let msg = JSON.parse(res)
      console.log(msg)
      if (msg.send === this.data.data.send && msg.accept === this.data.data.accept) {
        this.data.message.push(msg)
        this.setData({
          message: this.data.message,
        }, () => {
          let toView = `msg-${this.data.message.length - 1}`
          this.setData({
            toView
          })
        })
      }
      if (msg.send === this.data.data.accept && msg.accept === this.data.data.send) {
        this.data.message.push(msg)
        this.setData({
          message: this.data.message,
        }, () => {
          let toView = `msg-${this.data.message.length - 1}`
          this.setData({
            toView
          })
        })
      }
      ajax('message/updateUnread', { fid: this.data.data.fid, send: this.data.data.send })
    })
  },

  /**
   * 获取历史消息
   */
  getHistoryMsg() {
    ajax('message/getHistoryMsg', { fid: this.data.data.fid }).then((res: any) => {
      this.setData({
        message: res.data.data
      }, () => {
        let toView = `msg-${res.data.data.length - 1}`
        this.setData({
          toView
        })
      })
    })
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
    this.getHistoryMsg()
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
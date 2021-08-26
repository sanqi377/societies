export { }
const { getFont, ajax, formatMsgTime } = require('../../../utils/util')
const { wlecome, monitor, io } = getApp().globalData
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    uid: 0,
    online: []
  },

  /**
   * 跳转私聊页面
   */
  goChat(e: any) {
    let send = e.currentTarget.dataset.send
    let accept = e.currentTarget.dataset.accept
    let fid = e.currentTarget.dataset.fid
    wx.navigateTo({
      url: `/pages/message/chat/index?send=${send}&accept=${accept}&fid=${fid}`
    })
  },

  /**
   * 首次进入请求更新消息列表
   */
  updateMessage() {
    console.log('更新消息列表')
    let _this = this
    ajax('http://localhost:3000/index/message/getSession', { uid: this.data.uid }).then((res: any) => {
      res.data.data.forEach((item: any) => {
        item.last_datetime = formatMsgTime(item.last_datetime * 1000)
      })
      _this.setData({
        list: res.data.data
      }, () => {
        this.getOnline()
      })
    })
  },

  /**
   * 获取会话列表对象在线状态
   */
  getOnline() {
    let users: string[] = []
    this.data.list.forEach((item: any) => {
      if (this.data.uid == item.uid) {
        users.push(item.accept)
      }
      if (this.data.uid == item.accept) {
        users.push(item.uid)
      }
    })
    let data = { type: 'getOnline', data: users }
    io.send({
      data: JSON.stringify(data),
      success: () => {
        console.log('请求在线状态成功')
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(e) {
    this.setData({
      uid: e.uid as any,
    })

    /**
     * 加载网络字体
     */
    getFont()

    /**
     * 监听服务端消息返回
     */
    monitor((res: any) => {
      let msg = JSON.parse(res)
      console.log(msg)
      switch (msg.type) {
        case 'getOnline':
          this.setData({
            online: msg.data
          })
          break;
        case 'offLine':
          this.data.online.forEach((el: any, index) => {
            if (el == msg.data) this.data.online.splice(index, 1)
          })
          this.setData({
            online: this.data.online
          }, () => {
            this.data.list.forEach((item: any) => {
              item.online = false
              this.data.online.forEach((el: any) => {
                if (this.data.uid == item.uid) {
                  console.log(item.accept, el)
                  if (item.accept == el) item.online = true
                } else {
                  console.log(item.uid, el)
                  if (item.uid == el) item.online = true
                }
              })
            })
            this.setData({
              list: this.data.list
            })
          })
          break
        default:
          break;
      }
      this.data.list.forEach((item: any) => {
        if (msg.fid == item.id) {
          console.log(item, msg)
          item.last_message = msg.message
          item.last_datetime = formatMsgTime(msg.create_time * 1000)
          if (item.accept == msg.accept && item.uid == msg.send) {
            item.a_unread += 1
          } else {
            item.u_unread += 1
          }
          ajax('http://localhost:3000/index/message/updateUnread', { fid: item.id, u_unread: item.u_unread, a_unread: item.a_unread })
        }
      })
      this.setData({
        list: this.data.list
      }, () => {
        this.data.list.forEach((item: any) => {
          this.data.online.forEach((el: any) => {
            if (this.data.uid == item.uid) {
              if (item.accept == el) item.online = true
            } else {
              if (item.uid == el) item.online = true
            }
          })
        })
        this.setData({
          list: this.data.list
        })
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wlecome({ send: this.data.uid, type: 'welcome' })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
      })
    }
    this.updateMessage()
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
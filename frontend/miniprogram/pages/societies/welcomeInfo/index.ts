export { }
const { getFont, ajax } = require('../../../utils/util')
const app = getApp()
let id: number
const { $Notify } = require('@sanqi377/qui/s-notify/notify')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    interduce: '',
    info: {
      apply: 2
    }
  },

  back() {
    wx.navigateBack()
  },

  getValue(e: any) {
    this.setData({
      interduce: e.detail.value
    })
  },

  apply() {
    if (this.data.info.apply != 2) return
    if (this.data.interduce == '') {
      $Notify({
        type: 'error',
        content: '请填写自我介绍'
      })
      return
    }
    let data = {
      uid: app.globalData.uid,
      societies: id,
      introduce: this.data.interduce,
      status: 0,
      apply_time: Date.parse((new Date() as any)) / 1000
    }
    ajax('http://localhost:3000/index/societies/applySocieties', data).then((res: any) => {
      if (res.data.ret === 200) {
        $Notify({
          type: 'success',
          content: res.data.data.msg
        })
      } else {
        $Notify({
          type: 'warning',
          content: res.data.data.msg
        })
      }
      this.setData({
        ['info.apply']: 0
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(e: any) {
    id = e.id
    let _this = this
    getFont().then((res: boolean) => {
      if (res) {
        _this.setData({
          show: true
        })
      }
    })
    ajax('http://localhost:3000/index/societies/getSocietiesInfo', { id, uid: app.globalData.uid }).then((res: any) => {
      _this.setData({
        info: res.data.data
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

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
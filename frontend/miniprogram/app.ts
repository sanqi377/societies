export { }
let io = wx.connectSocket({
  // url: 'wss://wss.zhouwaizai.club/wss',
  url: 'ws://localhost:3001',
  success: () => {
    console.log('socket 连接成功')
  }
})

let hostId = 0

const { $Notify } = require('@sanqi377/qui/s-notify/notify')
const { $Dialog } = require('@sanqi377/qui/s-dialog/dialog')
const { ajax } = require('./utils/util')

App<IAppOption>({
  globalData: {
    io,
    monitor(callback: any) {
      io.onMessage(res => {
        callback(res.data)
      })
    },
    wlecome(info: any) {
      io.send({
        data: JSON.stringify(info),
        success: () => {
          hostId = info.send
          console.log(`绑定主机信息成功：主机号为${info.send}`)
        }
      })
    },
    uid: wx.getStorageSync('uid'),
    /**
     * 全局关注
     * @param data 
     */
    subscribe(data: object) {
      return new Promise((resolve) => {
        ajax('user/subscribe', data).then((res: any) => {
          if (res.data.ret === 200) {
            resolve(res)
            $Notify({
              type: 'success',
              content: res.data.msg
            })
          } else {
            $Notify({
              type: 'error',
              content: res.data.msg
            })
          }
        })
      })
    },
    /**
     * 全局取消关注
     */
    unSubscribe({ data, success, error }: unSubscribe) {
      $Dialog({
        title: '温馨提示',
        message: '你确定要取消关注吗？',
        showCancelButton: true
      }).then(() => {
        ajax('user/cancelSubscribe', data).then((res: any) => {
          if (res.data.ret === 200) {
            $Notify({
              type: 'warning',
              content: res.data.msg
            })
          } else {
            $Notify({
              type: 'error',
              content: res.data.msg
            })
          }
          success()
        })
      }).catch(() => {
        error()
      })
    }
  },
  onLaunch() {
    wx.onSocketOpen(() => {
      console.log('监听到 WebSocket 连接已打开！');
    })
    io.onOpen(() => {
      console.log('连接打开成功');
    });
  },
  onHide() {
    io.send({
      data: JSON.stringify({ type: 'offLine', hostId }),
      success: () => {
        io.close({})
        console.log(`主机下线成功：主机号为${hostId}`)
      }
    })
  }
})
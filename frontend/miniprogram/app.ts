export { }
let io = wx.connectSocket({
  url: 'ws://127.0.0.1:3001',
  success: () => {
    console.log('socket 连接成功')
  }
})

let hostId = 0

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
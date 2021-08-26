export { }

const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3001 });

let Buffer = require('buffer').Buffer

const { db } = require('./mysqlInit')

let clients: string[] = []

/**
 * 数组去重
 *
 * @param {*} arr
 * @return {*} 
 */
let unique = (arr: any) => {
  return Array.from(new Set(arr))
}

/**
 * 新增消息
 */
let addMessage = (data: any) => {
  console.log(data)
  // 更新会话信息
  db('s_session').where({ uid: data.send, accept: data.accept }).update({ last_message: data.message, last_datetime: data.create_time })
  db('s_session').where({ uid: data.accept, accept: data.send }).update({ last_message: data.message, last_datetime: data.create_time })
  // 新增消息
  db('s_message').insert(data)
}

module.exports = {
  init: () => {
    wss.on('connection', function connection(client: any, req: any) {
      client.on('message', function incoming(data: any) {
        data = JSON.parse(Buffer.from(data).toString('utf-8'))
        switch (data.type) {
          // 连接主机
          case 'welcome':
            client.id = data.send // 保存链接到的主机唯一标识
            clients.push(data.send) // 将标识 push 进数组
            clients = unique(clients) as string[] // 标识数组去重
            console.log(`连接主机${data.send}成功`)
            break

          // 私聊
          case 'private':
            addMessage(data)
            wss.clients.forEach(function each(client: any) { // 给发送方及接收方广播消息
              if (data.send === client.id) client.send(JSON.stringify(data))
              if (data.accept === client.id) client.send(JSON.stringify(data))
            })
            break;

          default:
            break;
        }
      })
    })
  }
}
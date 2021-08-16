var { query } = require('../../util/mysqlInit')
module.exports = {
  getInfo() {
    return query('test', '', 'id=1')
  }
}
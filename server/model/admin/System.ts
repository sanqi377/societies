var { query } = require('../../util/mysqlInit')
module.exports = {
  getMenu() {
    return query('s_menu', '', '')
  }
}
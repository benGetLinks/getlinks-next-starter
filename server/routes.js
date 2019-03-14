const routes = require('next-routes')

module.exports = routes()
  .add('home', '/', 'index')
  .add('user', '/user/:id', 'user')
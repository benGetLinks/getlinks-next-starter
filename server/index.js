const next = require('next')
const routes = require('./routes')
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handler = routes.getRequestHandler(app, ({
  req,
  res,
  route,
  query
}) => {
  app.render(req, res, route.page, query)
})

const express = require('express')
const port = 9000

app.prepare().then(() => {
  const server = express()

  server.get('/', (req, res) => {
    return app.render(req, res, '/', req.query)
  })

  server.get('/user', (req, res) => {
    return app.render(req, res, '/user', req.query)
  })

  server.get('/user/:id', (req, res) => {
    return app.render(req, res, '/user', { id: req.params.id })
  })

  server.get('*', (req, res) => {
    return handler(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })


const express = require('express')
const next = require('next')
const nextI18NextMiddleware = require('next-i18next/middleware').default

const nextI18next = require('./i18n')

const port = process.env.PORT || 3000
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handle = app.getRequestHandler();

var favicon = require('serve-favicon');
var path = require('path');

(async () => {
  await app.prepare()
  const server = express()

  // server.use('/static/', express.static(path.join(__dirname, './public')))
  // server.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
  server.use(favicon(path.join(__dirname, "public", "favicon.ico")));

  server.use(nextI18NextMiddleware(nextI18next))

  server.get('*', (req, res) => handle(req, res))

  
  await server.listen(port)
  console.log(`> Ready on http://localhost:${port}`) // eslint-disable-line no-console
})()
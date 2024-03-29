const express = require('express')
const cors = require('cors')
// const passport = require('passport')
const { config } = require('./config/config')
const routerApi = require('./routes')

const app = express()
const port = config.port || 3000

const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler')

app.use(express.json())

// const whitelist = [config.frontendUrl, config.localhost]

// const options = {
//   origin: (origin, callback) => {
//     if (whitelist.includes(origin) || !origin) {
//       callback(null, true)
//     } else {
//       callback(new Error('No estas autorizado'))
//     }
//   }
// }
app.use(cors({ origin: 'local' }))

// require('./utils/auth')
// app.use(passport.initialize())

routerApi(app)

app.use(logErrors)
app.use(ormErrorHandler)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

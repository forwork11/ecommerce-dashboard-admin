// require('dotenv').config()
// require('./utils/db')
// const express = require('express')
// const cors = require('cors')
// const auth = require('./middleware/auth');
// const API = require('./constants/api')
// const productsRoute = require('./routes/Products')
// const loginRoute = require('./routes/Login')
// const app = express()

// const corsOpts = {
//   origin: process.env.CORS_ORIGIN,
//   methods: process.env.CORS_METHOD,
// }
// app.use(cors(corsOpts))
// app.use(express.json())
// app.use(API.PRODUCTS, auth, productsRoute)
// app.use(API.LOGIN, loginRoute)

// app.listen(process.env.PORT, () => {
//   console.log(`Listening on port ${process.env.PORT}`)
// })
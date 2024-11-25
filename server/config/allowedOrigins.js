require('dotenv').config()

const allowedOrigins = [
    'http://localhost:3000',
    process.env.BASE_URL_PROD // Add your frontend origin here
]

module.exports = allowedOrigins
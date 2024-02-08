const dotenv = require('dotenv')

// Load env vars if env is not production
if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: './server/config/local.env' })
}

module.exports = {
  PORT: process.env.PORT || 7777,
  JWT_SECRET: process.env.JWT_SECRET,
  MONGO_URI: process.env.MONGO_URI,
  NODE_ENV: process.env.NODE_ENV,
  JWT_TOKEN_EXPIRES_IN: process.env.JWT_TOKEN_EXPIRES_IN,
  INITIAL_CHIPS_AMOUNT: 100000,
  BASE_BSCSCAN_API_URL: process.env.BASE_BSCSCAN_API_URL,
  BSCSCAN_API_KEY: process.env.BSCSCAN_API_KEY
  }

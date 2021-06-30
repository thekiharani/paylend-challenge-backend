import dotenv from 'dotenv'
dotenv.config()

// db connection
export const DB_CONNECTION = {
  host: process.env.DB_HOST || '127.0.0.1',
  user: process.env.DB_USERNAME || '',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'my_db',
}

// mail connection
export const MAILER_CONNECTION = {
  driver: process.env.MAILER_DRIVER || 'SMTP',
  host: process.env.SMTP_HOST || '',
  port: process.env.SMTP_PORT || 587,
  username: process.env.SMTP_USERNAME || '',
  password: process.env.SMTP_PASSWORD || '',
  encrypted: process.env.SMTP_ENCRYPTED === 'true' || false,
  fromAddress: process.env.SMTP_FROM_ADDRESS || '',
}

export const APP_PORT = process.env.APP_PORT || 8200
export const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY

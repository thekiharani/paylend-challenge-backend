// import { knexSnakeCaseMappers } from 'objection'
import { DB_CONNECTION } from './config.js'

export default {
  client: 'postgresql',
  connection: DB_CONNECTION,
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    directory: './database/migrations',
    tableName: 'migrations',
  },
  seeds: {
    directory: './database/seeds',
  },

}

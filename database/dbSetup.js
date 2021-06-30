import knex from 'knex'
import knexfile from '../knexfile.js'
import { Model } from 'objection'

const dbSetup = () => {
  const db = knex(knexfile)
  Model.knex(db)
}

export default dbSetup

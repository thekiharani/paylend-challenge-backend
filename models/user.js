import { Model } from 'objection'

class User extends Model {
  static get tableName() {
    return 'users'
  }

  $formatJson(json) {
    json = super.$formatJson(json)
    delete json.password
    return json
  }
}

export default User

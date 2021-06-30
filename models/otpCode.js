import { Model } from 'objection'

class OtpCode extends Model {
  static get tableName() {
    return 'otp_codes'
  }
}

export default OtpCode

import bcrypt from 'bcrypt'

export const makeHash = async (plainText) => {
  const saltRounds = 10
  const results = await bcrypt.hash(plainText, saltRounds)
  return results
}

export const compareHash = async (plainText, hashText) => {
  const results = await bcrypt.compare(plainText, hashText)
  return results
}

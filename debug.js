import { makeHash, compareHash } from './helpers/hash.js'

const text = 'Geek'

const hashed = await makeHash(text)

const result = await compareHash('Master', hashed)

const date = new Date('23-01-2021')

console.log(date);

// console.log([text, hashed, result]);

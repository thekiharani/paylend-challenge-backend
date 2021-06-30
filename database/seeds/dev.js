import { makeHash } from '../../helpers/hash.js'
export const seed = async (knex) => {
  // Deletes ALL existing entries
  await knex.raw('TRUNCATE TABLE "users" CASCADE')
  await knex.raw('TRUNCATE TABLE "otp_codes" CASCADE')
  // Insert users
  await knex('users').insert([
    {
      first_name: 'Joe',
      last_name: 'Gitonga',
      email: 'thekiharani@gmail.com',
      gender: 'Male',
      dob: new Date('1993-01-23'),
      password: await makeHash('pass_12345'),
    },
    {
      first_name: 'Norah',
      last_name: 'Kendi',
      email: 'norahkendi23@gmail.com',
      gender: 'Female',
      dob: new Date('1995-03-27'),
      password: await makeHash('pass_12345'),
    },
  ])
  /* return await knex('users')
    .del()
    .then(() => {
      // Inserts seed entries
    }) */
}

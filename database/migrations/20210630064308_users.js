export const up = async (knex) => {
  return await knex.schema
    .hasTable('users')
    .then((exists) => {
      if (!exists) {
        return knex.schema.createTable('users', (table) => {
          table.increments('id').primary()
          table.string('first_name').notNullable()
          table.string('last_name').notNullable()
          table.string('email').notNullable().unique()
          table.string('gender').notNullable()
          table.date('dob').notNullable()
          table.string('password').notNullable()
          table.timestamps(true, true)
        })
      }
    })
    .then(() => {
      return knex.schema.hasTable('otp_codes').then((exists) => {
        if (!exists) {
          return knex.schema.createTable('otp_codes', (table) => {
            table.string('purpose').defaultTo('verification')
            table
              .string('email')
              .notNullable()
              .references('email')
              .inTable('users')
              .onUpdate('CASCADE')
              .onDelete('CASCADE')
            table.string('otp').notNullable()
            table.timestamps(true, true)
          })
        }
      })
    })
}

export const down = async (knex) => {
  return await knex.schema
    .dropTableIfExists('otp_codes')
    .dropTableIfExists('users')
}

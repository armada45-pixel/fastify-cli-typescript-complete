import * as fastifyTypeorm from "fastify-typeorm-plugin"
import fp from "fastify-plugin"
import type { FastifyTypeormOpts } from "fastify-typeorm-plugin"

export default fp<FastifyTypeormOpts>(async (app) => {
  const {
    config: { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME },
  } = app

  app.register(fastifyTypeorm, {
    type: "postgres",
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    synchronize: true,
    logging: false,
    entities: ["src/entities/**/*.ts"],
    // migrations: ["src/migrations/**/*.ts"],
    // subscribers: ["src/subscribers/**/*.ts"],
    cli: {
      entitiesDir: "src/entities",
      // migrationsDir: "src/migrations",
      // subscribersDir: "src/subscribers",
    },
  })
})

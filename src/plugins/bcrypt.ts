import fastifyBcrypt from "fastify-bcrypt"
import fp from "fastify-plugin"

export default fp(async (app) => {
  app.register(fastifyBcrypt, {
    saltWorkFactor: 10,
  })
})

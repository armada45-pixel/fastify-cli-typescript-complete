import fp from "fastify-plugin"
import fastifyRecaptcha from "fastify-recaptcha"

export default fp(async (app, opts) => {
  app.register(fastifyRecaptcha, {
    recaptcha_secret_key: app.config.recap_key,
  })
})

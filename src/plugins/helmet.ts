import fastifyHelmet, { FastifyHelmetOptions } from "@fastify/helmet"
import fp from "fastify-plugin"

export default fp<FastifyHelmetOptions>(async (app, opts) => {
  app.register(fastifyHelmet, {})
})

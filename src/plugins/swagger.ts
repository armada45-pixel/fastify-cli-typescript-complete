import FastifySwagger, { FastifySwaggerOptions } from "@fastify/swagger"
import fp from "fastify-plugin"

export default fp<FastifySwaggerOptions>(async (app) => {
  app.register(FastifySwagger, {
    swagger: {
      info: {
        title: "Fastify Swagger",
        description: "Fastify Swagger",
        version: "1.0.0",
      },
    },
    routePrefix: "docs",
    exposeRoute: true,
  })
})

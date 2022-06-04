import fp from "fastify-plugin"
import { FastifyCsrfOptions } from "@fastify/csrf-protection"

export default fp<FastifyCsrfOptions>(async (app, opts) => {
  app.register(require("@fastify/csrf-protection"), {
    cookieOpts: { signed: true },
  })
})

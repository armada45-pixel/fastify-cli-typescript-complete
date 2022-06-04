import fp from "fastify-plugin"
import fastifyCookie from "@fastify/cookie"
import type { FastifyCookieOptions } from "@fastify/cookie"

export default fp<FastifyCookieOptions>(async (app, opts) => {
  app.register(fastifyCookie, {
    secret: app.config.cookie_secret,
  })
})

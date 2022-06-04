import fp from "fastify-plugin"
import fjwt from "@fastify/jwt"
import type { FastifyJWTOptions } from "@fastify/jwt"
import type { RouteHandlerMethod } from "fastify"

export default fp<FastifyJWTOptions>(async (app, opts) => {
  app.register(fjwt, {
    secret: app.config.jwt_secret,
    sign: { expiresIn: "12h" },
    cookie: {
      cookieName: "MM",
      signed: false,
    },
  })

  const authenticate: RouteHandlerMethod = async (request, reply) => {
    try {
      await request.jwtVerify()
    } catch (err) {
      reply.send(err)
    }
  }

  app.decorate("authenticate", authenticate)
})

interface jwtData {
  id: string
  token: string
  // role: Array<string>
}

declare module "@fastify/jwt" {
  interface FastifyJWT {
    payload: jwtData
    user: jwtData
  }
}

declare module "fastify" {
  interface FastifyInstance {
    authenticate: RouteHandlerMethod
  }
}

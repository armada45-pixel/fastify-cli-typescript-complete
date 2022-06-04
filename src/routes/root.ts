import { FastifyPluginAsync } from "fastify"

const root: FastifyPluginAsync = async (app, opts): Promise<void> => {
  app.get(
    "/",
    {
      schema: {
        body: {
          type: "object",
          properties: {
            "g-recaptcha-response": { type: "string" },
          },
          required: ["g-recaptcha-response"],
        },
      },
      onRequest: [app.authenticate],
      config: {
        rateLimit: {
          max: 1000,
          timeWindow: "1 hour",
        },
      },
    },
    async function (request, reply) {
      // request.user
      const MM = await reply.jwtSign({
        id: "uuid",
        // name: "foo",
        token: "key",
        // role: ["admin", "spy"],
      })
      reply
        .setCookie(app.config.MM_Cookie_Name, MM, {
          domain: app.config.domain,
          path: "/",
          secure: app.config.NODE_ENV === "production", // send cookie over HTTPS only
          httpOnly: true,
          sameSite: true, // alternative CSRF protection
        })
        .code(200)
        .send("Cookie sent")
      // return { root: true }
    }
  )
}

export default root

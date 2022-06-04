import fp from "fastify-plugin"

export default fp(async (app) => {
  app.setErrorHandler((error, request, reply) => {
    reply.status(error.statusCode || 500).send({
      error: {
        message: error.message,
        code: error.code,
      },
    })
  })
})

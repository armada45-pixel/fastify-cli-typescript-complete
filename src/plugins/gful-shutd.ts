import fp from "fastify-plugin"
import GracefulShutdown, {
  fastifyGracefulShutdownOpt,
} from "fastify-graceful-shutdown"

export default fp<fastifyGracefulShutdownOpt>(async (app, opts) => {
  app.register(GracefulShutdown, {}).after(() => {
    app.gracefulShutdown((signal, next) => {
      next()
    })
  })
})

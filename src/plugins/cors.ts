import fp from "fastify-plugin"
import fastifyCors from "@fastify/cors"
import type {
  FastifyCorsOptions,
  FastifyPluginOptionsDelegate,
  FastifyCorsOptionsDelegate,
} from "@fastify/cors"

export default fp<
  FastifyCorsOptions | FastifyPluginOptionsDelegate<FastifyCorsOptionsDelegate>
>(async (app) => {
  app.register(fastifyCors, {})
})

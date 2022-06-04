import fp from "fastify-plugin"
import type {
  FastifyRateLimitOptions,
  RateLimitOptions,
} from "@fastify/rate-limit"
import fratelimit from "@fastify/rate-limit"

export default fp<FastifyRateLimitOptions>(async (app, opts) => {
  app.register(fratelimit, {})
})

declare module "fastify" {
  interface FastifyContextConfig {
    rateLimit?: RateLimitOptions
  }
}

// import type { ValidationRule } from "fastest-validator"
// import FV from "fastest-validator"
const FV = require("fastest-validator")
import type fvType from "fastest-validator"
import type { ValidationRule } from "fastest-validator"
import fvPlugin from "fastify-fv"
import fp from "fastify-plugin"

export default fp(async (app) => {
  const fv = new FV()
  app.register(fvPlugin, fv)
  // const fvv: fvType = fv
  app.decorate("fv", fv as fvType)
})

declare module "fastify" {
  // declare global {
  interface FastifyInstance {
    fv: fvType
  }
  interface FastifySchema {
    body?: ValidationRule | unknown
  }
}

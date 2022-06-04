import fp from "fastify-plugin"
import fileUpload from "fastify-file-upload"

export default fp(async (app, opts) => {
  app.register(fileUpload, {})
})

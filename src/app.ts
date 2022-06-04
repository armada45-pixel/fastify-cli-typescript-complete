import AutoLoad, { AutoloadPluginOptions } from "@fastify/autoload"
import { FastifyPluginAsync } from "fastify"
// import envSchema from "env-schema"
// import { configOpts } from "./config"
import { join } from "path"

export type AppOptions = {
  // Place your custom options for app below here.
} & Partial<AutoloadPluginOptions>

const main: FastifyPluginAsync<AppOptions> = async (
  app,
  opts
): Promise<void> => {
  void app.register(AutoLoad, {
    dir: join(__dirname, "plugins"),
    options: opts,
  })

  void app.register(AutoLoad, {
    dir: join(__dirname, "routes"),
    options: opts,
  })

  // void app.register(AutoLoad, {
  //   dir: join(__dirname, "services"),
  //   options: opts,
  // })
}

export default main
export { main }

import fastifyEnv from "@fastify/env"
import fp from "fastify-plugin"
import type { fastifyEnvOpt } from "@fastify/env"
// import { EnvSchemaOpt } from "env-schema"

type NODE_ENV = "production" | "development"

const NODE_ENV: NODE_ENV =
  process.env.NODE_ENV === "production" ? "production" : "development"

export default fp<fastifyEnvOpt>(async (app) => {
  app.register(fastifyEnv, {
    // confKey: "config",
    schema: {
      type: "object",
      required: [
        "DB_HOST",
        "DB_PORT",
        "DB_USERNAME",
        "DB_PASSWORD",
        "DB_NAME",
        "recap_key",
        "jwt_secret",
        "cookie_secret",
        "MM_Cookie_Name",
        "domain",
        "NODE_ENV",
      ],
      properties: {
        DB_HOST: {
          type: "string",
          default: "localhost",
        },
        DB_PORT: {
          type: "number",
          default: 3306,
        },
        DB_USERNAME: {
          type: "string",
          default: "root",
        },
        DB_PASSWORD: {
          type: "string",
          default: "",
        },
        DB_NAME: {
          type: "string",
        },
        recap_key: {
          type: "string",
        },
        jwt_secret: {
          type: "string",
        },
        cookie_secret: {
          type: "string",
        },
        MM_Cookie_Name: {
          type: "string",
        },
        domain: {
          type: "string",
        },
        NODE_ENV: {
          type: "string",
        },
      },
    },
    dotenv: {
      // path:
      // process.env.NODE_ENV === "production"
      //   ? `.env.${NODE_ENV}.local`
      //   : `.env.${NODE_ENV}.local`,
      // ".env",
    },
  })
})

declare module "fastify" {
  interface FastifyInstance {
    config: {
      NODE_ENV: NODE_ENV
      DB_HOST: string
      DB_PORT: number
      DB_USERNAME: string
      DB_PASSWORD: string
      DB_NAME: string
      recap_key: string
      jwt_secret: string
      cookie_secret: string
      MM_Cookie_Name: string
      domain: string
    }
  }
}

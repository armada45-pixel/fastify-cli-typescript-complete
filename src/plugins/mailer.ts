import fp from "fastify-plugin"
import { Transporter } from "nodemailer"

export default fp(async (app, opts) => {
  // app.register(require("fastify-mailer"), {
  //   defaults: { from: "John Doe <john.doe@example.tld>" },
  //   transport: {
  //     host: "smtp.example.tld",
  //     port: 465,
  //     secure: true, // use TLS
  //     auth: {
  //       user: "john.doe",
  //       pass: "super strong password",
  //     },
  //   },
  // })
})

export interface FastifyMailerNamedInstance {
  [namespace: string]: Transporter
}
export type FastifyMailer = FastifyMailerNamedInstance & Transporter

declare module "fastify" {
  interface FastifyInstance {
    // mailer: FastifyMailer
  }
}

import swaggerJSDoc from "swagger-jsdoc"
import swaggerUI from "swagger-ui-express"
import { Express } from "express"

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "User API",
      version: "1.0.0",
      description: "User API with JWT Auth",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        User: {
          type: "object",
          properties: {
            id: { type: "integer", example: 1 },
            name : {type : "string " , example : "MyUser"},
            email: { type: "string", example: "user@example.com" },
            password: { type: "string", example: "hashedpassword" },
            role: { type: "string", example: "admin" }
          },
          required: ["email", "password"],
        },
        Login: {
          type: "object",
          properties: {
            email: { type: "string", example: "user@example.com" },
            password: { type: "string", example: "password123" }
          },
          required: ["email", "password"],
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: ["src/routes/*.ts"], // sesuaikan path dengan folder routes kamu
}

const swaggerSpec = swaggerJSDoc(options)

export const setupSwagger = (app: Express) => {
  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec))
}

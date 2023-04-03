import { Router } from "express";
import pacientsController from "../controllers/pacients.controller.js";
import { validateSchema } from "../middlewares/validation.schema.middleware.js";
import { pacientSchema } from "../schemas/pacients.schema.js";

const pacientsRoutes = Router()

pacientsRoutes.post("/signup",validateSchema(pacientSchema),pacientsController.create)
pacientsRoutes.post("/signin",pacientsController.signIn)

export default pacientsRoutes
import { Router } from "express";
import pacientsController from "../controllers/pacients.controller.js";
import { validateSchema } from "../middlewares/validation.schema.middleware.js";
import { pacientsSchema } from "../schemas/pacients.schema.js";

const pacientsRoutes = Router()

pacientsRoutes.post("/signup",validateSchema(pacientsSchema),pacientsController.create)
pacientsRoutes.post("/signin",pacientsController.signIn)

export default pacientsRoutes
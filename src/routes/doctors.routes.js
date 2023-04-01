import { Router } from "express";
import doctorsController from "../controllers/doctors.controller.js";
import { validateSchema } from "../middlewares/validation.schema.middleware.js";
import { doctorsSchema } from "../schemas/doctors.schema.js";

const doctorsRoutes = Router()

doctorsRoutes.post("/signup", validateSchema(doctorsSchema), doctorsController.create)
doctorsRoutes.post("/signin",doctorsController.signIn)

export default doctorsRoutes
import { Router } from "express";
import doctorsController from "../controllers/doctors.controller.js";
import { validateSchema } from "../middlewares/validation.schema.middleware.js";
import { doctorSchema } from "../schemas/doctors.schema.js";

const doctorsRoutes = Router()

doctorsRoutes.post("/signup", validateSchema(doctorSchema), doctorsController.create)
doctorsRoutes.post("/signin",doctorsController.signIn)

export default doctorsRoutes
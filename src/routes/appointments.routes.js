import { Router } from "express";
import appointmentsController from "../controllers/appointments.controller.js";
import { validateSchema } from "../middlewares/validation.schema.middleware.js";
import { appointmentSchema } from "../schemas/appointment.schema.js";
import authValidation from "../middlewares/auth.middleware.js";

const appointmentRoutes = Router()

appointmentRoutes.post("/",authValidation,validateSchema(appointmentSchema),appointmentsController.create)
appointmentRoutes.get()
appointmentRoutes.get()
appointmentRoutes.get()

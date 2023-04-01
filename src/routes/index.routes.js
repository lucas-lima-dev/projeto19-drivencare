import { Router } from "express";
import pacientsRoutes from "./patients.routes.js";
import doctorsRoutes from "./doctors.routes.js";

const routes = Router()

routes.use("/pacients",pacientsRoutes)
routes.use("doctors",doctorsRoutes)

export default routes
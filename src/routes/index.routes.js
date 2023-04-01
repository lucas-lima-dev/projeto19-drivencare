import { Router } from "express";
import pacientsRoutes from "./patients.routes.js";

const routes = Router()

routes.use("/pacients",pacientsRoutes)

export default routes
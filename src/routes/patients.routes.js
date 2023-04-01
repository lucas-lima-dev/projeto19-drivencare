import { Router } from "express";
import pacientsController from "../controllers/pacients.controller.js";

const pacientsRoutes = Router()

pacientsRoutes.post("/",pacientsController.create())

export default pacientsRoutes
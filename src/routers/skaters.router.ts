import { Router } from "express";
import * as skatersControllers from "../Controllers/skaters.controllers"
import { validationMiddleware } from "../middlewares/skaters.middlewares";
import skaterSchema from "../schemas/skaters.schemas";

const skaterRouter = Router();

skaterRouter.post("/skaters", validationMiddleware(skaterSchema), skatersControllers.createSkater)
skaterRouter.get("/skaters", skatersControllers.getSkaters)

export default skaterRouter;
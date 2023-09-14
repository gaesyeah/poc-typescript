import { Router } from "express";
import namesController from "../controllers/names.controller";
import { schemaValidation } from "../middlewares/schemaValidation.middleware";
import { nameSchema } from "../schemas/names.schema";

const namesRouter = Router();
namesRouter.post("/names", schemaValidation(nameSchema), namesController.create);
namesRouter.get("/names", namesController.read);
namesRouter.put("/names/:id", schemaValidation(nameSchema) ,namesController.update);
namesRouter.delete("/names/:id", namesController.destroy);

export default namesRouter;
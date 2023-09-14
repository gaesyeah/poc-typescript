import { Router } from "express";
import namesRouter from "./names.routes";

const indexRouter = Router();
indexRouter.use(namesRouter);

export default indexRouter;
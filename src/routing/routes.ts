import { Application } from "express";
import * as videoController from "../controllers/videoController";
import { check } from "express-validator";

export const routes = (app: Application) => {
    app.post('/metaData', check("url").isURL().withMessage("Not an URL").matches("^[\\w-\\/.:]*$").withMessage("Symbol(s) not allowed in URL"), videoController.getMetaData);
};
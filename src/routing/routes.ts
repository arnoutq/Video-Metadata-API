import { Application } from "express";
import * as videoController from "../controllers/videoController";

export const routes = (app: Application) => {
    app.get('/video/:filename', videoController.getMetaData);
};

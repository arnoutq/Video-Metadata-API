import { NextFunction, Request, Response } from 'express';
import express from 'express';
import { routes } from "./src/routing/routes";
import * as bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

routes(app);

// catch 404
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({ error: 'Page not found'});
});

app.listen(3000, () => {
    console.log("Server started");
});
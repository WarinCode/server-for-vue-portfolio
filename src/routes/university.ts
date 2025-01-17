import { Router, Request, Response } from "express";
import { university } from "../db/data";
import { getNotFoundPage } from "../middlewares";

const universityRoutes: Router = Router();

universityRoutes.get("/university", (req: Request, res: Response): void => {
    res.status(200).json(university);
})

universityRoutes.all("/university/*", getNotFoundPage);

export default universityRoutes;
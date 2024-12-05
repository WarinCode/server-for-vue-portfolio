import { Router, Request, Response } from "express";
import { university } from "../db/data";

const universityRoutes: Router = Router();

universityRoutes.get("/university", (req: Request, res: Response): void => {
    res.status(200).json(university);
})

universityRoutes.all("/university/*", (req: Request, res: Response) : void => {
    res.status(404).send("Page not found!");
})

export default universityRoutes;
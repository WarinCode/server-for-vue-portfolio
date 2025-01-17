import { Router, Request, Response } from "express";
import { user } from "../db/data";
import { getNotFoundPage } from "../middlewares";

const userRoutes: Router = Router();

userRoutes.get("/user", (req: Request, res: Response): void => {
    res.status(200).json(user);
})

userRoutes.all("/user/*", getNotFoundPage);

export default userRoutes;
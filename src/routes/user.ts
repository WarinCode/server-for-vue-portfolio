import { Router, Request, Response } from "express";
import { user } from "../db/data";

const userRoutes: Router = Router();

userRoutes.get("/user", (req: Request, res: Response): void => {
    res.status(200).json(user);
})

userRoutes.all("/user/*", (req: Request, res: Response): void => {
    res.status(404).send("Page not found!");
})

export default userRoutes;
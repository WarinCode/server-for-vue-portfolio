import { Router, Request, Response } from "express";
import SchoolModel, { Schools } from "../types/models/school";
import { schools } from "../db/data";
import { Params } from "../types";

const schoolRoutes: Router = Router();

schoolRoutes.get("/schools", (req: Request, res: Response): void => {
  res.status(200).json(schools);
});

schoolRoutes.get(
  "/schools/:id",
  ({ params: { id } }: Request<Params>, res: Response): void => {
    const filteredSchool: Schools = schools.filter(
      (item: SchoolModel): boolean => item.id === id
    );

    res.status(200).json(filteredSchool.length === 1 ? filteredSchool[0] : {});
  }
);

schoolRoutes.all("/schools/*", (req: Request, res: Response): void => {
  res.status(404).send("Page not found!");
});

export default schoolRoutes;

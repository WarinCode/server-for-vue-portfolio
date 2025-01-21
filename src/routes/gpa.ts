import { Router, Request, Response } from "express";
import { gpas } from "../db/data";
import { GPAParams } from "../types";
import GPAModel, { GPAs } from "../types/models/gpa";
import { getNotFoundPage } from "../middlewares";

const gpaRoutes: Router = Router();

gpaRoutes.get("/gpa/all", (req: Request, res: Response): void => {
    res.status(200).json(gpas);
});

gpaRoutes.get("/gpa/year/:year", ({ params: { year } }: Request<GPAParams>, res: Response): void => {
    const filteredGPAs: GPAs = gpas.filter((gpa: GPAModel): boolean => gpa.year === parseInt(year));
    res.status(200).send(filteredGPAs);
})

gpaRoutes.get("/gpa/student-year/:studentYear", ({ params: { studentYear } }: Request<GPAParams>, res: Response): void => {
    const filteredGPAs: GPAs = gpas.filter((gpa: GPAModel): boolean => gpa.studentYear === parseInt(studentYear));
    res.status(200).send(filteredGPAs);
})

gpaRoutes.get("/gpa/semester/:semester", ({ params: { semester } }: Request<GPAParams>, res: Response): void => {
    const filteredGPAs: GPAs = gpas.filter((gpa: GPAModel): boolean => gpa.semester === semester);
    res.status(200).send(filteredGPAs);
})

gpaRoutes.get("/gpax", (req: Request, res: Response): void => {
    res.status(200).json({ gpax: gpas[gpas.length - 1].gpax });
})

gpaRoutes.all("/gpa/*", getNotFoundPage);
gpaRoutes.all("/gpax/*", getNotFoundPage);

export default gpaRoutes;
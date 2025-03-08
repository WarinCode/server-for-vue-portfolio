import { Router, Request, Response } from "express";
import { getNotFoundPage } from "../middlewares";
import { UserBody } from "../types";
import { user } from "../db/data";

const userRoutes: Router = Router();

userRoutes.get("/user", async (req: Request, res: Response): Promise<void> => {
    res.status(200).json(user);
})

userRoutes.put("/user", async ({ body: { fullname, studentId, faculty, major } }: Request<any, any, UserBody>, res: Response): Promise<void> => {
    user.fullname = fullname;
    user.studentId = studentId;
    user.faculty = faculty;
    user.major = major;
    res.status(200).json({ message: "แก้ไขข้อมูลสำเร็จ" });
})

userRoutes.all("/user/*", getNotFoundPage);

export default userRoutes;
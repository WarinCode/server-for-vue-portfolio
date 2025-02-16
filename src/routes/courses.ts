import { Router, Request, Response } from "express";
import connection from "../db/connection";
import { Params } from "../types";
import CourseModel, { Courses } from "../types/models/course";
import { getNotFoundPage } from "../middlewares";

const courseRoutes: Router = Router();

courseRoutes.get(
  "/courses",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const sql: string = "SELECT * FROM courses";
      const [courses] = await connection.query<Courses>(sql);
      res.status(200).json(courses);
    } catch (e: any) {
      res.status(500).json({ message: e?.message });
    }
  }
);

courseRoutes.get(
  "/courses/:id",
  async ({ params: { id } }: Request<Params>, res: Response): Promise<void> => {
    try {
      const sql: string = `SELECT * FROM courses WHERE id = '${id}'`;
      const [courses] = await connection.query<Courses>(sql);
      const course: CourseModel | object =
        courses[0] === undefined ? {} : courses[0];

      res.status(200).json(course);
    } catch (e: any) {
      res.status(500).json({ message: e?.message });
    }
  }
);

courseRoutes.post(
  "/courses/create",
  async (
    {
      body: { id, courseName, courseCode, grade, credit },
    }: Request<any, CourseModel, CourseModel>,
    res: Response
  ): Promise<void> => {
    try {
      const sql = `INSERT INTO courses VALUES(''${id}, '${courseName}', '${courseCode}', '${grade}', ${credit})`;
      await connection.query<Courses>(sql);

      res.status(201).json({ success: "เพิ่มรายวิชาสำเร็จ" });
    } catch (e: any) {
      res.status(500).json({ message: e?.message });
    }
  }
);

courseRoutes.put(
  "/courses/update/:id",
  async (
    {
      params: { id },
      body: { courseName, courseCode, grade, credit },
    }: Request<Params, CourseModel, CourseModel>,
    res: Response
  ): Promise<void> => {
    try {
      const sql: string = `UPDATE courses SET courseName = '${courseName}', courseCode = '${courseCode}', grade = '${grade}', credit = ${credit} WHERE id = '${id}'`;
      await connection.query<Courses>(sql);

      res.status(200).json({ success: "อัปเดตรายวิชาสำเร็จ" });
    } catch (e: any) {
      res.status(500).json({ message: e?.message });
    }
  }
);

courseRoutes.delete(
  "/courses/delete/:id",
  async ({ params: { id } }: Request<Params>, res: Response): Promise<void> => {
    try {
      const sql: string = `DELETE FROM courses WHERE id = '${id}'`;
      await connection.query<Courses>(sql);

      res.status(200).json({ success: "ลบรายวิชาสำเร็จ" });
    } catch (e: any) {
      res.status(500).json({ message: e?.message });
    }
  }
);

courseRoutes.all("/courses/*", getNotFoundPage);

export default courseRoutes;

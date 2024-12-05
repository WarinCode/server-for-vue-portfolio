import { RowDataPacket } from "mysql2";

export default interface CourseModel extends RowDataPacket {
    id: string;
    code: string;
    courseName: string;
    grade: string;
    credit: number;
}

export type Courses = CourseModel[];
import fs from "fs/promises"
import CourseModel from "../../types/models/course";

const jsonString: string = await fs.readFile("src/db/data/courses.json", { encoding: "utf-8" });
const courses = <CourseModel[]>JSON.parse(jsonString);
let statments: string = "";

for (const {
    id,
    courseName,
    courseCode,
    grade,
    credit } of courses) {
    statments += `INSERT INTO courses (id, courseName, courseCode, grade, credit) VALUES ('${id}', '${courseName}', '${courseCode}', '${grade}', ${credit});\n`;
}

fs.writeFile("src/db/sql/insert.sql", statments)
    .then((): void => console.log("เขียนไฟล์ sql สำเร็จ!"))
    .catch((): void => console.error("ไม่สามารถเขียนไฟล์ sql ได้"))

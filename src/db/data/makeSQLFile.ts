import fs from "fs/promises"
import CourseModel from "../../types/models/course";

const json = <CourseModel[]>JSON.parse(await fs.readFile("src/db/data/courses.json", "utf-8"));
let statments: string = "";

json.forEach(({
    id,
    courseName,
    code,
    grade,
    credit
}: CourseModel): void => {
    statments += `INSERT INTO courses (id, courseName, code, grade, credit) VALUES ('${id}', '${courseName}', '${code}', '${grade}', ${credit});\n`;
})

await fs.writeFile("src/db/sql/courses.sql", statments);
console.log("เขียนไฟล์ sql สำเร็จ!")
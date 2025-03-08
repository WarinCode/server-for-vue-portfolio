import { RowDataPacket } from "mysql2";

export default interface UserModel extends RowDataPacket{
    fullname: string;
    age: number;
    studentId: number;
    sophomore: number;
    hobbies: string;
    faculty: string;
    major: string;
    university: string;
}

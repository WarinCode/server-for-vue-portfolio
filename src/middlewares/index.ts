import { Request, Response, NextFunction } from "express"
import connection from "../db/connection";
import { Courses } from "../types/models/course";

export const getNotFoundPage = ({ path }: Request, res: Response): void => {
    res.status(404).send(`ไม่พบ path ${path} ของหน้าเพจที่เรียกหา!`);
}

export const checkConnection = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const [row] = await connection.query<Courses>("SELECT * FROM courses WHERE id = 1");

        if (row.length === 1) {
            next();
            return;
        }

        throw new Error("ไม่สารามถเชื่อมต่อฐานข้อมูลได้!");
    } catch (err: any) {
        if(err instanceof Error){
            res.status(500).json({ message: err.message });
            console.error(err.message);
        }
    }
}
import { Request, Response, NextFunction } from "express";
import jwt, { VerifyErrors, JwtPayload } from "jsonwebtoken";
import connection from "../db/connection";
import { Courses } from "../types/models/course";
import { getEnv } from "../utils";

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
        if (err instanceof Error) {
            res.status(500).json({ message: err.message });
            console.error(err.message);
        }
    }
}

export const auth = ({ headers: { authorization } }: Request, res: Response, next: NextFunction): void => {
    let token: string | undefined = authorization?.startsWith("Bearer") ? authorization.split(" ")[1] : authorization;

    if (!token) {
        res.status(401).json({ message: "ไม่มีการยืนยันตัวตนจากผู้ใช้งาน!" });
        return;
    }

    const secretKey = getEnv("SECRET_KEY");

    jwt.verify(token, secretKey, (err: VerifyErrors | null, decoded: JwtPayload | string | undefined): void => {
        if (err instanceof jwt.JsonWebTokenError) {
            res.status(403).json({ message: "ผู้ใช้งานไม่ได้รับอณุญาติให้เข้าถึงข้อมูล!" });
            return;
        }

        next();
    })
}
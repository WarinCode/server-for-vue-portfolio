import { Router, Request, Response } from "express";
import connection from "../db/connection";
import { Body, UserLogin } from "../types";
import { createBearerToken, getEnv } from "../utils";

const loginRoute: Router = Router();

loginRoute.post("/login", async ({ body }: Request<any, Body, Body>, res: Response): Promise<void> => {
    const payload: UserLogin | null | undefined = body;
    try {
        if (!payload) {
            throw new Error("ไม่สามารถ login ได้!");
        }

        const { username, password } = payload;
        const [row] = await connection.query<UserLogin[]>(`SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`);

        if (row.length === 1) {
            const secretKey: string = getEnv("SECRET_KEY");
            const token: string = createBearerToken(payload, secretKey);
            res.status(200).json({ token });
        } else {
            throw new Error("ชื่อผู้ใช้งานและรหัสผ่านไม่ถูกต้อง!");
        }

    } catch (err: any) {
        if (err instanceof Error) {
            res.status(401).json({ message: err.message });
        }
    }
});

export default loginRoute;
import { Router, Request, Response } from "express";
import { configDotenv } from "dotenv";
import connection from "../db/connection";
import { Body, UserLogin, EnvironmentVariables } from "../types";
import { createBearerToken } from "../utils";

configDotenv();
const { SECRET_KEY } = <EnvironmentVariables>process.env;

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
            const token: string = createBearerToken(payload, SECRET_KEY);
            res.status(200).json({ token });
        } else {
            throw new Error("ชื่อผู้ใช้งานและรหัสผ่านไม่ถูกต้อง!");
        }

    } catch (e: any) {
        res.status(401).json({ message: e?.message });
    }
});

export default loginRoute;
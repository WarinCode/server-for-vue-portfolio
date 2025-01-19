import jwt from "jsonwebtoken";
import { UserLogin } from "../types";

export const createBearerToken = (payload: UserLogin, secretKey: string): string => {
    const token: string = "Bearer " + jwt.sign(payload, secretKey, { expiresIn: '5d' });
    return token;
}
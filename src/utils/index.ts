import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
import { UserLogin, EnvironmentVariables } from "../types";

export const createBearerToken = (payload: UserLogin, secretKey: string): string => {
    const token: string = "Bearer " + jwt.sign(payload, secretKey);
    return token;
}

export const getEnv = (key: keyof EnvironmentVariables): string => {
    configDotenv();
    return <string>process.env[key];
}
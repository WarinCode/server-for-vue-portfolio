import { RowDataPacket } from "mysql2";
import UserModel from "./models/user";

export interface EnvironmentVariables extends NodeJS.ProcessEnv {
    readonly DB: string;
    readonly HOST: string;
    readonly DB_PORT: string;
    readonly USERNAME: string;
    readonly PASSWORD: string;
    readonly SECRET_KEY: string;
}

export interface Params {
    id: string;
}

export interface GPAParams {
    year: string;
    studentYear: string;
    semester: "first" | "second" | "summer";
}

export interface UserLogin extends RowDataPacket {
    userId: number;
    username: string;
    password: string;
}

export type Body = UserLogin;

export interface UserBody extends UserModel { };
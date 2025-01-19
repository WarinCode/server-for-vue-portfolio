import { RowDataPacket } from "mysql2";

export interface EnvironmentVariables extends NodeJS.ProcessEnv{
    readonly DB: string;
    readonly HOST: string;
    readonly DB_PORT: string;
    readonly USERNAME: string;
    readonly PASSWORD: string;
    readonly SECRET_KEY: string;
}

export interface Params {
    id: number;
}

export interface UserLogin extends RowDataPacket {
    userId: number;
    username: string;
    password: string;
}

export type Body = UserLogin;
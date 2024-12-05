export interface EnvironmentVariables extends NodeJS.ProcessEnv{
    readonly DB: string;
    readonly HOST: string;
    readonly DB_PORT: string;
    readonly USERNAME: string;
    readonly PASSWORD: string;
}

export interface Params {
    id: string;
}
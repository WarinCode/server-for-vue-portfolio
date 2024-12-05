export interface EnvironmentVariables extends NodeJS.ProcessEnv{
    readonly DB: string;
    readonly HOST: string;
    readonly PORT: string;
    readonly USER: string;
    readonly PASSWORD: string;
}

export interface Params {
    id: string;
}
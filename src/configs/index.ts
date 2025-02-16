import { CorsOptions } from "cors";

export const port: number = 3452;

export const corsOptions: CorsOptions = {
    origin: ["*", "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}
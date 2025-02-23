import { CorsOptions } from "cors";

export const port: number = 3452;

export const corsOptions: CorsOptions = {
    origin: process.env?.NODE_ENV === "production" ? "https://vue-portfolio-wine.vercel.app" : "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}
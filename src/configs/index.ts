import { CorsOptions } from "cors";

export const port: number = 3452;

export const corsOptions: CorsOptions = {
    origin: "https://vue-portfolio-beta-ochre.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}
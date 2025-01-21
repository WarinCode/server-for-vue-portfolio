import { CorsOptions } from "cors";

const isDevmode: boolean = process.env?.NODE_ENV?.trim() === "development";
export const port: number = 3452;

export const corsOptions: CorsOptions = {
    origin: isDevmode ? `http://localhost:${port}` : "https://react-portfolio-lac-xi.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}
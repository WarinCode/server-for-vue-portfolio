import { CorsOptions } from "cors";

export const corsOptions: CorsOptions = {
    origin: "https://react-portfolio-lac-xi.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}
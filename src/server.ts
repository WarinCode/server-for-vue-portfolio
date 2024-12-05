import express, { Express, json, Request, Response } from "express";
import cors from "cors";
import userRoutes from "./routes/user";
import morgan from "morgan";
import courseRoutes from "./routes/courses";
import schoolRoutes from "./routes/schools";
import universityRoutes from "./routes/university";

const app: Express = express();
const port: number = 3452;

app
  .use(json())
  .use(cors())
  .use(morgan("dev"))
  .get("/", (req: Request, res: Response): void => {
    res.status(200).send("Hello World");
  })
  .use("/api", userRoutes)
  .use("/api", courseRoutes)
  .use("/api", schoolRoutes)
  .use("/api", universityRoutes)
  .use("*", (req: Request, res: Response): void => {
    res.status(404).send("Page not found!");
  })
  .listen(port, (): void => console.log(`Server is running on port ${port}`));

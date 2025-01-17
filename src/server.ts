import express, { Express, json, Request, Response } from "express";
import cors from "cors";
import userRoutes from "./routes/user";
import morgan from "morgan";
import courseRoutes from "./routes/courses";
import schoolRoutes from "./routes/schools";
import universityRoutes from "./routes/university";
import { checkConnection, getNotFoundPage } from "./middlewares";

const app: Express = express();
const port: number = 3452;

app
  .use(json())
  .use(cors())
  .use(morgan("dev"))
  .get("/", (req: Request, res: Response): void => {
    res.status(200).send("Hello World");
  })
  .use("/api/*", checkConnection)
  .use("/api", userRoutes)
  .use("/api", courseRoutes)
  .use("/api", schoolRoutes)
  .use("/api", universityRoutes)
  .use("*", getNotFoundPage)
  .listen(port, (): void => console.log(`Server is running on port ${port}`));

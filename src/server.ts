import express, { Express, json, Request, Response, static as static_, urlencoded } from "express";
import cors from "cors";
import userRoutes from "./routes/user";
import morgan from "morgan";
import courseRoutes from "./routes/courses";
import schoolRoutes from "./routes/schools";
import universityRoutes from "./routes/university";
import loginRoute from "./routes/login";
import gpaRoutes from "./routes/gpa";
import { checkConnection, getNotFoundPage, auth } from "./middlewares";
import { corsOptions, port } from "./configs";

const app: Express = express();

app
  .use(json())
  .use(static_("public"))
  .use(morgan("dev"))
  .use(urlencoded({ extended: true }))
  .use(cors(corsOptions))
  .get("/", (req: Request, res: Response): void => {
    res.status(200).send("Hello World");
  })
  .post("/login", loginRoute)
  .use("/api/*", auth)
  .use("/api/*", checkConnection)
  .use("/api", userRoutes)
  .use("/api", courseRoutes)
  .use("/api", schoolRoutes)
  .use("/api", universityRoutes)
  .use("/api", gpaRoutes)
  .use("*", getNotFoundPage)
  .listen(port, (): void => console.log(`Server is running on port ${port}`));

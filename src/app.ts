/* eslint-disable @typescript-eslint/no-unused-vars */
import { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import express from "express";

import cookieParser from "cookie-parser";
import { envVars } from "./config/env";
import { router } from "./routes";
import { globalErrorHandler } from "./middlewares/globalErrorHandler";
import notFound from "./middlewares/notFound";

const app: Application = express();

app.use(express.json());
app.use(cors({
  origin:"*",
  credentials:true
}));
app.use(cookieParser())

app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Bank start!");
});

app.use(globalErrorHandler);

app.use(notFound);

export default app;
/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Application, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { router as apiRouter } from "./routes"; // তুমি routes/index.ts এ সব রাউট যুক্ত করো
import { globalErrorHandler } from "./middlewares/globalErrorHandler";
import notFound from "./middlewares/notFound";
import { imageUpload } from "./routes/indexs";
import path from "path";

const app: Application = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: ["https://assistholdingsltd.com","https://assistholdingsltdcom.vercel.app","http://localhost:3000"],
  credentials: true,
}));
app.use(cookieParser());



// Serve static images from /public/images
app.use("/images", express.static(path.join(__dirname, "../public/images")));

// Use your upload router


// API Routes
app.use("/api/v1", apiRouter);
app.use("/api/v1", imageUpload);

// Root Route
app.get("/", (req: Request, res: Response) => {
  res.send("Server is running!");
});

// Error Handling Middleware
app.use(globalErrorHandler);
app.use(notFound);

export default app;

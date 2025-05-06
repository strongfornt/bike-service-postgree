import express, { Application, Request, Response } from "express";
import cors from "cors";
import cookieParser from 'cookie-parser';

const app: Application = express();

app.use(cors());
app.use(cookieParser());
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send({
    Message: "Bike service..",
  });
});


export default app;
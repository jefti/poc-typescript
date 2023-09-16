import express, { Request, Response, json } from "express";
import "express-async-errors";
import dotenv from "dotenv";
import router from "@/routers/index.router";
import { errorHandler } from "@/middlewares/errorHandler";

dotenv.config()

const app = express();

app.use(express.json());
app.use(router);
app.use(errorHandler);

const port: Number = Number(process.env.PORT) || 5000;
app.listen(port, ()=>{ console.log(`Server running on port ${port}...`)});
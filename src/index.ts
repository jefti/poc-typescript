import express, { Request, Response, json } from "express";
import httpStatus from "http-status";

const app = express();
app.use(json());

const port: Number = Number(process.env.PORT) || 5000;
app.listen(port, ()=>{ console.log(`Server running on port ${port}...`)});
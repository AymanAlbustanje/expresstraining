import { Request, Response, Express } from "express";
import express from 'express';
import env  from "dotenv";
import bookroute from "./routes/book.js";

const app: Express = express();
env.config();
const PORT = process.env.PORT;

app.use("/books", bookroute);

app.listen(PORT, () => {
    console.log(`Server is running on host http://localhost:${PORT}`);
});


export default app;
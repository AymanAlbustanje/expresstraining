import { Request, Response, Express } from "express";
import express from 'express';
import env  from "dotenv";

const app: Express = express();
env.config();
const PORT = process.env.PORT;

// Route.
app.get("/", (req: Request, res: Response) => {
    res.send("hello world");
});

app.listen(PORT, () => {
    console.log(`Server is running on host http://localhost:${PORT}`);
});


export default app;
import skaterRouter from "./routers/skaters.router";
import express, { json, Request, Response } from "express";
import httpStatus from "http-status"

const app = express();
app.use(json())

app.get("/health", (req: Request, res: Response) => {
    res.sendStatus(httpStatus.OK)
})

app.use(skaterRouter)

const port: number = parseInt(process.env.PORT) ||5000

app.listen(port, () => console.log(`is running on port::: ${port}`))

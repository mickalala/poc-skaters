import { Request, Response } from "express";
import * as skatersServices from "../services/skaters.services"
import { Skaters } from "protocols";
import httpStatus from "http-status";

export function createSkater(req: Request, res: Response) {
    const newSkater = req.body as Skaters;

    skatersServices.createSkater(newSkater);

    res.sendStatus(httpStatus.CREATED)
}

export function getSkaters(req: Request, res: Response) {
    const skaters = skatersServices.getSkaters()
    res.send(skaters)
}
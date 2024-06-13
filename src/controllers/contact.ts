import { Request, Response, NextFunction } from "express";
import { IdentifyRequest } from "../types";

export const identityLinker = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const reqBody: IdentifyRequest = req.body;

    const { email, phoneNumber } = reqBody;

    res.status(200).json({ email, phoneNumber });
  } catch (er) {
    next(er);
  }
};

import { Request, Response, NextFunction } from "express";

export function handleError(
  middleware: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  middleware(req, res, (err: any) => {
    if (err) {
      console.error(err);
      res.sendStatus(400); // Bad request
    }

    next();
  });
}

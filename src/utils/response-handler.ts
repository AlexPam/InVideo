import { Response } from "express";

interface IResponseHandler {
  res: Response;
  status: number;
  data: any;
}

function responseHandler({ res, status, data }: IResponseHandler) {
  res.setHeader("Content-Type", "text/plain;charset=utf-8");
  res.setHeader("Cache-Control", "no-cache, must-revalidate");
  res.status(status);
  res.end(JSON.stringify(data));
}

export default responseHandler;

import { Response } from 'express';

interface TResponse <T> {
    statusCode: number;
    success: boolean;
    message?: string;
    totalCount?: number | null;
    data?: T;
  }

const sendResponse = <T>(
  res: Response,
  data: TResponse<T>,
) => {
  res.status(data?.statusCode).json({
    success: data?.success,
    message: data?.message,
    statusCode: data?.statusCode,
    totalCount: data?.totalCount, 
    data: data?.data,
  });
};


export default sendResponse;
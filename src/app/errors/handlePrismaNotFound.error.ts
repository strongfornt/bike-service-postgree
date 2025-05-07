import { StatusCodes } from "http-status-codes";
import { TErrorSource, TGenericErrorResponse } from "../interface/error.interface";

const handleNotFoundError = (err: any): TGenericErrorResponse => {
  const error: TErrorSource = [
    {
      path: '',
      message: `Requested resource not found`,
    },
  ];

  return {
    statusCode: StatusCodes.NOT_FOUND,
    message: 'Resource not found error',
    error,
  };
};

export default handleNotFoundError;

import { TErrorSource, TGenericErrorResponse } from "../interface/error.interface";

const handleDuplicateError = (err: any): TGenericErrorResponse => {
  const targetField = err?.meta?.target?.[0];

  
  const error: TErrorSource = [
    {
      path: '',
      message: `${targetField} is already exists`,
    },
  ];

  const statusCode = 400;

  return {
    statusCode,
    message: 'Duplicate error',
    error,
  };
};

export default handleDuplicateError;

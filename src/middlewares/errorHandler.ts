import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CustomAPIError } from '../errors';
import { Error } from 'mongoose';
import { MongoError } from 'mongodb';

export const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  _next: NextFunction
): Response => {
  console.log(err);
  let customError: CustomAPIError = {
    status: StatusCodes.INTERNAL_SERVER_ERROR,
    message: 'Server error',
    name: 'Server error',
  };
  if (err instanceof Error.ValidationError) {
    customError.message = Object.values(err.errors)
      .map((item) => item.message)
      .join(',');
    customError.status = StatusCodes.BAD_REQUEST;
  }
  if (err instanceof MongoError || (err as MongoError).code === 11000) {
    customError.message = `Duplicate value entered for ${Object.keys(
      (err as MongoError).errorLabels
    )} field, please choose another value`;
    customError.status = StatusCodes.BAD_REQUEST;
  }
  if (err instanceof Error.CastError) {
    customError.message = `No item found with id : ${err.value}`;
    customError.status = StatusCodes.NOT_FOUND;
  }
  return res.status(customError.status).json({ message: customError.message });
};

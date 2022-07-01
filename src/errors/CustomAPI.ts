import { StatusCodes } from 'http-status-codes';

export class CustomAPIError extends Error {
  status: StatusCodes;

  constructor(message: string, status: StatusCodes) {
    super(message);
    this.status = status;
  }
}

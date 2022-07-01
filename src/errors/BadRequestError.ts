import { CustomAPIError } from './CustomAPI';
import { StatusCodes } from 'http-status-codes';

export class BadRequestError extends CustomAPIError {
  constructor(message: string, status: StatusCodes.BAD_REQUEST) {
    super(message, status);
  }
}

import { CustomAPIError } from './CustomAPI';
import { StatusCodes } from 'http-status-codes';

export class NotFoundError extends CustomAPIError {
  constructor(message: string, status: StatusCodes.NOT_FOUND) {
    super(message, status);
  }
}

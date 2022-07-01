import { CustomAPIError } from './CustomAPI';
import { StatusCodes } from 'http-status-codes';

export class UnauthorizedError extends CustomAPIError {
  constructor(message: string, status: StatusCodes.FORBIDDEN) {
    super(message, status);
  }
}

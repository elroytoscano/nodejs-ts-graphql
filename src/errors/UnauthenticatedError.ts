import { CustomAPIError } from './CustomAPI';
import { StatusCodes } from 'http-status-codes';

export class UnauthenticatedError extends CustomAPIError {
  constructor(message: string, status: StatusCodes.UNAUTHORIZED) {
    super(message, status);
  }
}

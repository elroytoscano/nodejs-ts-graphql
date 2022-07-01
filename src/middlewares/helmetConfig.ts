import { HelmetOptions } from 'helmet';

export const helmetConfig = (): HelmetOptions => {
  return {
    contentSecurityPolicy:
      process.env.NODE_ENV === 'production' ? undefined : false,
  };
};

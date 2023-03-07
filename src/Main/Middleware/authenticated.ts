import { Request, Response, NextFunction } from "express";
import { AuthenticationError, TokenExpiredError } from "@/1-Entities/Errors";
import { unauthenticated } from "@/3-Adapters/Helpers";
import { verify } from "jsonwebtoken";

export function authenticate(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;
  if (!authToken) {
    throw new AuthenticationError("AUTHENTICATE.ERRORS.TOKEN_MISSING");
  }
  const [, token] = authToken.split(" ");
  try {
    verify(token, process.env.TOKEN_KEY);

    return next();
  } catch (error) {
    if (
      error instanceof AuthenticationError ||
      error instanceof TokenExpiredError
    )
      return unauthenticated(error);
    throw error;
  }
}

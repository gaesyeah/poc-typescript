import { NextFunction, Request, Response } from "express";
import { UNPROCESSABLE_ENTITY } from "http-status";
import { Schema } from "joi";

export const schemaValidation = (schema: Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {

    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) return res.status(UNPROCESSABLE_ENTITY).send(error.details.map(({ message }) => message));

    next();
  }
};
import Joi from "joi";
import { Name } from "../protocols/names.protocols";

export const nameSchema = Joi.object<Name>({
  name: Joi.string().required()
});
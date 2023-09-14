import { Request, Response } from "express";
import { CREATED, INTERNAL_SERVER_ERROR, NO_CONTENT } from "http-status";
import { CreateName, Name } from "../protocols/names.protocols";
import namesService from "../services/names.service";

const create = async (req: Request, res: Response) => {
  const body = req.body as CreateName;
  try {
    await namesService.create(body);
    res.sendStatus(CREATED);
  } catch ({ message }){
    res.status(INTERNAL_SERVER_ERROR).send(message);
  }
};

const read = async (req: Request, res: Response) => {
  const { rows } = await namesService.read();
  try {
    res.send(rows);
  } catch ({ message }){
    res.status(INTERNAL_SERVER_ERROR).send(message);
  }
};

const update = async (req: Request, res: Response) => {
  const object : Name = { id: req.params.id, name: req.body }
  try {
    await namesService.update(object);
    res.sendStatus(NO_CONTENT);
  } catch ({ message }){
    res.status(INTERNAL_SERVER_ERROR).send(message);
  }
};

const destroy = async (req: Request, res: Response) => {
  const id = req.params.id as string;
  try {
    await namesService.destroy(id);
    res.sendStatus(NO_CONTENT);
  } catch ({ message }){
    res.status(INTERNAL_SERVER_ERROR).send(message);
  }
};  

const namesController = { create, read, update, destroy };
export default namesController;
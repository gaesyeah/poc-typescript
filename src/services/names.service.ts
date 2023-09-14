import { CreateName, Name } from "../protocols/names.protocols";
import namesRepository from "../repositories/names.repository";

const create = (body: CreateName) => {
  return namesRepository.create(body);
};

const read = () => {
  return namesRepository.read();
};

const update = async (object : Name) => {
  const { rowCount } = await namesRepository.update(object);
  if (rowCount === 0) throw { message: `a name with the id ${object.id} does not exist`};
  return;
};

const destroy = async (id: string) => {
  const { rowCount } = await namesRepository.destroy(id,);
  if (rowCount === 0) throw { message: `a name with the id ${id} does not exist`};
  return;
};

const namesService = { create, read, update, destroy };
export default namesService;
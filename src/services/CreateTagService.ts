import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories"


{}
class CreateTagService {
  async execute(name: string) {
    const tagsRepositories = getCustomRepository(TagsRepositories)
    // Verifica name, se não estiver preenchido retorna erro
    if (!name) {
      throw new Error("Incorrect name!");
    }
    // Select
    const tagAlreadyExists = await tagsRepositories.findOne({
      name,
    });

    if (tagAlreadyExists) {
      throw new Error("Tag already exists!");
    }
    const tag = tagsRepositories.create({
      name,
    });

    await tagsRepositories.save(tag);
    return tag;
  }
}

export { CreateTagService }
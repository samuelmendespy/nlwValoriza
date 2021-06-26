import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { UsersRepositories } from "../repositories/UsersRepositories";


interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    // userExists para user
    // Verificar se email existe
    const user = await usersRepositories.findOne({
      email,
    });

    if (!user) {
      throw new Error("Invalid credentials (user/password)");
    }


    // Comparar a senha
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Invalid credentials (user/password)");
    }

    const token = sign(
      {
        email: user.email,
      },
      "585eb7abc4219a9b40eb8f3f1e9793bfda221d0ae9444c28a32516fc34e9dd4b",
      {
        subject: user.id,
        expiresIn: "10h",
      }
    );

    return token;
  }
}

export { AuthenticateUserService };
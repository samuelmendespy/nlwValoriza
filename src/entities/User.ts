import { Exclude } from "class-transformer";
import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")
class User {
  @PrimaryColumn()
  readonly id: string;

  // Coluna do nome de usuário trocada de name para uname
  @Column()
  name: string;

  // Coluna de endereço do email do usuário
  @Column()
  email: string;

  // Coluna de status de privilégio de administrador
  @Column()
  admin: boolean;

  // Coluna adicionada depois de migration para senha
  @Exclude()
  @Column()
  password: string;

  // Coluna de data de criação
  @CreateDateColumn()

  //Coluna de data de atualização
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User };

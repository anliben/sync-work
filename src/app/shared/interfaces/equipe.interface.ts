import { IColaboradores } from "./colaboradores.interface";

export interface IEquipe {
  nome: string;
  role: string;
  profissionais: Array<IColaboradores>;
}

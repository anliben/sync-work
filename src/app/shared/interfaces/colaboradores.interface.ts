import { ESenioridade } from '../enums/senioridade.enum';
import { IRedesSociais } from "./rede-sociais.interface";

export interface IColaboradores {
  nome: string;
  email: string;
  contato: number;
  cnpj?: number;
  cpf: number;
  redes_sociais?: IRedesSociais;
  linguagens: Array<string>;
  senioridade?: ESenioridade;
  disponibilidade: boolean;
  empresa_que_trabalha?: string;
  nivel_tecnico?: string;
  freelancer: boolean;
  em_projeto: boolean;
}

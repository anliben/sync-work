import { IEmpresas } from "./empresas.interface";
import { IEquipe } from "./equipe.interface";

export interface IProjetos {
  nome: string;
  data_entrega: string;
  data_inicio: string;
  budget: number;
  cliente: IEmpresas;
  equipe: Array<IEquipe>;
}

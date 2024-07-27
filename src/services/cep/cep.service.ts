import { fetchCep } from "./cases/fetchCep";

const CEP_BASES = {
  cepawesome: "https://cep.awesomeapi.com.br/json/",
  viacep: "https://viacep.com.br/ws/",
};

type BaseType = keyof typeof CEP_BASES;

export class CepService {
  private readonly baseUrl: string;
  private readonly base: BaseType;

  constructor(base: BaseType) {
    this.baseUrl = CEP_BASES[base];
    this.base = base;
    if (!this.baseUrl) {
      throw new Error("Base not found");
    }
  }

  // Busca informações de CEP utilizando a API selecionada
  async findCep(cep: string) {
    return fetchCep(this.baseUrl, this.base, cep); 
  }
}
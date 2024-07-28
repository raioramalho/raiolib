import { ExecuteFindCep } from "./cases/execute.find.cep";

// Objeto contendo as URLs base para diferentes serviços de CEP
const CEP_BASES = {
  cepawesome: "https://cep.awesomeapi.com.br/json/",
  viacep: "https://viacep.com.br/ws/",
};

// Tipo que representa as chaves do objeto CEP_BASES
type BaseType = keyof typeof CEP_BASES;

/**
 * Classe responsável por gerenciar o serviço de consulta de CEP
 */
export class CepService {
  private readonly baseUrl: string;
  private readonly base: BaseType;

  /**
   * Construtor da classe CepService
   * @param base - O serviço de CEP a ser utilizado
   * @throws {Error} Se o serviço de CEP especificado não for encontrado
   */
  constructor(base: BaseType) {
    this.baseUrl = CEP_BASES[base];
    this.base = base;
    if (!this.baseUrl) {
      throw new Error("Base not found");
    }
  }

  /**
   * Busca informações de CEP utilizando a API selecionada
   * @param cep - O CEP a ser consultado
   * @returns Uma Promise com as informações do CEP
   */
  async findCep(cep: string) {
    return ExecuteFindCep(this.baseUrl, this.base, cep); 
  }
}
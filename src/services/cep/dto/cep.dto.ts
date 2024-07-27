/**
 * Interface que define a estrutura de dados para um CEP (Código de Endereçamento Postal).
 */
interface ICepDto {
  cep?: string,
  logradouro?: string,
  complemento?: string,
  bairro?: string,
  localidade?: string,
  uf?: string,
  ibge?: string,
  gia?: string,
  ddd?: number,
  state?: string,
  siafi?: string,
  address_type?: string,
  address_name?: string,
  lat?: string,
  lng?: string
}

/**
 * Classe que representa um CEP com métodos para acessar suas propriedades.
 */
export class CepDto {
  private readonly cep: string;
  private readonly logradouro: string;
  private readonly complemento: string;
  private readonly bairro: string;
  private readonly localidade: string;
  private readonly uf: string;
  private readonly ibge: string;
  private readonly gia: string;
  private readonly ddd: number;
  private readonly siafi: string;
  private readonly address_type: string;
  private readonly address_name: string;
  private readonly lat: string;
  private readonly state: string;
  private readonly lng: string;

  /**
   * Construtor da classe CepDto.
   * @param data Objeto contendo os dados do CEP.
   */
  constructor(data: ICepDto) {
    this.cep = data.cep || "";
    this.logradouro = data.logradouro || "";
    this.complemento = data.complemento || "";
    this.bairro = data.bairro || "";
    this.localidade = data.localidade || "";
    this.uf = data.uf || "";
    this.state = data.state || "";
    this.ibge = data.ibge || "";
    this.gia = data.gia || "";
    this.ddd = data.ddd !== undefined ? +data.ddd : 0;
    this.siafi = data.siafi || "";
    this.address_type = data.address_type || "";
    this.address_name = data.address_name || "";
    this.lat = data.lat || "";
    this.lng = data.lng || "";
  }

  /**
   * Retorna um objeto com todas as propriedades do CEP.
   * @returns {ICepDto} Objeto contendo os dados do CEP.
   */
  getThis(): ICepDto {
    return {
      cep: this.cep,
      logradouro: this.logradouro,
      complemento: this.complemento,
      bairro: this.bairro,
      localidade: this.localidade,
      uf: this.uf,
      ibge: this.ibge,
      gia: this.gia,
      state: this.state,
      ddd: this.ddd,
      siafi: this.siafi,
      address_type: this.address_type,
      address_name: this.address_name,
      lat: this.lat,
      lng: this.lng,
    };
  }

  /**
   * Retorna o CEP.
   * @returns {string} O CEP.
   */
  getCep() {
    return this.cep;
  }

  /**
   * Retorna o logradouro.
   * @returns {string} O logradouro.
   */
  getLogradouro() {
    return this.logradouro;
  }

  /**
   * Retorna o complemento.
   * @returns {string} O complemento.
   */
  getComplemento() {
    return this.complemento;
  }

  /**
   * Retorna o bairro.
   * @returns {string} O bairro.
   */
  getBairro() {
    return this.bairro;
  }

  /**
   * Retorna a localidade.
   * @returns {string} A localidade.
   */
  getLocalidade() {
    return this.localidade;
  }

  /**
   * Retorna a UF (Unidade Federativa).
   * @returns {string} A UF.
   */
  getUf() {
    return this.uf;
  }

  /**
   * Retorna o estado.
   * @returns {string} O estado.
   */
  getState() {
    return this.state;
  }

  /**
   * Retorna o código IBGE.
   * @returns {string} O código IBGE.
   */
  getIbge() {
    return this.ibge;
  }

  /**
   * Retorna o código GIA.
   * @returns {string} O código GIA.
   */
  getGia() {
    return this.gia;
  }

  /**
   * Retorna o DDD.
   * @returns {number} O DDD.
   */
  getDdd() {
    return this.ddd;
  }

  /**
   * Retorna o código SIAFI.
   * @returns {string} O código SIAFI.
   */
  getSiafi() {
    return this.siafi;
  }

  /**
   * Retorna o tipo de endereço.
   * @returns {string} O tipo de endereço.
   */
  getAddressType() {
    return this.address_type;
  }

  /**
   * Retorna o nome do endereço.
   * @returns {string} O nome do endereço.
   */
  getAddressName() {
    return this.address_name;
  }

  /**
   * Retorna a latitude.
   * @returns {string} A latitude.
   */
  getLat() {
    return this.lat;
  }

  /**
   * Retorna a longitude.
   * @returns {string} A longitude.
   */
  getLng() {
    return this.lng;
  }
}

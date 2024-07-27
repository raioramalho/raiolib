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
    siafi?: string,
    address_type?: string,
    address_name?: string,
    lat?: string,
    lng?: string
}

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
  private readonly lng: string;

  constructor(
    cep?: string,
    logradouro?: string,
    complemento?: string,
    bairro?: string,
    localidade?: string,
    uf?: string,
    ibge?: string,
    gia?: string,
    ddd?: number,
    siafi?: string,
    address_type?: string,
    address_name?: string,
    lat?: string,
    lng?: string
  ) {
    this.cep = cep || "";
    this.logradouro = logradouro || "";
    this.complemento = complemento || "";
    this.bairro = bairro || "";
    this.localidade = localidade || "";
    this.uf = uf || "";
    this.ibge = ibge || "";
    this.gia = gia || "";
    this.ddd = ddd !== undefined ? +ddd : 0;
    this.siafi = siafi || "";
    this.address_type = address_type || "";
    this.address_name = address_name || "";
    this.lat = lat || "";
    this.lng = lng || "";
  }

  getThis(): ICepDto {
    const data =  JSON.stringify(this.cep);
    return JSON.parse(data);
  }

  getCep() {
    const data: any = this.cep;
    return data.cep;
  }

  getLogradouro() {
    const data: any = this.cep;
    return data.logradouro;
  }

  getComplemento() {
    const data: any = this.cep;
    return data.complemento;
  }

  getBairro() {
    const data: any = this.cep;
    return data.bairro;
  }

  getLocalidade() {
    const data: any = this.cep;
    return data.localidade;
  }

  getUf() {
    const data: any = this.cep;
    return data.uf;
  }

  getIbge() {
    const data: any = this.cep;
    return data.ibge;
  }

  getGia() {
    const data: any = this.cep;
    return data.gia;
  }

  getDdd() {
    const data: any = this.cep;
    return +data.ddd;
  }

  getSiafi() {
    const data: any = this.cep;
    return data.siafi;
  }

  getAddressType() {
    const data: any = this.cep;
    return data.address_type;
  }

  getAddressName() {
    const data: any = this.cep;
    return data.address_name;
  }

  getLat() {
    const data: any = this.cep;
    return data.lat;
  }

  getLng() {
    const data: any = this.cep;
    return data.lng;
  }
}
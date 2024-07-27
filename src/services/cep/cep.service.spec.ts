import { expect, describe, it } from 'vitest';
import { CepService } from './cep.service';
import { CepDto } from './dto/cep.dto';
describe('Bateria de testes para o CepService', () => {
  it('Deve ser possível instanciar o service', () => {
    const start = performance.now();
    const service = new CepService('cepawesome');
    const end = performance.now();
    console.log(`Tempo de execução da instanciação: ${end - start} ms`);
    expect(service).toBeDefined();
  });

  it('Deve ser possível buscar o cep com a base [cepawesome]', async() => {
    const service = new CepService('cepawesome');
    const start = performance.now();
    const cep = await service.findCep('70040010');
    const end = performance.now();
    console.log(`Tempo de execução buscarCep: ${end - start} ms`);

    expect(cep).toBeInstanceOf(CepDto);
    expect(cep.getDdd()).toBe(61);
    expect(cep.getThis().cep).toBe('70040010');
    expect(cep.getThis()).toEqual({
      cep: '70040010',
      address: 'SBN Quadra 1',
      address_type: 'SBN',
      address_name: 'Quadra 1',
      city: 'Brasília',
      city_ibge: '5300108',
      ddd: "61",
      district: 'Asa Norte',
      lat: '-15.78913',
      lng: '-47.8788',
      state: 'DF'
    });
    
    
  });

  it('Deve ser possível buscar o cep com a base [viacep]', async() => {
    const service = new CepService('viacep');
    const start = performance.now();
    const cep = await service.findCep('70040010');
    const end = performance.now();
    console.log(`Tempo de execução buscarCep: ${end - start} ms`);

    expect(cep).toBeInstanceOf(CepDto);
    expect(cep.getDdd()).toBe(61);
    expect(cep.getThis().uf).toBe('DF');
    expect(cep.getThis()).toEqual({
      cep: '70040-010',
      logradouro: 'SBN Quadra 1',
      complemento: '',
      bairro: 'Asa Norte',
      localidade: 'Brasília',
      uf: 'DF',
      ibge: '5300108',
      gia: '',
      ddd: "61",
      siafi: '9701',
      unidade: '',
    });
    
  });

});

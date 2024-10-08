// // Importação das dependências necessárias
// import { expect, describe, it } from 'vitest';
// import { CepService } from './cep.service';
// import { CepDto } from './dto/cep.dto';

// // Descrição da suite de testes para o CepService
// describe('Bateria de testes para o CepService', () => {
//   // Teste para verificar a instanciação do serviço
//   it('Deve ser possível instanciar o service', () => {
//     const start = performance.now();
//     const service = new CepService('cepawesome');
//     const end = performance.now();
//     console.log(`Tempo de execução da instanciação: ${end - start} ms`);
//     expect(service).toBeDefined();
//   });

//   // Teste para buscar CEP utilizando a base 'cepawesome'
//   it('Deve ser possível buscar o cep com a base [cepawesome]', async() => {
//     const service = new CepService('cepawesome');
//     const start = performance.now();
//     const cep = await service.findCep('70040010');
//     const end = performance.now();
//     console.log(`Tempo de execução buscarCep: ${end - start} ms`);

//     // Verificações das propriedades do CEP retornado
//     expect(cep).toBeInstanceOf(CepDto);
//     expect(cep.getDdd()).toBe(61);
//     expect(cep.getThis().cep).toBe('70040010');
//     expect(cep['state']).toBe('DF'); 
//   });

//   // Teste para buscar CEP utilizando a base 'viacep'
//   it('Deve ser possível buscar o cep com a base [viacep]', async() => {
//     const service = new CepService('viacep');
//     const start = performance.now();
//     const cep = await service.findCep('70040010');
//     const end = performance.now();
//     console.log(`Tempo de execução buscarCep: ${end - start} ms`);

//     // Verificações das propriedades do CEP retornado
//     expect(cep).toBeInstanceOf(CepDto);
//     expect(cep.getDdd()).toBe(61);
//     expect(cep.getThis().uf).toBe('DF');
//     expect(cep['uf']).toBe('DF');
//   });
// });

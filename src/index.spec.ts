/**
 * @vitest-environment node
 */

import { expect, describe, it } from 'vitest';
import { CepService } from './index';
import { performance } from 'perf_hooks';

/**
 * Suite de testes para a classe CepService.
 */
describe('Testes da Classe CepService', () => {
  /**
   * Caso de teste: Verifica a instanciação correta do CepService.
   */
  it('deve instanciar o CepService corretamente', () => {
    const startTime = performance.now();

    // Instancia o CepService com o provedor 'viacep'
    const cepService = new CepService('viacep');

    // Verifica se a instância está devidamente definida
    expect(cepService).toBeDefined();

    const endTime = performance.now();
    const executionTime = endTime - startTime;

    console.log(`Tempo de execução do teste: ${executionTime.toFixed(2)} ms`);
  });
});

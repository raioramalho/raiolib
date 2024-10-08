import { describe, expect, it } from "vitest";
import OneSignalService from "./onesignal.service";

describe('Bateria de testes para o OneSignalService', () => {
  // Teste para verificar a instanciação do serviço
  it('Deve ser possível instanciar o service', () => {
    const start = performance.now();
    const service = new OneSignalService();
    const end = performance.now();
    console.log(`Tempo de execução da instanciação: ${end - start} ms`);
    expect(service).toBeDefined();
  });
});
import { expect, describe, it } from 'vitest';
import { ImageService } from './image.service';

// Descrição da suite de testes para o ImageService
describe('Bateria de testes para o ImageService', () => {
  // Teste para verificar a instanciação do serviço
  it('Deve ser possível instanciar o service', () => {
    const start = performance.now();
    const service = new ImageService();
    const end = performance.now();
    console.log(`Tempo de execução da instanciação: ${end - start} ms`);
    expect(service).toBeDefined();
  });

  // Teste para verificar o download de uma imagem
  it('Deve ser possível fazer o download de uma imagem', async () => {
    const start = performance.now();
    const service = new ImageService();
    const image = await service.download('https://fastly.picsum.photos/id/1018/200/300.jpg?hmac=IrYgAIczHOxOgmWliW3MlASD3LdAJ_aHAdh5f2aY9Sw');
    const end = performance.now();
    console.log(`Tempo de execução do download: ${end - start} ms`);
    expect(image).toBeDefined();
    expect(image.type).toBe('image/jpeg');
    expect(image.getType()).toBe('image/jpeg');
  });

});
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
    const image = await service.download('https://blog.back4app.com/wp-content/uploads/2021/06/backend-vs-frontend-2.png');
    const end = performance.now();
    console.log(`Tempo de execução do download: ${end - start} ms`);
    expect(image).toBeDefined();
    expect(image.type).toBe('image/png');
    expect(image.getType()).toBe('image/png');
    expect(image.base64).toBeDefined();
    expect(image.getBase64()).toBeDefined();
  });

  // Teste para converter uma imagem base64 para binário
  it('Deve ser possível converter uma imagem base64 para binário', async () => {
    const start = performance.now();
    const service = new ImageService();
    const image = await service.download('https://blog.back4app.com/wp-content/uploads/2021/06/backend-vs-frontend-2.png');
    const binary = await service.getBinary(image);

    const end = performance.now();
    console.log(`Tempo de execução da conversão: ${end - start} ms`);
    expect(binary).toBeDefined();
    expect(binary.byteLength).toBeGreaterThan(0);
  });
});
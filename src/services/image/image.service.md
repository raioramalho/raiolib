# ImageService

A classe `ImageService` é responsável por lidar com operações relacionadas a imagens, principalmente focada no download e processamento de imagens a partir de URLs.

## Métodos

### download(fileUrl: string, timeout?: number): Promise<ImageDto|Error>

Faz o download de uma imagem a partir de uma URL fornecida.

- `fileUrl`: A URL do arquivo a ser baixado
- `timeout` (opcional): Tempo limite para a operação

Retorna uma Promise que resolve para um `ImageDto` ou um `Error`.

### Métodos Privados

- `checkUrlAccessibility(fileUrl: string, timeout?: number): Promise<void>`
- `processResponse(response: Response): Promise<{ base64: string; mimeType: string | null }>`
- `logError(message: string, error?: unknown): void`
- `logSuccess(fileUrl: string, mimeType: string | null): void`

## Uso

const imageService = new ImageService();
const resultado = await imageService.download('https://example.com/image.jpg');
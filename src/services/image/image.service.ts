/**
 * Importação das dependências necessárias
 */
import { ImageDto } from './dto/image.dto';
import { ExecuteDownloadImage } from './cases/execute.DownloadImage';
import { ExecuteProcessResponse } from './cases/execute.ProcessResponse';
import { ExecuteCheckUrlAccessibility } from './cases/execute.CheckUrlAccessibility';
import { Base64ToBinary } from './cases/execute.Base64ToBinary';

/**
 * Classe responsável pelo serviço de imagens
 */
export class ImageService {
  /**
   * Realiza o download de uma imagem a partir de uma URL
   * @param fileUrl URL do arquivo a ser baixado
   * @param timeout Tempo limite para a operação (opcional)
   * @returns Promise com o ImageDto ou um Error
   */
  async download(fileUrl: string, timeout?: number) {
    return ExecuteDownloadImage({ fileUrl, timeout }, this.checkUrlAccessibility, this.processResponse, this.logError, this.logSuccess);
  }

  /**
   * Converte uma imagem de base64 para binário
   * @param imageDto Objeto ImageDto contendo a imagem em base64
   * @returns Promise com o resultado da conversão
   */
  async getBinary(imageDto: ImageDto) {
    return Base64ToBinary(imageDto, this.logError, this.logSuccess);
  }

  /**
   * Verifica a acessibilidade da URL fornecida
   * @param fileUrl URL a ser verificada
   * @param timeout Tempo limite para a operação (opcional)
   */
  private async checkUrlAccessibility(fileUrl: string, timeout?: number): Promise<void> {
    return ExecuteCheckUrlAccessibility(fileUrl, timeout);
  }

  /**
   * Processa a resposta da requisição
   * @param response Objeto Response da requisição
   * @returns Objeto contendo a imagem em base64 e o tipo MIME
   */
  private async processResponse(response: Response): Promise<{ base64: string; mimeType: string | null }> {
    return ExecuteProcessResponse(response);
  }

  /**
   * Registra erros no console
   * @param message Mensagem de erro
   * @param error Objeto de erro (opcional)
   */
  private logError(message: string, error?: unknown): void {
    console.error(message);
    if (error instanceof Error) {
      console.error(`Mensagem de erro: ${error.message}`);
    }
    if (error instanceof Response) {
      console.error(`Status HTTP: ${error.status}`);
    }
  }

  /**
   * Registra informações de sucesso no console
   * @param fileUrl URL do arquivo baixado
   * @param mimeType Tipo MIME do arquivo
   */
  private logSuccess(fileUrl: string, mimeType: string | null): void {
    console.log(`Download bem-sucedido para a URL: ${fileUrl}`);
    console.log(`Tipo de arquivo baixado: ${mimeType}`);
  }
}
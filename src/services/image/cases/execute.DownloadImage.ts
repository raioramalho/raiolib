import { ExecuteDownloadImageDto } from "../dto/execute.download.image.dto";
import { ImageDto } from "../dto/image.dto";

/**
 * Executa o download de uma imagem a partir de uma URL.
 * @param {ExecuteDownloadImageDto} dto - Objeto contendo os parâmetros para o download.
 * @param {Function} checkUrlAccessibility - Função para verificar a acessibilidade da URL.
 * @param {Function} processResponse - Função para processar a resposta do download.
 * @param {Function} logError - Função para registrar erros.
 * @param {Function} logSuccess - Função para registrar sucesso.
 * @returns {Promise<ImageDto | Error>} Retorna um objeto ImageDto em caso de sucesso ou um Error em caso de falha.
 */
export async function ExecuteDownloadImage(
  dto: ExecuteDownloadImageDto,
  checkUrlAccessibility: Function,
  processResponse: Function,
  logError: Function,
  logSuccess: Function
): Promise<ImageDto> {
  let { fileUrl, timeout } = dto;

  // Verifica se a URL do arquivo é válida
  if (!fileUrl) {
    logError("Download file URL is empty or null");
    throw new Error("Download file URL is empty or null");
  }

  try {
    // Verifica a acessibilidade da URL antes de prosseguir
    await checkUrlAccessibility(fileUrl, timeout);

    // Realiza o download do arquivo
    const response = await fetch(fileUrl);

    // Processa a resposta para obter o base64 e o tipo MIME
    const { base64, mimeType } = await processResponse(response);

    // Registra o sucesso do download
    logSuccess(fileUrl, mimeType);

    // Verifica se o tipo MIME foi obtido corretamente
    if (mimeType) {
      return new ImageDto(mimeType,  base64);
    }

    // Lança um erro se o tipo de arquivo for inválido
    throw new Error("Download Error: Invalid file type");
  } catch (error) {
    // Registra e lança um erro em caso de falha no download
    logError(`Download failed for URL: ${fileUrl}`, error);
    throw new Error(`Download failed for URL: ${fileUrl}`);
  }
}

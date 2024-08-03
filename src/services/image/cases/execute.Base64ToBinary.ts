import { ImageDto } from "../dto/image.dto";

/**
 * Converte uma string base64 para um ArrayBuffer.
 * @param {ImageDto} imageDto.base64 - A string base64 a ser convertida | imageDto.mimeType - O tipo MIME da imagem (não utilizado na conversão, mas mantido para consistência).
 * @param {Function} logError - Uma função para registrar erros, se necessário.
 * @param {Function} logSuccess - Uma função para registrar sucessos, se necessário.
 * @returns {ArrayBuffer} O ArrayBuffer contendo os dados binários da imagem.
 */
export function Base64ToBinary(
  imageDto: ImageDto,
  logError: Function,
  logSuccess: Function
): ArrayBuffer {
  try {
    // Remove o prefixo de dados URI, se presente
    const base64Data = imageDto.base64.replace(/^data:image\/\w+;base64,/, "");

    // Converte a string base64 para um Buffer
    const buffer = Buffer.from(base64Data, "base64");

    // Converte o Buffer para um ArrayBuffer
    const arrayBuffer = buffer.buffer.slice(
      buffer.byteOffset,
      buffer.byteOffset + buffer.byteLength
    );

    logSuccess("Base64 convertido para ArrayBuffer com sucesso");
    return arrayBuffer;
  } catch (error) {
    logError("Erro ao converter Base64 para ArrayBuffer:", error);
    throw error;
  }
}

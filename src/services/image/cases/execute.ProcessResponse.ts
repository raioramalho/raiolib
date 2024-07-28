/**
 * Executa o processamento da resposta da requisição de imagem.
 * @param {Response} response - A resposta da requisição HTTP.
 * @returns {Promise<{ base64: string; mimeType: string | null }>} Uma Promise que resolve para um objeto contendo a imagem em base64 e o tipo MIME.
 */
export async function ExecuteProcessResponse(
  response: Response
): Promise<{ base64: string; mimeType: string | null }> {
  // Obtém o conteúdo da resposta como um ArrayBuffer
  const arrayBuffer = await response.arrayBuffer();
  
  // Converte o ArrayBuffer para uma string base64
  const base64 = Buffer.from(arrayBuffer).toString("base64");
  
  // Obtém o tipo MIME do cabeçalho da resposta
  const mimeType = response.headers.get("content-type");

  // Retorna um objeto com a imagem em base64 e o tipo MIME
  return { base64, mimeType };
}

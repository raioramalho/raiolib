/**
 * Verifica a acessibilidade de uma URL.
 * 
 * @param fileUrl - A URL do arquivo a ser verificado.
 * @param timeout - Tempo limite opcional para a requisição (em milissegundos).
 * @throws {Error} Se a URL não estiver acessível.
 */
export async function ExecuteCheckUrlAccessibility(
  fileUrl: string,
  timeout?: number
): Promise<void> {
  // Realiza uma requisição HEAD para a URL especificada
  const headResponse = await fetch(fileUrl, {
    method: "HEAD",
    signal: timeout ? AbortSignal.timeout(timeout) : undefined,
  });

  // Verifica se a resposta tem status 200 (OK)
  if (headResponse.status !== 200) {
    throw new Error(`URL não acessível: ${fileUrl}`);
  }
}

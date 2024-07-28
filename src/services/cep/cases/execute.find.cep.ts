/**
 * Importa o DTO (Data Transfer Object) para o CEP.
 */
import { CepDto } from "../dto/cep.dto";

/**
 * Busca informações de um CEP utilizando uma API externa.
 * 
 * @param baseUrl - URL base da API a ser utilizada.
 * @param base - Indica qual API será utilizada: "cepawesome" ou "viacep".
 * @param cep - O número do CEP a ser consultado.
 * @returns Uma Promise que resolve para um objeto CepDto contendo as informações do CEP.
 * @throws Lança um erro se a busca falhar ou se ocorrer um erro desconhecido.
 */
export async function ExecuteFindCep(
  baseUrl: string,
  base: "cepawesome" | "viacep",
  cep: string
): Promise<CepDto> {
  try {
    // Constrói a URL apropriada com base na API selecionada
    const url = base === "viacep" ? `${baseUrl}${cep}/json` : `${baseUrl}${cep}`;

    // Realiza a requisição HTTP para a API
    const response = await fetch(url, {
      method: "GET",
      signal: AbortSignal.timeout(1000), // Define um timeout de 1 segundo
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Verifica se a resposta foi bem-sucedida
    if (!response.ok) {
      throw new Error(`Erro ao buscar o CEP ${cep}`);
    }

    // Converte a resposta para JSON
    const data = await response.json();

    // Retorna um novo objeto CepDto com os dados obtidos
    return new CepDto(data);
  } catch (error: unknown) {
    // Trata erros conhecidos e desconhecidos
    if (error instanceof Error) {
      throw new Error(`Erro na busca do CEP: ${error.message}`);
    }
    throw new Error("Erro desconhecido na busca do CEP");
  }
}

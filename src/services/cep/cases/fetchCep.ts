import { CepDto } from "../dto/cep.dto";

export async function fetchCep(
  baseUrl: string,
  base: "cepawesome" | "viacep",
  cep: string
): Promise<CepDto> {
  try {
    const url = base === "viacep" ? `${baseUrl}${cep}/json` : `${baseUrl}${cep}`;

    const response = await fetch(url, {
      method: "GET",
      signal: AbortSignal.timeout(1000),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Erro ao buscar o CEP ${cep}`);
    }

    const data = await response.json();

    return new CepDto(data);
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Erro na busca do CEP: ${error.message}`);
    }
    throw new Error("Erro desconhecido na busca do CEP");
  }
}

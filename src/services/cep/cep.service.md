### Conteudo ==>

1 - O CepService é um utilitário para consulta de CEP (Código de Endereçamento Postal) brasileiro. Ele fornece uma interface simples para buscar informações de endereço a partir de um CEP.

#### Características:

- Consulta de CEP utilizando a API ViaCEP
- Retorna informações detalhadas do endereço (logradouro, bairro, cidade, estado)
- Tratamento de erros para CEPs inválidos ou não encontrados

#### Exemplo de uso:


import { CepService } from 'raio';

const cepService = new CepService();

async function buscarEndereco(cep: string) {
  try {
    const endereco = await cepService.buscarCep(cep);
    console.log(endereco);
  } catch (error) {
    console.error('Erro ao buscar CEP:', error.message);
  }
}

buscarEndereco('01001000');


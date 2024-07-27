# Raio

Raio é um pacote npm que contém uma coleção de códigos modulares e genéricos para serem reutilizados em projetos TypeScript e JavaScript, com foco especial em NestJS e NextJS.

## Descrição

Este pacote foi criado para facilitar o desenvolvimento de aplicações, fornecendo componentes, utilitários e ferramentas prontas para uso. Com Raio, você pode acelerar seu processo de desenvolvimento e manter a consistência em seus projetos.

## Características

- Componentes reutilizáveis para NestJS e NextJS
- Utilitários para TypeScript e JavaScript
- Ferramentas para aumentar a produtividade no desenvolvimento
- Código modular e de fácil integração

## Instalação

Para instalar o Raio, use o seguinte comando:


npm install raio


## Uso

Importe os módulos necessários em seu projeto:


import { ComponenteX, UtilY } from 'raio';


## Documentação

Para mais informações sobre como usar cada componente e utilitário:

### CepService

O CepService é um utilitário para consulta de CEP (Código de Endereçamento Postal) brasileiro. Ele fornece uma interface simples para buscar informações de endereço a partir de um CEP.

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


Para mais detalhes sobre os métodos disponíveis e opções de configuração, consulte a documentação completa do CepService.


## Contribuição

Contribuições são bem-vindas! Por favor.

## Licença

Este projeto está licenciado sob a [MIT License]().

## Contato

Se você tiver alguma dúvida ou sugestão, não hesite em [abrir uma issue]() ou entrar em contato conosco em [ramalho.sit@gmail.com](mailto:ramalho.sit@gmail.com).

---

Desenvolvido com ❤️ por [Alan Ramalho/ RaioSystems]

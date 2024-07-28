# CepService

O `CepService` é uma classe responsável por gerenciar o serviço de consulta de CEP (Código de Endereçamento Postal) no Brasil. Ele permite a busca de informações de endereço a partir de um CEP fornecido, utilizando diferentes APIs de serviço de CEP.

## Funcionalidades

- Suporte a múltiplas APIs de serviço de CEP
- Busca de informações de endereço a partir de um CEP

## Uso


const cepService = new CepService('viacep');
const cepInfo = await cepService.findCep('01001000');


## Construtor


constructor(base: BaseType)


- `base`: O serviço de CEP a ser utilizado (ex: 'cepawesome', 'viacep')

## Métodos

### findCep


async findCep(cep: string): Promise<any>


Busca informações de CEP utilizando a API selecionada.

- `cep`: O CEP a ser consultado
- Retorna: Uma Promise com as informações do CEP

## Serviços de CEP suportados

- cepawesome: https://cep.awesomeapi.com.br/json/
- viacep: https://viacep.com.br/ws/

## Observações

- Se o serviço de CEP especificado no construtor não for encontrado, uma exceção será lançada.
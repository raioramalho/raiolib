/**
 * Pacote criado e mantido por @raioramalho
 * 
 * Este projeto contém funções, classes e interfaces para ajudar no dia a dia.
 * 
 * @author Alan Ramalho
 * @version 1.1.7-b
 * @date 26-07-2024
 */

/**
 * Importação do módulo de serviços para nestjs
 * Este módulo exporta os servicos disponíveis na pasta services
 */
import { ServicesModule } from './services/services.module';

/**
 * Importação do serviço de CEP
 * Este serviço é responsável por operações relacionadas a CEP (Código de Endereçamento Postal)
 */
import { CepService } from "./services/cep/cep.service";

/**
 * Importação do serviço de Imagem
 * Este serviço é responsável por operações relacionadas a Imagem
 */
import { ImageService } from "./services/image/image.service";

/**
 * Exportação do módulo de serviços
 * Permite que outros módulos utilizem os serviços disponíveis
 */
export { ServicesModule };

/**
 * Exportação do serviço de CEP
 * Permite que outros módulos utilizem o CepService
 */
export { CepService };

/**
 * Exportação do serviço de Imagem
 * Permite que outros módulos utilizem o ImageService
 */
export { ImageService };
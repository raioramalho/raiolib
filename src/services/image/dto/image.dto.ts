/**
 * Classe que representa um objeto de imagem.
 */
export class ImageDto {
    /** type da imagem */
    type: string;

    /** Representação da imagem em base64 */
    base64: string;

    /**
     * Construtor da classe ImageDto.
     * @param type - O type da imagem (opcional).
     * @param base64 - A representação da imagem em base64 (opcional).
     */
    constructor(type?: string, base64?: string) {
        this.type = type ? type : '';
        this.base64 = base64 ? base64 : '';
    }

    /**
     * Obtém o type da imagem.
     * @returns O type da imagem.
     */
    getType(): string {
        return this.type;
    }

    /**
     * Obtém a representação da imagem em base64.
     * @returns A representação da imagem em base64.
     */
    getBase64(): string {
        return this.base64;
    }
}
export abstract class SaqueException extends Error {
    constructor(mensagem: string) {
        super(mensagem);
        this.name = "SaqueException";
    }
}
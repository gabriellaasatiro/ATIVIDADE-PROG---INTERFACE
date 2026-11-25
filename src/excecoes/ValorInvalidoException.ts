import { SaqueException } from "./SaqueException";

export class ValorInvalidoException extends SaqueException {
    constructor() {
        super("Valor de saque inválido!");
        this.name = "ValorInvalidoException";
    }
}
import { SaqueException } from "./SaqueException";

export class LimiteDiarioException extends SaqueException {
    constructor() {
        super("Limite diário de saque excedido!");
        this.name = "LimiteDiarioException";
    }
}
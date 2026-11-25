import { SaqueException } from "./SaqueException";

export class ContaBloqueadaException extends SaqueException {
    constructor() {
        super("A conta está bloqueada!");
        this.name = "ContaBloqueadaException";
    }
}
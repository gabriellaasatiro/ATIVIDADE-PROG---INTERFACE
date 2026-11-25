import { SaqueException } from "./SaqueException";

export class SaldoInsuficienteException extends SaqueException {
    faltante: number;

    constructor(faltante: number) {
        super(`Saldo insuficiente! Faltam R$ ${faltante.toFixed(2)}.`);
        this.faltante = faltante;
        this.name = "SaldoInsuficienteException";
    }
}
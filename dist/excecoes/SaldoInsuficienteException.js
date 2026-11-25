"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaldoInsuficienteException = void 0;
const SaqueException_1 = require("./SaqueException");
class SaldoInsuficienteException extends SaqueException_1.SaqueException {
    faltante;
    constructor(faltante) {
        super(`Saldo insuficiente! Faltam R$ ${faltante.toFixed(2)}.`);
        this.faltante = faltante;
        this.name = "SaldoInsuficienteException";
    }
}
exports.SaldoInsuficienteException = SaldoInsuficienteException;
//# sourceMappingURL=SaldoInsuficienteException.js.map
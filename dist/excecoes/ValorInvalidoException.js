"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValorInvalidoException = void 0;
const SaqueException_1 = require("./SaqueException");
class ValorInvalidoException extends SaqueException_1.SaqueException {
    constructor() {
        super("Valor de saque inválido!");
        this.name = "ValorInvalidoException";
    }
}
exports.ValorInvalidoException = ValorInvalidoException;
//# sourceMappingURL=ValorInvalidoException.js.map
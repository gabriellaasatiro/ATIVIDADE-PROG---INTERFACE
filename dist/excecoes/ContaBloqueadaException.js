"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaBloqueadaException = void 0;
const SaqueException_1 = require("./SaqueException");
class ContaBloqueadaException extends SaqueException_1.SaqueException {
    constructor() {
        super("A conta está bloqueada!");
        this.name = "ContaBloqueadaException";
    }
}
exports.ContaBloqueadaException = ContaBloqueadaException;
//# sourceMappingURL=ContaBloqueadaException.js.map
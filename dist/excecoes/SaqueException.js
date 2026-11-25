"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaqueException = void 0;
class SaqueException extends Error {
    constructor(mensagem) {
        super(mensagem);
        this.name = "SaqueException";
    }
}
exports.SaqueException = SaqueException;
//# sourceMappingURL=SaqueException.js.map
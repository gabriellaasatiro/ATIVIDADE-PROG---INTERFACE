"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LimiteDiarioException = void 0;
const SaqueException_1 = require("./SaqueException");
class LimiteDiarioException extends SaqueException_1.SaqueException {
    constructor() {
        super("Limite diário de saque excedido!");
        this.name = "LimiteDiarioException";
    }
}
exports.LimiteDiarioException = LimiteDiarioException;
//# sourceMappingURL=LimiteDiarioException.js.map
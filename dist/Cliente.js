"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    nome;
    cpf;
    endereco;
    renda;
    contas = [];
    canais = [];
    constructor(nome, cpf, endereco, renda) {
        this.nome = nome;
        this.cpf = cpf;
        this.endereco = endereco;
        this.renda = renda;
    }
    getNome() {
        return this.nome;
    }
    getCpf() {
        return this.cpf;
    }
    getEndereco() {
        return this.endereco;
    }
    getRenda() {
        return this.renda;
    }
    adicionarConta(conta) {
        this.contas.push(conta);
    }
    adicionarCanal(canal) {
        this.canais.push(canal);
    }
    notificar(mensagem) {
        for (const canal of this.canais) {
            canal.enviarMensagem(this, mensagem);
        }
    }
}
exports.Cliente = Cliente;
//# sourceMappingURL=Cliente.js.map
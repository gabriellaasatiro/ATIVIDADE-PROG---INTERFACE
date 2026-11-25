"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
const ValorInvalidoException_1 = require("./excecoes/ValorInvalidoException");
const ContaBloqueadaException_1 = require("./excecoes/ContaBloqueadaException");
const SaldoInsuficienteException_1 = require("./excecoes/SaldoInsuficienteException");
const LimiteDiarioException_1 = require("./excecoes/LimiteDiarioException");
class Conta {
    numero;
    agencia;
    dataAbertura;
    saldo;
    limiteDiario;
    saquesDoDia = 0;
    bloqueada = false;
    titular;
    constructor(numero, agencia, dataAbertura, saldo, limiteDiario, titular) {
        this.numero = numero;
        this.agencia = agencia;
        this.dataAbertura = dataAbertura;
        this.saldo = saldo;
        this.limiteDiario = limiteDiario;
        this.titular = titular;
        titular.adicionarConta(this);
    }
    getNumero() {
        return this.numero;
    }
    getAgencia() {
        return this.agencia;
    }
    getDataAbertura() {
        return this.dataAbertura;
    }
    getSaldo() {
        return this.saldo;
    }
    getTitular() {
        return this.titular;
    }
    sacar(valor) {
        if (valor <= 0) {
            throw new ValorInvalidoException_1.ValorInvalidoException();
        }
        if (this.bloqueada) {
            throw new ContaBloqueadaException_1.ContaBloqueadaException();
        }
        if (valor > this.saldo) {
            throw new SaldoInsuficienteException_1.SaldoInsuficienteException(valor - this.saldo);
        }
        if (this.saquesDoDia + valor > this.limiteDiario) {
            throw new LimiteDiarioException_1.LimiteDiarioException();
        }
        this.saldo -= valor;
        this.saquesDoDia += valor;
        console.log("Saque realizado com sucesso!");
        console.log(`Saldo atual: R$ ${this.saldo.toFixed(2)}`);
    }
    depositar(valor) {
        if (valor <= 0) {
            throw new Error("Valor de depósito inválido!");
        }
        this.saldo += valor;
        console.log("Depósito realizado com sucesso!");
        console.log(`Saldo atual: R$ ${this.saldo.toFixed(2)}`);
    }
    consultarSaldo() {
        return this.saldo;
    }
}
exports.Conta = Conta;
//# sourceMappingURL=Conta.js.map

import type { Cliente } from "./Cliente";

import { ValorInvalidoException } from "./excecoes/ValorInvalidoException";
import { ContaBloqueadaException } from "./excecoes/ContaBloqueadaException";
import { SaldoInsuficienteException } from "./excecoes/SaldoInsuficienteException";
import { LimiteDiarioException } from "./excecoes/LimiteDiarioException";

export class Conta {

 private   numero: number;
    private agencia: number;
    private dataAbertura: string;
    private saldo: number;

    private limiteDiario: number;
    private saquesDoDia: number = 0;
    public bloqueada: boolean = false;

    public titular: Cliente;

    constructor(
        numero: number,
        agencia: number,
        dataAbertura: string,
        saldo: number,
        limiteDiario: number,
        titular: Cliente
    ) {
        this.numero = numero;
        this.agencia = agencia;
        this.dataAbertura = dataAbertura;
        this.saldo = saldo;
        this.limiteDiario = limiteDiario;
        this.titular = titular;

        titular.adicionarConta(this);
    }

     getNumero(): number {
        return this.numero;
    }

    getAgencia(): number {
        return this.agencia;
    }

    getDataAbertura(): string {
        return this.dataAbertura;
    }

    getSaldo(): number {
        return this.saldo;
    }

    getTitular(): Cliente {
        return this.titular;
    }

    sacar(valor: number): void {

        if (valor <= 0) {
            throw new ValorInvalidoException();
        }

        if (this.bloqueada) {
            throw new ContaBloqueadaException();
        }

        if (valor > this.saldo) {
            throw new SaldoInsuficienteException(
                valor - this.saldo
            );
        }

        if (this.saquesDoDia + valor > this.limiteDiario) {
            throw new LimiteDiarioException();
        }

        this.saldo -= valor;
        this.saquesDoDia += valor;

        console.log("Saque realizado com sucesso!");
        console.log(`Saldo atual: R$ ${this.saldo.toFixed(2)}`);
    }

    depositar(valor: number): void {

        if (valor <= 0) {
            throw new Error("Valor de depósito inválido!");
        }

        this.saldo += valor;

        console.log("Depósito realizado com sucesso!");
        console.log(`Saldo atual: R$ ${this.saldo.toFixed(2)}`);
    }

    consultarSaldo(): number {
        return this.saldo;
    }
}

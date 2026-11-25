import type { Cliente } from "./Cliente";
export declare class Conta {
    private numero;
    private agencia;
    private dataAbertura;
    private saldo;
    private limiteDiario;
    private saquesDoDia;
    bloqueada: boolean;
    titular: Cliente;
    constructor(numero: number, agencia: number, dataAbertura: string, saldo: number, limiteDiario: number, titular: Cliente);
    getNumero(): number;
    getAgencia(): number;
    getDataAbertura(): string;
    getSaldo(): number;
    getTitular(): Cliente;
    sacar(valor: number): void;
    depositar(valor: number): void;
    consultarSaldo(): number;
}
//# sourceMappingURL=Conta.d.ts.map
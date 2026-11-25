import type { Conta } from "./Conta";
import type { Notificacao } from "./interface/Notificacao";
export declare class Cliente {
    nome: string;
    private cpf;
    private endereco;
    private renda;
    contas: Conta[];
    canais: Notificacao[];
    constructor(nome: string, cpf: string, endereco: string, renda: number);
    getNome(): string;
    getCpf(): string;
    getEndereco(): string;
    getRenda(): number;
    adicionarConta(conta: Conta): void;
    adicionarCanal(canal: Notificacao): void;
    notificar(mensagem: string): void;
}
//# sourceMappingURL=Cliente.d.ts.map
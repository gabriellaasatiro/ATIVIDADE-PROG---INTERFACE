
import type { Conta } from "./Conta";
import type { Notificacao } from "./interface/Notificacao";

export class Cliente {

    public nome: string;
    private cpf: string;
    private endereco: string;
    private renda: number;

    contas: Conta[] = [];
    canais: Notificacao[] = [];

    constructor(
        nome: string,
        cpf: string,
        endereco: string,
        renda: number
    ) {
        this.nome = nome;
        this.cpf = cpf;
        this.endereco = endereco;
        this.renda = renda;
    }

    getNome(): string {
        return this.nome;
    }

    getCpf(): string {
        return this.cpf;
    }

    getEndereco(): string {
        return this.endereco;
    }

    getRenda(): number {
        return this.renda;
    }
    adicionarConta(conta: Conta): void {
        this.contas.push(conta);
    }

    adicionarCanal(canal: Notificacao): void {
        this.canais.push(canal);
    }

    notificar(mensagem: string): void {
        for (const canal of this.canais) {
            canal.enviarMensagem(this, mensagem);
        }
    }
}

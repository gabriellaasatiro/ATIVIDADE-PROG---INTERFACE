
import type { Cliente } from "../Cliente";
import type { Notificacao } from "./Notificacao";

export class SMS implements Notificacao {

    enviarMensagem(cliente: Cliente, mensagem: string): void {

        console.log(
            `SMS enviado para ${cliente.nome}: ${mensagem}`
        );

    }
}

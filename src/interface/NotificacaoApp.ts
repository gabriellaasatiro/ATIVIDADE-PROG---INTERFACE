
import type { Cliente } from "../Cliente";
import type { Notificacao } from "./Notificacao";

export class NotificacaoApp implements Notificacao {

    enviarMensagem(cliente: Cliente, mensagem: string): void {

        console.log(
            `Notificação no aplicativo para ${cliente.nome}: ${mensagem}`
        );

    }
}

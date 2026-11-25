
import type { Cliente } from "../Cliente";
import type { Notificacao } from "./Notificacao";

export class Email implements Notificacao {

    enviarMensagem(cliente: Cliente, mensagem: string): void {

        console.log(
            `E-mail enviado para ${cliente.nome}: ${mensagem}`
        );

    }
}

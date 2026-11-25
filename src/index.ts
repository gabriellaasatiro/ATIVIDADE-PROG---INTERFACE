
import { Cliente } from "./Cliente";
import { Conta } from "./Conta";

import { SMS } from "./interface/SMS";
import { Email } from "./interface/Email";
import { NotificacaoApp } from "./interface/NotificacaoApp";

import { SaqueException } from "./excecoes/SaqueException";

const cliente1 = new Cliente(
    "Mariana",
    "333.333.333-33",
    "Rua das Flores",
    4000
);

const cliente2 = new Cliente(
    "Lucas",
    "444.444.444-44",
    "Avenida Brasil",
    5500
);

cliente1.adicionarCanal(new Email());
cliente1.adicionarCanal(new NotificacaoApp());

cliente2.adicionarCanal(new SMS());
cliente2.adicionarCanal(new Email());

const conta1 = new Conta(
    201,
    2,
    "25/11/2026",
    200,
    800,
    cliente1
);

const conta2 = new Conta(
    202,
    2,
    "25/11/2026",
    1500,
    300,
    cliente2
);

function testarSaque(conta: Conta, valor: number): void {

    try {
        conta.sacar(valor);

    } catch (erro) {

        if (erro instanceof SaqueException) {

            console.log("ERRO:", erro.message);

            conta.titular.notificar(erro.message);

        } else {
            console.log("Erro inesperado:", erro);
        }
    }

    console.log("");
}

console.log("TESTES DE VALOR INVÁLIDO");
testarSaque(conta1, -100);
testarSaque(conta1, 0);

console.log("TESTES DE CONTA BLOQUEADA");
conta1.bloqueada = true;

testarSaque(conta1, 100);
testarSaque(conta1, 200);

conta1.bloqueada = false;

console.log("TESTES DE SALDO INSUFICIENTE");
testarSaque(conta1, 900);
testarSaque(conta1, 1000);

console.log("TESTES DE LIMITE DIÁRIO");
testarSaque(conta2, 350);
testarSaque(conta2, 400);

console.log("TESTES DE SAQUE COM SUCESSO");
testarSaque(conta2, 100);
testarSaque(conta2, 50);

console.log("SALDOS FINAIS");
console.log("Saldo de Mariana:", conta1.consultarSaldo());
console.log("Saldo de Lucas:", conta2.consultarSaldo());
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
class Conta {
    constructor(numero, cliente) {
        this.numero = numero;
        this.cliente = cliente;
        this.saldo = 0;
    }
    depositar(valor) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado!`);
    }
    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado!`);
        }
        else {
            console.log("Saldo insuficiente!");
        }
    }
    consultarSaldo() {
        console.log(`Saldo atual: R$${this.saldo}`);
    }
}
exports.Conta = Conta;

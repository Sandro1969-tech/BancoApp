"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = void 0;
class Banco {
    constructor() {
        this.contas = [];
    }
    adicionarConta(conta) {
        this.contas.push(conta);
        console.log(`Conta ${conta.numero} adicionada ao banco.`);
    }
    buscarConta(numero) {
        return this.contas.find(c => c.numero === numero);
    }
}
exports.Banco = Banco;

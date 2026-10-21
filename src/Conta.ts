import { Cliente } from "./Cliente";

export class Conta {
  private saldo: number;

  constructor(public numero: string, public cliente: Cliente) {
    this.saldo = 0;
  }

  depositar(valor: number): void {
    this.saldo += valor;
    console.log(`Depósito de R$${valor} realizado!`);
  }

  sacar(valor: number): void {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      console.log(`Saque de R$${valor} realizado!`);
    } else {
      console.log("Saldo insuficiente!");
    }
  }

  consultarSaldo(): void {
    console.log(`Saldo atual: R$${this.saldo}`);
  }
}

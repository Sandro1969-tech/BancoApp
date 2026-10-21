import { Conta } from "./Conta";
import { Cliente } from "./Cliente";

export class Banco {
  private contas: Conta[] = [];

  adicionarConta(conta: Conta): void {
    this.contas.push(conta);
    console.log(`Conta ${conta.numero} adicionada ao banco.`);
  }

  buscarConta(numero: string): Conta | undefined {
    return this.contas.find(c => c.numero === numero);
  }
}

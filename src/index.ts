import { Cliente } from "./Cliente";
import { Conta } from "./Conta";
import { Banco } from "./Banco";

const banco = new Banco();

const cliente1 = new Cliente("Sandro", "123.456.789-00");
const conta1 = new Conta("001", cliente1);

banco.adicionarConta(conta1);

conta1.depositar(500);
conta1.consultarSaldo();
conta1.sacar(200);
conta1.consultarSaldo();

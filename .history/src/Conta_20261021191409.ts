import { Cliente } from "./Cliente";

export class Conta {
    private  saldo: number;

    constructor(public numero: string, public cliente)
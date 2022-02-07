export class Compras {
    idCompra?: number;
    idUsuario: number;
    fecha: Date;
    medioPago: CharacterData;
    numeroSemanas: number;
    valorTotal: BigInteger;
    estado: CharacterData;

    constructor(idUsuario: number, fecha: Date, medioPago: CharacterData,
        numeroSemanas: number, valorTotal: BigInteger, estado: CharacterData) {
        this.idUsuario = idUsuario;
        this.fecha = fecha;
        this.medioPago = medioPago;
        this.numeroSemanas = numeroSemanas;
        this.valorTotal = valorTotal;
        this.estado = estado;
        }
}

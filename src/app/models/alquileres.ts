export class Alquileres {
id:object={
    idCompra:Number,
    idJuego:Number
};
    fechaInicio: String;
    fechaFin: String;

constructor(id:object,fechaInicio:String,fechFin:String) {
    this.id = id;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechFin;
}
}
// interface Id {
//     idJuego: number;
//     idCompra: number;
// }

export class Juegos {
    idJuego?: number;
    nombre: String;
    ano: number;
    protagonistas: String;
    director: String;
    idTecnologia:number;
    precio: BigInteger;
    constructor(nombre: String, ano: number, protagonistas: String, director: String,
        idTecnologia: number, precio: BigInteger) {
        this.nombre = nombre;
        this.ano = ano;
        this.protagonistas = protagonistas;
        this.director = director;
        this.idTecnologia = idTecnologia;
        this.precio = precio;
        }
}

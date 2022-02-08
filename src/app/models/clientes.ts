export class Clientes {
    idUsuario?: Number;
    nombreUsuario: String;
    apellidoUsuario: String;
    celular: BigInteger;
    direccion: String;
    correo: String;

    constructor(nombreUsuario:String,apellidoUsuario:String,celular:BigInteger,direccion:String,correo:String) {
        this.nombreUsuario = nombreUsuario;
        this.apellidoUsuario = apellidoUsuario;
        this.celular = celular;
        this.direccion = direccion;
        this.correo = correo;
    }
}

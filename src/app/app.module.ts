import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BuscarJuegoComponent } from './juegos/buscar-juego.component';
import { AgregarJuegoComponent } from './juegos/agregar-juego.component';
import { ActualizarJuegoComponent } from './juegos/actualizar-juego.component';
import { AgregarClienteComponent } from './clientes/agregar-cliente.component';
import { AgregarCompraComponent } from './compras/agregar-compra.component';
import { ListarHoyCompraComponent } from './compras/listar-hoy-compra.component';
import { ListarAlquilerComponent } from './alquileres/listar-alquiler.component';

import {HttpClientModule} from'@angular/common/http';
import {FormsModule} from'@angular/forms';
//importaciones externas
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    BuscarJuegoComponent,
    AgregarJuegoComponent,
    ActualizarJuegoComponent,
    AgregarClienteComponent,
    AgregarCompraComponent,
    ListarHoyCompraComponent,
    ListarAlquilerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

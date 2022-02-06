import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//importaciones externas
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { BuscarJuegoComponent } from './juegos/buscar-juego.component';
import { AgregarJuegoComponent } from './juegos/agregar-juego.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscarJuegoComponent,
    AgregarJuegoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

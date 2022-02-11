import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Juegos } from '../models/juegos';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {
  juegoURL = 'http://localhost:8080/juegos';
  constructor(private httpClient: HttpClient) { }
  
  public actualizar(id: number, juego: Juegos): Observable<Juegos>{
    return this.httpClient.put<Juegos>(this.juegoURL + 'actualizar/${id}', juego);
  }
  public agregarJuego(juego: Juegos): Observable<Juegos>{
    return this.httpClient.post<Juegos>(this.juegoURL + 'insertar', juego);
  }
  public buscarJuego(id: number): Observable<Juegos>{
    return this.httpClient.get<Juegos>(this.juegoURL + '${id}');
  }
}

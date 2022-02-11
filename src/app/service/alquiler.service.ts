import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AlquilerService {
  alquilerURL = 'http://localhost:8080/alquileres/';


  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<AlquilerService[]>{
    return this.httpClient.get<AlquilerService[]>(this.alquilerURL);
  }
  public listarPorId(id: number): Observable<AlquilerService[]>{
    return this.httpClient.get<AlquilerService[]>(this.alquilerURL + '${id}');
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compras } from '../models/compras';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {
  compraURL = 'http://localhost:8080/compra';
  constructor(private HttpClient:HttpClient) { }

  public agregarCompra(id:number,compra: Compras): Observable<any>{
    return this.HttpClient.post<any>(this.compraURL+'agregar/${id}',compra);
  }

  public listaTody(): Observable<compra[]>{
    return this.HttpClient.get<compra[]>(this.compraURL + 'today');
  }
}

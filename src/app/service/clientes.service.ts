import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import { Clientes } from '../models/clientes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  clienteURL = 'http://localhost:8080/cliente/';

  constructor(private httpClient: HttpClient) { }

  public guardarCliente(cliente: Clientes): Observable<any>{
    return this.httpClient.post<any>(this.clienteURL, cliente);
  }
}

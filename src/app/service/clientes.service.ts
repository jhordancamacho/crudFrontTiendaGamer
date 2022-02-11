import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  clienteURL = 'http://localhost:8080/cliente/';

  constructor(private httpClient: HttpClient) { }
}

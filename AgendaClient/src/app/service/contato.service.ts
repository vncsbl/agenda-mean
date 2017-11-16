import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { containsTree } from '@angular/router/src/url_tree';


@Injectable()
export class ContatoService {

  urlServicos = 'http://localhost:3000/contatos';

  constructor(private http: HttpClient) { }
  
  cadastrar(contato: any) {
    return this.http.post(this.urlServicos, contato);
  }
  
  listar() {
    return this.http.get<any[]>(this.urlServicos);
  }

  editar(id: any, contato: any){
    return this.http.put(this.urlServicos + '/' + id, contato);
  }
  
  remover(id: any) {
    return this.http.delete(this.urlServicos + '/' + id);
  }
}
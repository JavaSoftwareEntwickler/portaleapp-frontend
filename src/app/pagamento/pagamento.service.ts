import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PagamentoService {
  private readonly http = inject(HttpClient);
  
  processaPagamento(data : any): Observable<string>{
    //return this.http.post('http://localhost:8080/pagamento/processa', data,{
    return this.http.post('http://localhost/pagamento/processa', data,{
      responseType : 'text'
    });
  }
}

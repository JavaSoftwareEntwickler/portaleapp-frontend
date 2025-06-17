import { Component } from '@angular/core';
import { HttpClient, HttpClientModule  } from '@angular/common/http';
import { CommonModule } from '@angular/common';

/** Definisco il componente standalone con la logica per fare la chiamata HTTP. */

@Component({
  selector: 'app-root',
  imports:[CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true  // Aggiungi questa riga
})
export class AppComponent {
  title = 'portaleapp-frontend';
  messaggio: string | undefined;

  constructor(private http: HttpClient) {}

  processaPagamento(): void {
    const pagamentoData = {
      tipoPagamento: 'pagamentocartacredito',
      tipoSconto: 'scontofisso',
      prezzo: 100
    };

    this.http.post('http://localhost:8080/pagamento/processa', pagamentoData, { responseType: 'text' })
      .subscribe(
        (response: string) => {

          this.messaggio = response
        },
        (error) => {
          console.error('Errore nel pagamento:', error);
        }
      );
  }
}

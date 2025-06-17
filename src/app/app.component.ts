import { Component } from '@angular/core';
import { HttpClient, HttpClientModule  } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

/** Definisco il componente standalone con la logica per fare la chiamata HTTP. */

@Component({
  selector: 'app-root',
  imports:[CommonModule, HttpClientModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true  
})
export class AppComponent {
  title = 'portaleapp-frontend';
  messaggio: string | undefined;
  // Variabili legate ai campi del form
  tipoPagamento = 'pagamentocartacredito';
  tipoSconto = 'nessunosconto';
  prezzo = 100;

  constructor(private http: HttpClient) {}

  processaPagamento(): void {
    const pagamentoData = {
      tipoPagamento: this.tipoPagamento,
      tipoSconto: this.tipoSconto,
      prezzo: this.prezzo
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

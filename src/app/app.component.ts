import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { PagamentoService } from './pagamento/pagamento.service';

@Component({
  selector: 'app-root',
  imports:[CommonModule, FormsModule],
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

  constructor(private pagamentoService: PagamentoService) {}

  processaPagamento(): void {
    const pagamentoData = {
      tipoPagamento: this.tipoPagamento,
      tipoSconto: this.tipoSconto,
      prezzo: this.prezzo
    };

    this.pagamentoService.processaPagamento(pagamentoData).subscribe({
      next: (response)=> this.messaggio = response,
      error: (err)=> console.error('Errore nel pagamento: ',err)
    });
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PagamentoService } from './pagamento.service';

@Component({
  selector: 'app-pagamento',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent {
  messaggio: string | undefined;
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
      next: (response) => this.messaggio = response,
      error: (err) => console.error('Errore nel pagamento: ', err)
    });
  }
}

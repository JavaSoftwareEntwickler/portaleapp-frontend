import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PagamentoService } from './pagamento.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-pagamento',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css'],
    animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('500ms ease-out', style({ opacity: 0 })),
      ]),
    ])
  ]
})
export class PagamentoComponent {
  messaggio: string | undefined;
  tipoPagamento = 'pagamentocartacredito';
  tipoSconto = 'nessunosconto';
  prezzo = 100;
  mostraMessaggio = false;

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
    this.messaggio = `Pagamento ${this.tipoPagamento} - Sconto ${this.tipoSconto} - €${this.prezzo}`;
    this.mostraMessaggio = true;

    setTimeout(() => {
      this.mostraMessaggio = false;
      // Facoltativo: azzera il testo dopo la dissolvenza
      setTimeout(() => this.messaggio = undefined, 500);
    }, 4000);
  }
}


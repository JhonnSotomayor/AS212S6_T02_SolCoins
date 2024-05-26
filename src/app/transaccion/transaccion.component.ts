import { Component, OnInit } from '@angular/core';
import { BlockchainService } from '../blockchain.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.component.html',
  styleUrls: ['./transaccion.component.css']
})
export class TransaccionComponent implements OnInit {
  transactionForm = new FormGroup({
    toAddress: new FormControl(''),
    amount: new FormControl(0),
  });

  address: string = ''; // Inicializa con una cadena vacía
  balance: number = 0; // Inicializa con 0

  constructor(private blockchainService: BlockchainService) { }

  async ngOnInit() {
    this.address = await this.blockchainService.getAddress();
    this.balance = await this.blockchainService.getBalance();
    console.log('Dirección en el componente:', this.address);
    console.log('Saldo en el componente:', this.balance);
  }

  async sendTransaction() {
    const toAddress = this.transactionForm?.get('toAddress')?.value;
    const amount = this.transactionForm?.get('amount')?.value;
  
    if (toAddress && amount) {
      try {
        await this.blockchainService.sendTransaction(toAddress, amount);
        // Actualizar el saldo después de la transacción
        this.balance = await this.blockchainService.getBalance();
      } catch (error) {
        console.error('Error al enviar la transacción:', error);
      }
    }
  }
}
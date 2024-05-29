import { Component, OnInit } from '@angular/core';
import { BlockchainService } from '../blockchain.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  transactionForm = new FormGroup({
    toAddress: new FormControl(''),
    amount: new FormControl(0),
  });

  address: string = ''; // Inicializa con una cadena vacía
  balance: number = 0; // Inicializa con 0

  // Código del slider
  slideIndex = 0;
  totalSlides = 0;

  constructor(private blockchainService: BlockchainService) { }

  async ngOnInit() {
    this.address = await this.blockchainService.getAddress();
    this.balance = await this.blockchainService.getBalance();
    console.log('Dirección en el componente:', this.address);
    console.log('Saldo en el componente:', this.balance);

    // Inicializar el slider
    this.totalSlides = document.querySelectorAll('.slider img').length;
    this.autoSlide();
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

  // Función para cambiar de slide
  changeSlide(n: number) {
    this.slideIndex += n;
    if (this.slideIndex < 0) {
      this.slideIndex = this.totalSlides - 1;
    } else if (this.slideIndex >= this.totalSlides) {
      this.slideIndex = 0;
    }
    const slider = document.querySelector('.slider') as HTMLElement;
    slider.style.transform = `translateX(-${this.slideIndex * 100}%)`;
  }

  // Función para pasar automáticamente los slides cada cierto tiempo
  autoSlide() {
    setInterval(() => {
      this.changeSlide(1);
    }, 5000); // Cambiar cada 5 segundos
  }
}
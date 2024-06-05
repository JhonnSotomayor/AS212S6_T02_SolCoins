import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  // Código del slider
  slideIndex = 0;
  totalSlides = 3; // Ajusta este valor al número total de slides

  constructor() { }

  ngOnInit() {
    this.autoSlide();
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
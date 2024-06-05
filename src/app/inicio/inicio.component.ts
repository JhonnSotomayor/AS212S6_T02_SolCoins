import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  carouselImages = [
    { src: 'https://www.investopedia.com/thmb/v5K6POcZQXnjy1MhKNSNTghQ6jM=/fit-in/1500x750/filters:format(png):fill(white):max_bytes(150000):strip_icc()/Metamask_logo-aca547fe6081482085662b03e2235f98.jpg', alt: 'Descripción de la imagen 1' },
    { src: 'https://elasesorfinanciero.com/wp-content/uploads/2018/03/blockchain2.png', alt: 'Descripción de la imagen 2' },
    // Añade más imágenes aquí
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
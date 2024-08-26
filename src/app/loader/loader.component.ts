import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  @Input() imageSet: string[] = []; // Configuración de imágenes
  @Input() textSet: string[] = []; // Configuración de textos
  @Input() intervalTime: number = 3000; // Tiempo de cambio (ms)
  
  currentImage: string = '';
  currentText: string = '';
  private currentIndex: number = 0;
  private intervalId: any;

  constructor() { }

  ngOnInit() {
    this.currentImage = this.imageSet[this.currentIndex];
    this.currentText = this.textSet[this.currentIndex];
    this.startLoader();
  }

  startLoader() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.imageSet.length;
      this.currentImage = this.imageSet[this.currentIndex];
      this.currentText = this.textSet[this.currentIndex];
    }, this.intervalTime);
  }

  stopLoader() {
    clearInterval(this.intervalId);
  }
}

// shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../loader/loader.component';

@NgModule({
  declarations: [LoaderComponent],
  imports: [CommonModule],
  exports: [LoaderComponent]  // Exporta el componente para que esté disponible en otros módulos
})
export class SharedModule {}

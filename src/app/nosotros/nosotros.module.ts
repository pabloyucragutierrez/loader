import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NosotrosPageRoutingModule } from './nosotros-routing.module';

import { NosotrosPage } from './nosotros.page';
import { LoaderComponent } from '../loader/loader.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NosotrosPageRoutingModule,
    SharedModule
  ],
  declarations: [NosotrosPage]
})
export class NosotrosPageModule {}

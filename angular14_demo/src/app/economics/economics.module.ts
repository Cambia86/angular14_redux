import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EconomicsRoutingModule } from './economics-routing.module';
import { EconomicsListComponent } from './economics-list/economics-list.component';


@NgModule({
  declarations: [
    EconomicsListComponent
  ],
  imports: [
    CommonModule,
    EconomicsRoutingModule
  ]
})
export class EconomicsModule { }

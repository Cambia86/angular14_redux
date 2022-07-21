import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EconomicsRoutingModule } from './economics-routing.module';
import { EconomicsListComponent } from './economics-list/economics-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EconomicsListComponent
  ],
  imports: [
    CommonModule,
    EconomicsRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class EconomicsModule { }

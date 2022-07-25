import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EconomicsRoutingModule } from './economics-routing.module';
import { EconomicsListComponent } from './economics-list/economics-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

// Available options
interface NgxSpinnerConfig {
  type?: string;
}
@NgModule({
  declarations: [
    EconomicsListComponent
  ],
  imports: [
    CommonModule,
    EconomicsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })

  ]
})
export class EconomicsModule { }

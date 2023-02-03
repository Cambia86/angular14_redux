import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EconomicsRoutingModule } from './economics-routing.module';
import { EconomicsListComponent } from './economics-list/economics-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

import { WebcamModule } from 'ngx-webcam';
import {NgxImageCompressService} from "ngx-image-compress";

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
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    WebcamModule
  ]
})
export class EconomicsModule { }

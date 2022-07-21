import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './app-state';
import { TransactionEffects } from './app-state/effects/transaction.effects';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    EffectsModule.forRoot([TransactionEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

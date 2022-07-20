import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EconomicsListComponent } from './economics-list/economics-list.component';

const routes: Routes = [
  { path: '', component: EconomicsListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EconomicsRoutingModule { }

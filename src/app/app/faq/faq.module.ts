import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './faq.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {path: '', redirectTo: 'faq', pathMatch: 'full'},
  {path: '', component: FaqComponent},
];

@NgModule({
  declarations: [FaqComponent],
  imports: [
  CommonModule,
    NgbModule,
    RouterModule.forChild(routes)
  ]
})
export class FaqModule { }





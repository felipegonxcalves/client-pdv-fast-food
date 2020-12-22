import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';

import { PdvComponent } from './pdv.component';

const appRoutes: Routes = [
  {path: 'pdv', component: PdvComponent},
];

@NgModule({
  declarations: [PdvComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    FormsModule
  ]
})
export class PdvModule { }

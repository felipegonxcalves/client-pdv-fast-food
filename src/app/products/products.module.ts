import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ProductsComponent } from './products.component';
import { ProductsCreateComponent } from './products-create/products-create.component';

const appRoutes: Routes = [
  {path: 'produtos', component: ProductsComponent},
  {path: 'produtos/novo', component: ProductsCreateComponent}
];

@NgModule({
  declarations: [ProductsComponent, ProductsCreateComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ]
})
export class ProductsModule { }

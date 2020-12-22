import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppHttpServiceService } from './app-http-service.service';

import { ProductsModule } from './products/products.module';
import { PdvModule } from './pdv/pdv.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

const appRoutes: Routes = [
  { path: '', redirectTo: '/pdv', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ProductsModule,
    PdvModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [AppHttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

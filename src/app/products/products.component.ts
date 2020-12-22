import { Component, OnInit } from '@angular/core';
import { AppHttpServiceService } from './../app-http-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: any;

  constructor(private service: AppHttpServiceService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.service.build('products')
      .list()
      .subscribe((data) => {
        this.products = data;
      });
  }

}

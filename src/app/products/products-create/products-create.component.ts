import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppHttpServiceService } from './../../app-http-service.service';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent implements OnInit {

  public product: any = {
    name: '',
    code: '',
    amount: '',
    price: ''
  };

  constructor(private service: AppHttpServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  save() {
    this.service.build('products')
      .create(this.product)
      .subscribe(() => {
        this.router.navigate(['/produtos']);
      });
  }

}
